import { useState } from 'react';
import { FreeMode, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper/types';

type ProductThumbnail = {
  id: string;
  imageUrl: string;
};

type ProductThumbnailSlideProps = { thumbnails: ProductThumbnail[] };

export default function ProductThumbnailSlide({ thumbnails }: ProductThumbnailSlideProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [activeIndexSlide, setActiveIndexSlide] = useState(0);

  return (
    <>
      <Swiper
        onSlideChange={(swiper) => setActiveIndexSlide(swiper.activeIndex)}
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Thumbs]}
        className='bg-primary-foreground rounded-2xl h-[356px] mb-3'
      >
        {thumbnails.map((thumbnail) => (
          <SwiperSlide key={thumbnail.id} className='flex items-center justify-center'>
            <div className='items-center justify-center w-full h-full overflow-hidden flex flex-wrap'>
              <img
                src={thumbnail.imageUrl}
                alt='thumbnail'
                className='object-contain h-full px-10 py-10 lg:flex-col-8 flex-col-12'
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={12}
        slidesPerView={'auto'}
        freeMode={true}
        modules={[FreeMode, Thumbs]}
        wrapperClass='flex justify-between'
      >
        {thumbnails.map((thumbnail, idx) => (
          <SwiperSlide key={thumbnail.id} className='cursor-pointer max-w-[136px]'>
            <div
              className={`overflow-hidden w-full h-32 px-4 py-4 rounded-2xl bg-primary-foreground ${
                activeIndexSlide === idx ? 'inset-ring-2 inset-ring-primary' : ''
              }`}
            >
              <img
                src={thumbnail.imageUrl}
                alt='thumbnail'
                className='object-contain w-full h-full'
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
