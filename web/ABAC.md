Tentu, berikut adalah rangkuman dari diskusi kita mengenai penggunaan **`useLayoutEffect`** dan **CASL** untuk implementasi **Action-Based Access Control (ABAC)** yang **bebas kedipan (_flash-free_)** dalam React Router v6.

Anda bisa menyalin konten di bawah ini ke file Markdown (`.md`) untuk diunduh.

---

# 🛡️ Panduan Implementasi Akses Berbasis Aksi (CASL) Bebas Kedipan

Panduan ini merangkum strategi untuk menggabungkan **React Router v6**, **CASL**, dan **`useLayoutEffect`** guna memastikan pengecekan otentikasi dan otorisasi terjadi secara sinkron, **menghilangkan _flash of wrong content_** pada rute pribadi.

## 1\. Konsep Kunci: Mencegah "Kedipan"

Fenomena "kedipan" (_flash_) terjadi ketika _browser_ melukis tampilan **sebelum** status otentikasi/otorisasi akhir diselesaikan (biasanya di `useEffect` yang asinkron).

| Hook                  | Waktu Eksekusi                                               | Hasil                                                               |
| :-------------------- | :----------------------------------------------------------- | :------------------------------------------------------------------ |
| **`useEffect`**       | Setelah DOM diperbarui **dan** setelah _browser_ melukis.    | Berisiko "kedipan" visual.                                          |
| **`useLayoutEffect`** | Setelah DOM diperbarui **tetapi sebelum** _browser_ melukis. | **Wajib** digunakan untuk mencegah "kedipan" pada pengecekan akses. |

Semua pengecekan akses (Auth + CASL) harus dilakukan secara sinkron di dalam `useLayoutEffect`.

---

## 2\. Struktur Proyek

| File                 | Peran                                                                                                                                        |
| :------------------- | :------------------------------------------------------------------------------------------------------------------------------------------- |
| `main.jsx`           | Tempat `AbilityProvider` **membungkus** `RouterProvider`.                                                                                    |
| `AbilityContext.tsx` | Menyimpan objek `Ability` CASL global, dimuat dari data _permission_ cepat.                                                                  |
| `useAccess.ts`       | **Custom hook** yang menggabungkan pengecekan _Auth_ (dari _localStorage_) dan _Otorisasi_ (CASL `can()`) menggunakan **`useLayoutEffect`**. |
| `PrivateRoute.tsx`   | Komponen **Route Element** yang memanggil `useAccess` dan mengarahkan pengguna (`<Navigate>`) jika akses ditolak.                            |
| `router.tsx`         | Mendefinisikan rute bersarang, meneruskan `action` dan `subject` ke `PrivateRoute`.                                                          |

---

## 3\. Contoh Penerapan Kode

### 3.1. `src/context/AbilityContext.tsx`

```typescript
import { Ability, AbilityBuilder, createContext, useContext, useEffect, useState } from '@casl/ability';
// Type AppAbility disesuaikan dengan aksi dan subjek yang Anda gunakan.
export type AppAbility = Ability<[string, string]>;
export const AbilityContext = createContext<AppAbility>(null!);
export const useAbility = () => useContext(AbilityContext);

export const AbilityProvider = ({ children }: { children: React.ReactNode }) => {
  const [ability, setAbility] = useState<AppAbility>(new Ability());

  // Memuat aturan CASL dari penyimpanan lokal setelah mount
  useEffect(() => {
    // 💡 Di sini, Anda harus mendapatkan 'user_permissions' secara sinkron atau asinkron
    // Jika asinkron, pastikan state `ability` di-set sebelum rendering konten sensitif.
    const permissionsJSON = localStorage.getItem('user_permissions') || '[]';
    const userPermissions = JSON.parse(permissionsJSON);

    const { rules } = new AbilityBuilder<AppAbility>();

    userPermissions.forEach((p: { action: string; subject: string }) => {
      rules.push({ action: p.action, subject: p.subject }); // Sederhanakan pembuatan aturan
    });

    setAbility(new Ability(rules));
  }, []);

  return <AbilityContext.Provider value={ability}>{children}</AbilityContext.Provider>;
};
```

### 3.2. `src/hooks/useAccess.ts`

```typescript
import { useState, useLayoutEffect } from 'react';
import { useAbility } from '../context/AbilityContext';

interface AccessStatus {
  canAccess: boolean;
  isLoading: boolean;
}

export const useAccess = (action: string, subject: string): AccessStatus => {
  const ability = useAbility();
  const [status, setStatus] = useState<AccessStatus>({
    canAccess: false,
    isLoading: true,
  });

  // 💡 Kunci: Semua Pengecekan Akses di sini
  useLayoutEffect(() => {
    // 1. Cek Otentikasi (Sederhana: Cek token)
    const isAuthenticated = !!localStorage.getItem('auth_token');
    let isAuthorized = false;

    if (isAuthenticated) {
      // 2. Cek Otorisasi CASL
      isAuthorized = ability.can(action, subject);
    }

    // 3. Set status akhir SEBELUM lukisan browser
    setStatus({
      canAccess: isAuthenticated && isAuthorized,
      isLoading: false,
    });
  }, [ability, action, subject]);

  return status;
};
```

### 3.3. `src/components/PrivateRoute.tsx`

```tsx
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAccess } from '../hooks/useAccess';

interface PrivateRouteProps {
  action: string;
  subject: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ action, subject }) => {
  const { canAccess, isLoading } = useAccess(action, subject);

  // Tampilkan Loading secara stabil saat pengecekan berlangsung
  if (isLoading) {
    return <div>Memverifikasi Akses...</div>;
  }

  // Navigasi instan jika akses ditolak (bebas kedipan)
  if (!canAccess) {
    return <Navigate to='/403' replace />;
  }

  // Akses Diizinkan, render konten anak
  return <Outlet />;
};

export default PrivateRoute;
```

### 3.4. Konfigurasi `router.tsx`

```typescript
import { createBrowserRouter } from 'react-router-dom';
import AppLayout from './layouts/AppLayout'; // Layout yang mengandung Header/Footer global
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './pages/Dashboard';
import Reports from './pages/Reports';
// ... (Halaman lainnya)

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />, // AppLayout harus merender <Outlet />
    children: [
      // 🎯 Rute Privat Dibungkus Oleh PrivateRoute
      {
        path: '/',
        element: <Outlet />, // Pembungkus rute agar AppLayout tetap sebagai layout terluar
        children: [
          // Perlu izin 'view' pada 'Dashboard'
          {
            element: <PrivateRoute action='view' subject='Dashboard' />,
            children: [{ path: 'dashboard', element: <Dashboard /> }],
          },
          // Perlu izin 'export' pada 'Reports'
          {
            element: <PrivateRoute action='export' subject='Reports' />,
            children: [{ path: 'reports/export', element: <Reports /> }],
          },
          // Rute Publik lainnya...
        ],
      },
      // ...
    ],
  },
]);

export default router;
```
