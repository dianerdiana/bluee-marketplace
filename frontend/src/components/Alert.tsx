import { cn } from '@/configs/cn';
import { alertVariants } from '@/utils/constants/alertVariants';

type AlertProps = React.HTMLAttributes<HTMLDivElement> & { variant?: keyof typeof alertVariants };

export const Alert: React.FC<AlertProps> = ({ children, className, variant = 'primary', ...props }) => {
  return (
    <div
      className={cn('relative overflow-hidden flex items-center rounded-2xl p-4', alertVariants[variant], className)}
      {...props}
    >
      <div className='absolute -right-28 w-36 h-36 rounded-full border border-[#ffffff] p-6 bg-white opacity-[7%]' />
      <div className='absolute -right-20 w-36 h-36 rounded-full border border-[#ffffff] p-6 bg-white opacity-[6%]' />
      <div className='absolute -right-12 w-36 h-36 rounded-full border border-[#ffffff] p-6 bg-white opacity-[7%]' />
      {children}
    </div>
  );
};
