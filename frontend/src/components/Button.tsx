import { cn } from '@/configs/cn';
import React from 'react';

type ButtonProps = React.ComponentProps<'button'> & {
  variant?: keyof typeof variants;
};

const baseClass =
  'px-4 py-2 rounded-md font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer';

const variants = {
  primary: 'bg-primary text-white hover:bg-blue-500 focus:ring-blue-300',
  secondary: 'bg-secondary text-white hover:bg-gray-500 focus:ring-gray-300',
  outline: 'border border-gray-300 text-gray-700 hover:bg-gray-100 focus:ring-gray-400',
};

export const Button: React.FC<ButtonProps> = ({ className, children, variant = 'primary', ...props }) => {
  return (
    <button className={cn(baseClass, variants[variant], className)} {...props}>
      {children}
    </button>
  );
};
