export type RouteMeta = {
  title?: string;
  description?: string;
  publicRoute?: boolean;
  layout?: 'blank' | 'vertical';
  restricted?: boolean;
};

export type AppRoute = {
  path: string;
  element: React.ReactNode;
  meta?: RouteMeta;
};
