// React
import { lazy } from 'react';

// Router
import { createBrowserRouter } from 'react-router-dom';

// LazyApp
const LazyApp = lazy(() => import('../App.tsx'));

export const router = createBrowserRouter([
  {
    path: '/',
    Component: LazyApp,
  },
]);
