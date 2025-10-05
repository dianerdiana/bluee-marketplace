// Router
import { createBrowserRouter, Navigate } from 'react-router-dom';

// Layouts
const LazyApp = lazy(() => import('@/App.tsx'));
import BlankLayout from '@/layouts/BlankLayout';

// Pages
import SignInPage from '@/pages/authentication/signin';
import SignUpPage from '@/pages/authentication/signup';
import { lazy } from 'react';

export const router = createBrowserRouter([
  {
    Component: LazyApp,
    children: [
      {
        path: '/',
        element: <Navigate to='signin' replace />,
      },
      {
        Component: BlankLayout,
        children: [
          { path: '/signin', Component: SignInPage },
          { path: '/signup', Component: SignUpPage },
        ],
      },
    ],
  },
]);
