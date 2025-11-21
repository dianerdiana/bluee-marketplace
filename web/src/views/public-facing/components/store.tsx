import { Iconsax } from '@/components/iconsax';
import { Link } from 'react-router-dom';

type StoreProps = {
  name: string;
  slug: string;
  thumbnail: string;
  totalProducts: number;
};

export default function Store({ name, totalProducts, slug, thumbnail }: StoreProps) {
  return (
    <section className='flex items-center justify-between p-5 mt-10 border border-back rounded-2xl w-full'>
      <div className='flex items-center'>
        <div className='overflow-hidden rounded-full w-14 h-14 me-4'>
          <img src={thumbnail} alt='Store Logo' className='object-contain w-full h-full' />
        </div>

        <div>
          <h2 className='font-bold mb-1.5'>{name}</h2>
          <p className='flex items-center font-semibold text-muted-foreground shrink-0'>
            <Iconsax name='Box' size={20} className='me-1.5' />{' '}
            <span className='text-sm'>{totalProducts} Total Products</span>
          </p>
        </div>
      </div>

      <Link
        to={`/stores/${slug}/detail`}
        title='Visit Store'
        className='font-semibold text-center lg:text-end text-primary w-fit'
      >
        Visit Store
      </Link>
    </section>
  );
}
