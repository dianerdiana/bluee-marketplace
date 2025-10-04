import type { FC } from 'react';
import { cn } from '@/configs/cn';

type InputWrapperProps = React.HTMLAttributes<HTMLDivElement> & { isInvalid?: boolean };
type IconWrapperProps = React.HTMLAttributes<HTMLDivElement>;
type InputProps = { wrapperProps?: InputWrapperProps } & React.ComponentProps<'input'>;
type BaseInputProps = React.ComponentProps<'input'>;
type InputMessageProps = React.HtmlHTMLAttributes<HTMLSpanElement>;

export const InputWrapper: FC<InputWrapperProps> = ({ children, className, isInvalid = false, ...props }) => (
  <div
    className={cn(
      'flex items-center gap-3 py-4 px-3 border border-secondary rounded-xl focus-within:ring focus-within:ring-primary focus-within:border-primary transition-all duration-300',
      isInvalid
        ? 'border-red-400 ring ring-red-400 focus-within:ring focus-within:ring-red-400 focus-within:border-red-400'
        : '',
      className,
    )}
    {...props}
  >
    {children}
  </div>
);

export const IconWrapper: FC<IconWrapperProps> = ({ children, className, ...props }) => (
  <div className={cn('w-6 h-6 flex items-center justify-center shrink-0', className)} {...props}>
    {children}
  </div>
);

export const BaseInput: FC<BaseInputProps> = ({ type = 'text', className, ...props }) => (
  <input
    type={type}
    className={cn(
      'appearance-none outline-none w-full text-sm placeholder:text-dark placeholder:font-bold tracking-[0.35px]',
      className,
    )}
    {...props}
  />
);

export const Input: FC<InputProps> = ({ type = 'text', wrapperProps, className, ...props }) => (
  <InputWrapper {...wrapperProps}>
    <BaseInput type={type} className={className} {...props} />
  </InputWrapper>
);

export const InputMessage: FC<InputMessageProps> = ({ className, children, ...props }) => (
  <span className={cn('text-red-400 text-sm', className)} {...props}>
    {children}
  </span>
);
