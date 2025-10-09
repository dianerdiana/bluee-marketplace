export const DeliveryStatusEnum = {
  Processing: 'PROCESSING',
  Pending: 'PENDING',
  Delivering: 'DELIVERING',
  Completed: 'COMPLETED',
} as const;

export type DeliveryStatusType = (typeof DeliveryStatusEnum)[keyof typeof DeliveryStatusEnum];
