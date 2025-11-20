import { lazy } from 'react';
import type { AppRoute } from '@/types/route.type';

// Pages
const SignInPage = lazy(() => import('../../views/authentication/pages/sign-in.page.tsx'));

export const AuthRoute: AppRoute[] = [
  {
    path: '/signin',
    element: <SignInPage />,
    meta: {
      layout: 'blank',
      publicRoute: true,
      restricted: true,
    },
  },
];
