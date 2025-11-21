import { Iconsax } from '@/components/iconsax';
import { Star } from '@/components/rating';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { formatCurrency } from '@/utils/utils';
import { useState } from 'react';

type ProductDetailProps = {
  id: string;
  name: string;
  category: string;
  condition: string;
  weight: string;
  unitWeight: string;
  warranty: string;
  unitWarranty: string;
  orderStatus: string;
  price: number;
  description: string;
  rating: number;
  totalReviews: number;
  totalSold: number;
  thumbnails: Record<string, string>[];
};

export default function ProductDetail(props: ProductDetailProps) {
  const {
    name,
    category,
    totalSold,
    price,
    rating,
    totalReviews,
    condition,
    weight,
    unitWeight,
    unitWarranty,
    warranty,
    orderStatus,
  } = props;

  const [quantity, setQuantity] = useState(1);

  const toggleIncreaseQuantity = () => setQuantity((prev) => ++prev);
  const toggleDecreaseQuantity = () => setQuantity((prev) => (prev === 1 ? 1 : --prev));

  const totalPrice = price * quantity;

  return (
    <>
      <h1 className='mb-3 text-2xl font-extrabold'>{name}</h1>

      <div className='items-center gap-3 mb-6 space-x-1 flex flex-wrap'>
        <Badge variant='light-primary' className='px-3 py-1.5 font-semibold rounded-md'>
          {category}
        </Badge>
        <p className='items-center space-x-1 text-dark flex flex-wrap text-sm'>
          <Star fill={100} />
          <span className='font-bold'>{rating}</span>{' '}
          <span className='font-semibold text-muted-foreground'>({totalReviews} Reviews)</span>
        </p>
      </div>

      <div className='px-5 mb-6 border border-collapse border-back rounded-xl'>
        <table className='w-full'>
          <tbody>
            <tr>
              <th className='py-5 font-semibold border-b text-start text-muted-foreground border-b-back'>
                Condition
              </th>
              <td className='font-bold border-b text-end text-dark border-b-back'>{condition}</td>
            </tr>
            <tr>
              <th className='py-5 font-semibold border-b text-start text-muted-foreground border-b-back'>
                Weight
              </th>
              <td className='font-bold border-b text-end text-dark border-b-back'>
                {weight} {unitWeight}
              </td>
            </tr>
            <tr>
              <th className='py-5 font-semibold border-b text-start text-muted-foreground border-b-back'>
                Warranty
              </th>
              <td className='font-bold border-b text-end text-dark border-b-back'>
                {warranty} {unitWarranty}
              </td>
            </tr>
            <tr>
              <th className='py-5 font-semibold text-start text-muted-foreground'>Order Status</th>
              <td className='font-bold text-end '>{orderStatus}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='flex-col-reverse items-center mb-8 lg:flex-row lg:justify-between flex flex-wrap gap-y-4 lg:gap-0'>
        <div className='flex flex-col lg:w-6/12 w-full'>
          <div className='flex items-center shrink-0'>
            <Iconsax name='ShoppingCart' className='text-muted-foreground me-1 size-5' />
            <span className='text-base font-semibold text-muted-foreground'>Subtotal</span>
          </div>
          <p className='text-xl font-bold text-primary'>{formatCurrency(totalPrice)}</p>
        </div>
        <div className='lg:w-5/12 w-8/12'>
          <div className='flex items-center justify-center py-1 border rounded-2xl shrink-0 border-back'>
            <button onClick={toggleDecreaseQuantity} className='px-4 py-2 cursor-pointer'>
              <Iconsax name='Minus' className='size-6' />
            </button>
            <span className='font-bold leading-5 text-center w-14 border-x border-x-back'>
              {quantity}
            </span>
            <button onClick={toggleIncreaseQuantity} className='px-4 py-2 cursor-pointer'>
              <Iconsax name='Add' className='size-6' />
            </button>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-12 gap-5 mb-4 w-full'>
        <div className='col-span-6'>
          <Button
            variant='default'
            className='flex items-center justify-center w-full py-6 shrink-0 rounded-md'
          >
            <Iconsax name='ShoppingCart' className='me-1.5 size-6' />
            <span className='hidden font-bold lg:inline'>Add to Cart</span>
          </Button>
        </div>
        <div className='col-span-6'>
          <Button
            size='lg'
            variant='outline'
            className='flex items-center justify-center w-full py-6 shrink-0 rounded-md text-muted-foreground'
          >
            <Iconsax name='Heart' className='me-1.5 size-6' />
            <span className='hidden font-bold lg:inline'>Add to Wishlist</span>
          </Button>
        </div>
      </div>

      <p className='flex items-center font-bold text-red-600 w-full shrink-0'>
        <Iconsax name='BagTick' className='me-1 size-5' />
        <span className='text-sm'>{totalSold} Units Sold</span>
      </p>
    </>
  );
}
