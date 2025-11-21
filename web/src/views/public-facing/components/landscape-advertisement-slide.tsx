import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

type Advertisement = {
  id: string;
  href: string;
  imageUrl: string;
};

type LandscapeAdvertisementSlideProps = { arrayAdvertisements: Advertisement[] };

export default function LandscapeAdvertisementSlide(props: LandscapeAdvertisementSlideProps) {
  const { arrayAdvertisements } = props;

  return (
    <Swiper spaceBetween={16} slidesPerView='auto'>
      {arrayAdvertisements.map((advertisement) => (
        <SwiperSlide key={advertisement.id} className='w-full max-w-[280px]'>
          <Link to={advertisement.href} className='overflow-hidden rounded-3xl '>
            <img
              src={advertisement.imageUrl}
              alt='Advertisement Image'
              className='object-contain object-center w-full h-auto'
            />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
