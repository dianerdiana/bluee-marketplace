import { lazy } from 'react';
import type { AppRoute } from '@/types/route.type';

// Pages
const HomePage = lazy(() => import('../../views/public-facing/pages/home.page.tsx'));
const ProductListPage = lazy(() => import('../../views/public-facing/pages/product-list.page.tsx'));

export const HomeRoute: AppRoute[] = [
  {
    path: '/home',
    element: <HomePage />,
    meta: {
      layout: 'horizontal',
      publicRoute: true,
    },
  },
  {
    path: '/products',
    element: <ProductListPage />,
    meta: {
      layout: 'horizontal',
      publicRoute: true,
    },
  },
];
