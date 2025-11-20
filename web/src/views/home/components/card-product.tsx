import { Iconsax } from '@/components/iconsax';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { formatCurrency } from '@/utils/utils';
import { Link } from 'react-router-dom';

type Product = {
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

type CardProductProps = { product: Product };

export default function CardProduct({ product }: CardProductProps) {
  const { id, slug, name, imageUrl, category, totalSold, price, isLiked } = product;

  return (
    <Card key={id} className='overflow-hidden border border-primary-foreground rounded-xl py-0'>
      <Link to={`/products/${slug}/details`}>
        <div className='overflow-hidden w-full h-[194px] bg-primary-foreground text-center flex justify-center items-center'>
          <div className='w-full max-w-[196px] h-fit'>
            <img
              src={imageUrl}
              alt={`Image Product ${name}`}
              className='object-contain object-center w-full h-auto'
            />
          </div>
        </div>

        <div className='px-5 pt-5'>
          <div className='flex items-center mb-3'>
            <Badge variant='light-primary' className='text-xs rounded-sm me-3'>
              {category}
            </Badge>
            <p className='font-semibold text-destructive'>{totalSold} Sold</p>
          </div>
          <div className='mb-6'>
            <h2 className='text-lg font-bold truncate'>{name}</h2>
            <p className='text-lg font-bold text-primary'>{formatCurrency(price)}</p>
          </div>
        </div>
      </Link>

      <div className='flex justify-between gap-4 px-5 pb-5 lg:gap-8'>
        <Button variant='light-destructive' className='rounded-md'>
          <Iconsax name='Heart' size={24} variant={isLiked ? 'Bold' : 'Outline'} />
        </Button>
        <Button variant='default' className='flex px-5 py-4 rounded-md'>
          <Iconsax name='ShoppingCart' size={24} className='me-1.5' />
          <span>Add to Cart</span>
        </Button>
      </div>
    </Card>
  );
}
