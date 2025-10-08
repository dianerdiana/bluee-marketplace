import { cn } from '@/configs/cn';

type ContainerProps = React.HTMLAttributes<HTMLDivElement>;

export const Container: React.FC<ContainerProps> = ({ children, className, ...props }) => {
  return (
    <div className={cn('container, px-5', className)} {...props}>
      {children}
    </div>
  );
};
