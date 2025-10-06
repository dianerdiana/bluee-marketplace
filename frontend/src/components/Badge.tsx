import { cn } from '@/configs/cn';
import React from 'react';

type BadgeProps = React.ComponentProps<'span'> & {
  variant?: keyof typeof variants;
};

const baseClass =
  'px-4 py-2 rounded-md font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer';

const variants = {
  primary: 'bg-primary text-white hover:bg-blue-900 focus:ring-blue-300',
  secondary: 'bg-secondary text-white hover:bg-gray-900 focus:ring-gray-300',
  dark: 'bg-dark text-white hover:bg-gray-700 focus:ring-gray-900',
  pink: 'bg-pink-500 text-white hover:bg-pink-700 focus:ring-pink-900',
  'light-primary': 'bg-slate-primary text-primary hover:bg-blue-100 focus:ring-blue-300',
  'light-secondary': 'bg-slate-secondary text-secondary hover:bg-gray-100 focus:ring-gray-300',
  'light-pink': 'bg-pink-100 text-pink-500 hover:bg-pink-200 focus:ring-pink-300',
  outline: 'border border-back text-gray-700 hover:bg-gray-100 focus:ring-gray-400',
};

export const Badge: React.FC<BadgeProps> = ({ className, children, variant = 'primary', ...props }) => {
  return (
    <span className={cn(baseClass, variants[variant], className)} {...props}>
      {children}
    </span>
  );
};
