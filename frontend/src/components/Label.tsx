import { cn } from '@/configs/cn';
import type { LabelHTMLAttributes, FC } from 'react';

type LabelProps = LabelHTMLAttributes<HTMLLabelElement>;

export const Label: FC<LabelProps> = ({ className, htmlFor, children, ...props }) => {
  return (
    <label htmlFor={htmlFor} className={cn('block mb-2 font-semibold text-secondary', className)} {...props}>
      {children}
    </label>
  );
};
