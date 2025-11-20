import { appConfig } from '@/configs/app.config';

export const getHomeRouteForLoggedInUser = () => {
  return '/signin';
};

export const formatCurrency = (value: number) => {
  return new Intl.NumberFormat(appConfig.localCurrency, {
    style: 'currency',
    currency: appConfig.currency,
    minimumFractionDigits: 0,
  }).format(value);
};

export const formatThousandNumber = (value: number) => {
  return value.toLocaleString(appConfig.localCurrency);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isObjEmpty = (obj: any) => Object.keys(obj).length === 0;
