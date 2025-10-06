import { appConfig } from '@/configs/appConfig';

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
