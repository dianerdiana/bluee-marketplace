import React from 'react';
import { cn } from '@/configs/cn';
import { Link } from 'react-router-dom';

type ButtonProps = React.ComponentProps<'button'> & {
  variant?: keyof typeof variants;
};

type ButtonLinkProps = React.ComponentProps<'a'> & {
  variant?: keyof typeof variants;
};

const baseClass =
  'px-4 py-2 rounded-md font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer';

const variants = {
  primary: 'bg-primary text-white hover:bg-blue-900 focus:ring-blue-300',
  secondary: 'bg-secondary text-white hover:bg-gray-900 focus:ring-gray-300',
  dark: 'bg-dark text-white hover:bg-gray-700 focus:ring-gray-900',
  pink: 'bg-pink-500 text-white hover:bg-pink-700 focus:ring-pink-900',
  'light-primary': 'bg-slate-primary text-primary hover:bg-blue-100 focus:ring-blue-500',
  'light-secondary': 'bg-gray-200 text-secondary hover:bg-gray-300 focus:ring-gray-300',
  'light-pink': 'bg-pink-100 text-pink-500 hover:bg-pink-200 focus:ring-pink-300',
  'light-danger': 'bg-red-100 text-red-500 hover:bg-red-200 focus:ring-red-300',
  'outline-secondary': 'border border-back text-secondary hover:bg-gray-100 focus:ring-gray-400',
};

export const Button: React.FC<ButtonProps> = ({ className, children, variant = 'primary', ...props }) => {
  return (
    <button className={cn(baseClass, variants[variant], className)} {...props}>
      {children}
    </button>
  );
};

export const ButtonLink: React.FC<ButtonLinkProps> = ({
  className,
  children,
  variant = 'primary',
  href = '/home',
  ...props
}) => {
  return (
    <Link to={href} className={cn(baseClass, variants[variant], className)} {...props}>
      {children}
    </Link>
  );
};
