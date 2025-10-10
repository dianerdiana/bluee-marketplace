import { useState, type FC } from 'react';
import { cn } from '@/configs/cn';
import { DynamicIcon } from './DynamicIcon';
import type { IconName } from '@/types/iconNames';

type InputWrapperProps = React.HTMLAttributes<HTMLDivElement> & { isInvalid?: boolean };
type IconWrapperProps = React.HTMLAttributes<HTMLDivElement>;
type InputProps = { wrapperProps?: InputWrapperProps } & React.ComponentProps<'input'>;
type BaseInputProps = React.ComponentProps<'input'>;
type InputMessageProps = React.HtmlHTMLAttributes<HTMLSpanElement>;
type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  isInvalid?: boolean;
  wrapperClassName?: string;
};
type InputIconProps = React.ComponentProps<'input'> & {
  isInvalid?: boolean;
  icon?: IconName;
};

type InputRatingProps = {
  value?: number;
  max?: number;
  size?: number; // ✅ tambahkan prop size
  onChange?: (value: number) => void;
};

type InputIconTextareaProps = React.ComponentProps<'textarea'> & {
  isInvalid?: boolean;
  icon?: IconName;
  wrapperProps?: InputWrapperProps;
};

export const InputWrapper: FC<InputWrapperProps> = ({ children, className, isInvalid = false, ...props }) => (
  <div
    className={cn(
      'flex gap-3 py-4 px-3 border border-back rounded-xl focus-within:ring focus-within:ring-primary focus-within:border-primary transition-all duration-300',
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

export const InputIcon: FC<InputIconProps> = ({ isInvalid, icon = 'Sms', type, ...props }) => {
  return (
    <InputWrapper isInvalid={isInvalid}>
      <IconWrapper>
        <DynamicIcon name={icon} size={24} className='text-secondary' />
      </IconWrapper>
      <span className='w-px h-full bg-secondary' />
      <BaseInput type={type} {...props} />
    </InputWrapper>
  );
};

export const InputIconTextarea: FC<InputIconTextareaProps> = ({ isInvalid, icon = 'Sms', ...props }) => {
  return (
    <InputWrapper isInvalid={isInvalid}>
      <IconWrapper>
        <DynamicIcon name={icon} size={24} className='text-secondary' />
      </IconWrapper>
      <span className='w-px self-stretch bg-back' />
      <textarea
        className={cn(
          'appearance-none text-base outline-none w-full placeholder:text-dark placeholder:font-bold tracking-[0.35px]',
          props.className,
        )}
        {...props}
      />
    </InputWrapper>
  );
};

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

export const Star = ({
  fill = 100,
  size = 22, // default
  onClick,
  onMouseEnter,
  onMouseLeave,
}: {
  fill: number;
  size?: number;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}) => (
  <svg
    width={size}
    height={(size * 16) / 18} // proporsional agar bentuk tetap
    viewBox='0 0 18 16'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className='inline-block cursor-pointer transition-transform hover:scale-110'
    onClick={onClick}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <path
      d='M16.7201 7.63472L14.3812 9.88877C14.06 10.1978 13.8419 10.8158 13.9086 11.2582L14.2721 13.9C14.5084 15.5906 13.4602 16.3237 11.9454 15.536L9.37622 14.1909C8.94601 13.9667 8.24314 13.9788 7.82505 14.2272L5.57705 15.5421C3.80168 16.5782 2.74131 15.7966 3.21393 13.797L3.87439 11.0037C3.99558 10.4947 3.77139 9.79788 3.38965 9.4525L1.26284 7.53171C-0.258038 6.15625 0.166112 4.90804 2.21415 4.7505L4.80752 4.5566C5.29227 4.52024 5.88002 4.13851 6.10421 3.7083L7.44937 1.12704C8.24314 -0.381717 9.52165 -0.375657 10.2912 1.14522L11.4909 3.52046C11.6969 3.92037 12.218 4.30817 12.6604 4.37482L15.8718 4.89592C17.6047 5.18677 17.9865 6.4168 16.7201 7.63472Z'
      fill={`url(#gradient-${fill}-${size})`}
    />
    <defs>
      <linearGradient id={`gradient-${fill}-${size}`} x1='0' x2='1' y1='0' y2='0'>
        <stop offset={`${fill}%`} stopColor='#FF7020' />
        <stop offset={`${fill}%`} stopColor='#E0E0E0' />
      </linearGradient>
    </defs>
  </svg>
);

export const InputRating: React.FC<InputRatingProps> = ({ value = 0, max = 5, size = 22, onChange }) => {
  const [hoverValue, setHoverValue] = useState<number | null>(null);
  const displayValue = hoverValue ?? value;

  const handleClick = (index: number) => onChange?.(index + 1);

  return (
    <div className='flex items-center gap-1'>
      {Array.from({ length: max }, (_, i) => {
        const fill = Math.min(100, Math.max(0, (displayValue - i) * 100));
        return (
          <Star
            key={i}
            size={size}
            fill={fill}
            onClick={() => handleClick(i)}
            onMouseEnter={() => setHoverValue(i + 1)}
            onMouseLeave={() => setHoverValue(null)}
          />
        );
      })}
    </div>
  );
};
