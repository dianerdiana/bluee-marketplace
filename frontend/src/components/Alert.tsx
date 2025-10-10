import { cn } from '@/configs/cn';

type AlertProps = React.HTMLAttributes<HTMLDivElement> & { variant?: keyof typeof variants };

const variants = {
  primary: 'bg-primary',
  secondary: 'bg-secondary',
  warning: 'bg-warning',
  success: 'bg-success',
  danger: 'bg-red-400',
  yellow: 'bg-yellow-400',
};

export const Alert: React.FC<AlertProps> = ({ children, className, variant = 'primary', ...props }) => {
  return (
    <div
      className={cn('relative overflow-hidden flex items-center rounded-2xl p-4', variants[variant], className)}
      {...props}
    >
      {children}
      <div className='absolute z-10 -right-28 w-36 h-36 rounded-full border border-[#ffffff] p-6 bg-white opacity-[7%]' />
      <div className='absolute -right-20 z-20 w-36 h-36 rounded-full border border-[#ffffff] p-6 bg-white opacity-[6%]' />
      <div className='absolute z-10 -right-12 w-36 h-36 rounded-full border border-[#ffffff] p-6 bg-white opacity-[7%]' />
    </div>
  );
};
