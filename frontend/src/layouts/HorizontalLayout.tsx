import { Suspense, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

const BlankLayout = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Suspense fallback={null}>
      <Outlet />
    </Suspense>
  );
};

export default BlankLayout;
