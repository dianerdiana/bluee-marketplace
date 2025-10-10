import { cn } from '@/configs/cn';

type TitleTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type CardProps = React.HTMLAttributes<HTMLDivElement>;
type CardHeaderProps = React.HTMLAttributes<HTMLDivElement>;
type CardBodyProps = React.HTMLAttributes<HTMLDivElement>;
type CardTitleProps = React.HTMLAttributes<HTMLHeadingElement> & { tag?: TitleTag };

export const Card: React.FC<CardProps> = ({ className, children, ...props }) => {
  return (
    <div className={cn('card bg-white rounded-2xl w-full', className)} {...props}>
      {children}
    </div>
  );
};

export const CardHeader: React.FC<CardHeaderProps> = ({ className, children, ...props }) => {
  return (
    <div className={cn('flex flex-wrap justify-between py-5 px-5', className)} {...props}>
      {children}
    </div>
  );
};

export const CardBody: React.FC<CardBodyProps> = ({ className, children, ...props }) => {
  return (
    <div className={cn('pb-5 px-5', className)} {...props}>
      {children}
    </div>
  );
};

export const CardTitle: React.FC<CardTitleProps> = ({ className, children, tag: Tag = 'h2', ...props }) => {
  return (
    <Tag className={`font-bold text-xl text-dark ${className ?? ''}`} {...props}>
      {children}
    </Tag>
  );
};
