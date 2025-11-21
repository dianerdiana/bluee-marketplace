import { Rating } from '@/components/rating';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

type Testimony = {
  id: string;
  name: string;
  testimony: string;
  imageUrl: string;
  rating: number;
};

type ProductTestimonySlideProps = { arrayProductTestimonials: Testimony[] };

export default function ProductTestimonySlide(props: ProductTestimonySlideProps) {
  const { arrayProductTestimonials } = props;

  return (
    <section>
      <h3 className='mb-6 text-lg font-bold'>Product Testimony</h3>

      <Swiper freeMode pagination spaceBetween={16} slidesPerView='auto' modules={[Pagination]}>
        {arrayProductTestimonials.map((testimony) => (
          <SwiperSlide key={testimony.id} className='w-full max-w-72'>
            <div className='p-5 border border-back rounded-2xl'>
              <div className='flex gap-2.5 mb-6'>
                <div className='overflow-hidden rounded-full w-14 h-14'>
                  <img
                    src={testimony.imageUrl}
                    alt='Image Profile'
                    className='object-cover w-full h-full'
                  />
                </div>
                <div className='flex-1'>
                  <h4 className='font-bold'>{testimony.name}</h4>
                  <p className='text-muted-foreground'>3 Days Ago</p>
                </div>
              </div>

              <div className='mb-4'>
                <q className='font-semibold text-sm'>{testimony.testimony}</q>
              </div>

              <div>
                <Rating rating={testimony.rating} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
