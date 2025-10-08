import { cn } from '@/configs/cn';

type ColNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

type ColProps = React.HTMLAttributes<HTMLDivElement> & {
  sm?: ColNumber;
  md?: ColNumber;
  lg?: ColNumber;
  xl?: ColNumber;
};

const getWidthClass = (size?: ColNumber, prefix?: string) => {
  if (!size) return '';
  return `${prefix ? `${prefix}:` : ''}w-${size}/12`;
};

export const Col: React.FC<ColProps> = ({
  children,
  className,
  sm = 12, // default 1 kolom penuh di layar kecil
  md,
  lg,
  xl,
  ...props
}) => {
  const classes = cn(
    'flex-1 px-2',
    getWidthClass(sm, 'sm'),
    getWidthClass(md, 'md'),
    getWidthClass(lg, 'lg'),
    getWidthClass(xl, 'xl'),
    className,
  );

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};
