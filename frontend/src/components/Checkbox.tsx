import React from 'react';
import { cn } from '@/configs/cn';

type CheckboxProps = React.ComponentProps<'input'>;

export const Checkbox: React.FC<CheckboxProps> = ({ className, ...props }) => {
  return (
    <input
      type='checkbox'
      className={cn(
        'w-5 h-5 rounded outline-none cursor-pointer border-gray-300 text-primary focus:ring-primary',
        className,
      )}
      {...props}
    />
  );
};
