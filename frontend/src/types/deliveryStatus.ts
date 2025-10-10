export const DeliveryStatusEnum = {
  PENDING: 'PENDING',
  PROCESSING: 'PROCESSING',
  DELIVERING: 'DELIVERING',
  COMPLETED: 'COMPLETED',
  CANCELED: 'CANCELED',
} as const;

export type DeliveryStatusType = (typeof DeliveryStatusEnum)[keyof typeof DeliveryStatusEnum];
