import { cn } from '@/lib/utils';

type ContainerProps = React.HTMLAttributes<HTMLDivElement>;

export const Container: React.FC<ContainerProps> = ({ children, className, ...props }) => {
  return (
    <div className={cn('container mx-auto px-5 w-full max-w-[1241px]', className)} {...props}>
      {children}
    </div>
  );
};
