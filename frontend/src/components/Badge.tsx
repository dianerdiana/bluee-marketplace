import { cn } from '@/configs/cn';
import React from 'react';

type BadgeProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: keyof typeof variants;
};

const baseClass = 'px-4 py-2 rounded-md font-medium w-fit';

const variants = {
  primary: 'bg-primary text-white',
  secondary: 'bg-secondary text-white',
  dark: 'bg-dark text-white',
  pink: 'bg-pink-500 text-white',
  'light-primary': 'bg-slate-primary text-primary',
  'light-secondary': 'bg-gray-200 text-dark',
  'light-pink': 'bg-pink-100 text-pink-500',
  outline: 'border border-back text-gray-700',
};

export const Badge: React.FC<BadgeProps> = ({ className, children, variant = 'primary', ...props }) => {
  return (
    <div className={cn(baseClass, variants[variant], className)} {...props}>
      {children}
    </div>
  );
};
