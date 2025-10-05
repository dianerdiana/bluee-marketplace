import { appConfig } from '@/configs/appConfig';
import { cn } from '@/configs/cn';

type BrandImageProps = React.HTMLAttributes<HTMLDivElement>;

const BrandImage: React.FC<BrandImageProps & { imgClassName?: string; brandClassName?: string }> = ({
  className,
  imgClassName,
  brandClassName,
  ...props
}) => {
  return (
    <div className={cn('flex items-center w-fit', className)} {...props}>
      <img src={appConfig.logoUrl} className={cn('h-auto w-11 me-3', imgClassName)} />
      <span className={cn('text-2xl font-black font-mons', brandClassName)}>{appConfig.brandName}</span>
    </div>
  );
};

export default BrandImage;
