import type { RouteMeta } from '@/types/route.type';
import { useAuth } from '@/hooks/use-auth';
import { Suspense } from 'react';
import { Navigate } from 'react-router-dom';

type PrivateRouteProps = {
  children: React.ReactNode;
  routeMeta?: RouteMeta;
};

export default function PrivateRoute({ children, routeMeta }: PrivateRouteProps) {
  const { isAuthenticated, isLoading } = useAuth();
  const restrictedRoute = routeMeta?.restricted || false;

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!isAuthenticated) {
    return <Navigate to='/signin' />;
  }

  if (isAuthenticated && restrictedRoute) {
    return <Navigate to='/' />;
  }

  return <Suspense fallback={<p>Loading...</p>}>{children}</Suspense>;
}
