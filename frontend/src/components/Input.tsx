import type { FC } from 'react';
import { cn } from '@/configs/cn';
import { DynamicIcon } from './DynamicIcon';

type InputWrapperProps = React.HTMLAttributes<HTMLDivElement> & { isInvalid?: boolean };
type IconWrapperProps = React.HTMLAttributes<HTMLDivElement>;
type InputProps = { wrapperProps?: InputWrapperProps } & React.ComponentProps<'input'>;
type BaseInputProps = React.ComponentProps<'input'>;
type InputMessageProps = React.HtmlHTMLAttributes<HTMLSpanElement>;
type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  isInvalid?: boolean;
  wrapperClassName?: string;
};

export const InputWrapper: FC<InputWrapperProps> = ({ children, className, isInvalid = false, ...props }) => (
  <div
    className={cn(
      'flex items-center gap-3 py-4 px-3 border border-back rounded-xl focus-within:ring focus-within:ring-primary focus-within:border-primary transition-all duration-300',
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
      'appearance-none text-base outline-none w-full placeholder:text-dark placeholder:font-bold tracking-[0.35px]',
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

export const SelectInput: FC<SelectProps> = ({
  isInvalid = false,
  wrapperClassName,
  className,
  children,
  ...props
}) => (
  <InputWrapper
    isInvalid={isInvalid}
    className={cn('p-0 gap-0', wrapperClassName)} // biar padding dari wrapper nggak double
  >
    <select
      className={cn(
        'appearance-none bg-transparent text-base outline-none py-3 px-2 tracking-[0.35px]',
        'placeholder:text-dark placeholder:font-bold',
        'cursor-pointer',
        isInvalid ? 'text-red-500' : 'text-black',
        className,
      )}
      {...props}
    >
      {children}
    </select>

    {/* Chevron bawaan custom */}
    <div className='pe-2'>
      <DynamicIcon name='ArrowDown2' size={20} />
    </div>
  </InputWrapper>
);
