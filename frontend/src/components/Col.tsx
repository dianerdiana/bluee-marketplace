import { cn } from '@/configs/cn';

type ColNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

type ColProps = React.HTMLAttributes<HTMLDivElement> & {
  sm?: ColNumber;
  md?: ColNumber;
  lg?: ColNumber;
  xl?: ColNumber;
};
export const Col: React.FC<ColProps> = ({ children, className, sm, md, lg, xl, ...props }) => {
  const classes = cn(
    'px-2 grow',
    sm && `app-col-sm-${sm}`,
    md && `app-col-md-${md}`,
    lg && `app-col-lg-${lg}`,
    xl && `app-col-xl-${xl}`,
    className,
  );

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};
