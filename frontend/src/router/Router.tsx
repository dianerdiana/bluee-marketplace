// React
import { lazy } from 'react';

// Router
import { createBrowserRouter, Navigate } from 'react-router-dom';

// LazyApp
const LazyApp = lazy(() => import('../App.tsx'));

// Layouts
import BlankLayout from '../layouts/BlankLayout';
import HorizontalLayout from '../layouts/HorizontalLayout';

// Pages
const SignInPage = lazy(() => import('../pages/authentication/signin'));
const SignUpPage = lazy(() => import('../pages/authentication/signup'));

// Landing Page
const HomePage = lazy(() => import('../pages/home'));

// Product Pages
const ProductPage = lazy(() => import('../pages/products/list'));

export const router = createBrowserRouter([
  {
    Component: LazyApp,
    children: [
      {
        path: '/',
        element: <Navigate to='home' replace />,
      },
      {
        Component: BlankLayout,
        children: [
          { path: '/signin', Component: SignInPage },
          { path: '/signup', Component: SignUpPage },
        ],
      },
      {
        Component: HorizontalLayout,
        children: [
          // Landing Page
          { path: '/home', Component: HomePage },

          // Products Page
          { path: '/products', Component: ProductPage },
        ],
      },
    ],
  },
]);
