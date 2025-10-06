import { Link } from 'react-router-dom';
import { Badge } from '@/components/Badge';
import { Button } from '@/components/Button';
import { DynamicIcon } from '@/components/DynamicIcon';
import { formatCurrency } from '@/utils/utils';
import { cn } from '@/configs/cn';

type CardProductProps = {
  id: string;
  slug: string;
  name: string;
  imageUrl: string;
  category: string;
  totalSold: number;
  price: number;
  isLiked: boolean;
  isInCart: boolean;
};

type CardProductListProps = {
  children?: React.ReactNode;
  className?: string;
};

export const CardProductList: React.FC<CardProductListProps> = ({ children, className }) => {
  return <div className={cn('grid grid-cols-12 gap-6', className)}>{children}</div>;
};

export const CardProduct: React.FC<CardProductProps> = ({
  id,
  slug,
  name,
  imageUrl,
  category,
  totalSold,
  price,
  isLiked,
  isInCart,
}) => {
  return (
    <section
      key={id}
      className='col-span-12 overflow-hidden border lg:col-span-3 md:col-span-6 border-back rounded-2xl'
    >
      <Link to={`/products/${slug}/details`}>
        <div className='overflow-hidden w-full h-[194px] bg-back text-center flex justify-center items-center'>
          <div className='w-full max-w-[196px] h-fit'>
            <img src={imageUrl} alt={`Image Product ${name}`} className='object-contain object-center w-full h-auto' />
          </div>
        </div>

        <div className='px-5 pt-5'>
          <div className='flex items-center mb-3'>
            <Badge variant='light-primary' className='px-2 py-1 font-bold me-3'>
              {category}
            </Badge>
            <p className='font-semibold text-red-500'>{totalSold} Sold</p>
          </div>
          <div className='mb-6'>
            <h2 className='text-xl font-bold truncate'>{name}</h2>
            <p className='text-xl font-bold text-primary'>{formatCurrency(price)}</p>
          </div>
        </div>
      </Link>

      <div className='flex justify-between gap-4 px-5 pb-5 lg:gap-8'>
        <Button variant={isLiked ? 'pink' : 'light-pink'} className='rounded-xl'>
          <DynamicIcon name='Heart' size={24} variant={isLiked ? 'Bold' : 'Outline'} />
        </Button>
        <Button variant={isInCart ? 'primary' : 'light-primary'} className='flex px-5 py-4 rounded-xl'>
          <DynamicIcon name='ShoppingCart' size={24} className='me-1.5' />
          <span>Add to Cart</span>
        </Button>
      </div>
    </section>
  );
};
