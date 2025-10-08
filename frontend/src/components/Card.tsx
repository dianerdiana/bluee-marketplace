import { cn } from '@/configs/cn';

type CardProps = React.HTMLAttributes<HTMLDivElement>;

export const Card: React.FC<CardProps> = ({ className, children, ...props }) => {
  return (
    <div className={cn('bg-white rounded-2xl w-full p-5', className)} {...props}>
      {children}
    </div>
  );
};
