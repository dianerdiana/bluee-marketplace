import { cn } from '@/configs/cn';
import { badgevariants } from '@/utils/constants/badgeVariants';
import React from 'react';

type BadgeProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: keyof typeof badgevariants;
};

const baseClass = 'px-3 py-2 rounded-md font-medium w-fit';

export const Badge: React.FC<BadgeProps> = ({ className, children, variant = 'primary', ...props }) => {
  return (
    <div className={cn(baseClass, badgevariants[variant], className)} {...props}>
      {children}
    </div>
  );
};
