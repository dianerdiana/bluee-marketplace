import { Iconsax } from '@/components/iconsax';
import type { IconsaxName } from '@/types/iconsax-names';
import { formatThousandNumber } from '@/utils/utils';
import { Link } from 'react-router-dom';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

type Category = {
  id: string;
  name: string;
  icon: string;
  totalItems: number;
  slug: string;
};

export default function CategorySlide({ arrayCategories }: { arrayCategories: Category[] }) {
  return (
    <Swiper loop pagination spaceBetween={32} slidesPerView='auto' modules={[Pagination]} tag='ul'>
      {arrayCategories.map((category) => (
        <SwiperSlide key={category.id} className='max-w-[180px]' tag='li'>
          <Link
            to={`/products?category=${category.slug}`}
            className='flex flex-col items-center justify-center py-8 overflow-hidden border rounded-3xl border-back hover:border-primary hover:inset-ring hover:inset-ring-primary hover:bg-primary-foreground'
          >
            <Iconsax
              name={category.icon as IconsaxName}
              size={35}
              variant='Bulk'
              className='text-primary'
            />

            <div className='mt-6'>
              <h2 className='mb-1 text-lg font-bold text-center'>{category.name}</h2>
              <p className='text-center text-sm text-muted-foreground'>
                {formatThousandNumber(category.totalItems)} items
              </p>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
