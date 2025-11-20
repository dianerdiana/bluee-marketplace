import { Autoplay, Pagination } from 'swiper/modules';
import { SwiperSlide, Swiper } from 'swiper/react';

type Add = {
  id: string;
  href: string;
  imageUrl: string;
};

export default function AddSlide({ arrayAdds }: { arrayAdds: Add[] }) {
  return (
    <Swiper
      loop
      centeredSlides={false}
      slidesPerView={'auto'}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination
      modules={[Pagination, Autoplay]}
    >
      {arrayAdds.map((add) => (
        <SwiperSlide key={add.id} className='max-w-[773px] px-2 lg:px-0 lg:pl-8'>
          <a href={add.href} target='_blank' className='overflow-hidden rounded-3xl'>
            <img src={add.imageUrl} alt='adds' className='aspect-773/360' />
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
