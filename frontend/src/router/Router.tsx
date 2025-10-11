// React
import { lazy } from 'react';

// Router
import { createBrowserRouter, Navigate } from 'react-router-dom';

// LazyApp
const LazyApp = lazy(() => import('../App.tsx'));

// Layouts
import BlankLayout from '../layouts/BlankLayout';
import HorizontalLayout from '../layouts/HorizontalLayout';
import VerticalLayout from '../layouts/VerticalLayout';

// Types
import type { RouteHandle } from '@/types/routeHandle.ts';

// Pages
const SignInPage = lazy(() => import('../pages/authentication/signin'));
const SignUpPage = lazy(() => import('../pages/authentication/signup'));

// Landing Page
const HomePage = lazy(() => import('../pages/home'));

// Product Pages
const ProductListPage = lazy(() => import('../pages/products/list'));
const ProductDetailPage = lazy(() => import('../pages/products/details'));

// Cart Pages
const CartListPage = lazy(() => import('../pages/carts/list'));

// Checkout Pages
const CheckoutDetailPage = lazy(() => import('../pages/checkouts/details'));

// Dashboard
const DashboardPage = lazy(() => import('../pages/dashboard'));
const TransactionsListPage = lazy(() => import('../pages/transactions/list'));
const TransactionsDetailPage = lazy(() => import('../pages/transactions/details'));

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
          { path: '/products', Component: ProductListPage },
          { path: '/products/:slug/details', Component: ProductDetailPage },

          // Carts Page
          { path: '/carts', Component: CartListPage },

          // Checkout Page
          { path: '/checkouts/:storeId/details', Component: CheckoutDetailPage },
        ],
      },
      {
        Component: VerticalLayout,
        children: [
          {
            path: '/dashboard',
            Component: DashboardPage,
            handle: {
              title: 'Dashboard Overview',
              description: 'Your Dashboard Overview',
            } satisfies RouteHandle,
          },
          {
            path: '/transactions',
            Component: TransactionsListPage,
            handle: {
              title: 'Manage Transactions',
              description: 'View & Update Your Transactions',
            } satisfies RouteHandle,
          },
          {
            path: '/transactions/:transactionId/details',
            Component: TransactionsDetailPage,
            handle: {
              title: 'Transaction Details',
              description: 'Manage Transactions',
              link: '/transactions',
            } satisfies RouteHandle,
          },
        ],
      },
    ],
  },
]);
