// Routing
import { Link } from 'react-router-dom';

// Custom Components
import { DynamicIcon } from '@/components/DynamicIcon';
import { CardProduct, CardProductList } from '@/components/CardProduct';
import { ButtonLink } from '@/components/Button';

// Thirdparty
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Types
import type { IconName } from '@/types/iconNames';

// Utils
import { formatThousandNumber } from '@/utils/utils';

type CategoryType = {
  id: string;
  name: string;
  icon: IconName;
  totalItems: number;
  slug: string;
};

const addsList = [
  { id: 1, href: '/home', imageUrl: 'https://ik.imagekit.io/dianerdiana/bluee-marketplace/images/adds-slide-1.png' },
  { id: 2, href: '/home', imageUrl: 'https://ik.imagekit.io/dianerdiana/bluee-marketplace/images/adds-slide-2.png' },
  { id: 3, href: '/home', imageUrl: 'https://ik.imagekit.io/dianerdiana/bluee-marketplace/images/adds-slide-1.png' },
  { id: 4, href: '/home', imageUrl: 'https://ik.imagekit.io/dianerdiana/bluee-marketplace/images/adds-slide-2.png' },
  { id: 5, href: '/home', imageUrl: 'https://ik.imagekit.io/dianerdiana/bluee-marketplace/images/adds-slide-1.png' },
  { id: 6, href: '/home', imageUrl: 'https://ik.imagekit.io/dianerdiana/bluee-marketplace/images/adds-slide-2.png' },
  { id: 7, href: '/home', imageUrl: 'https://ik.imagekit.io/dianerdiana/bluee-marketplace/images/adds-slide-1.png' },
  { id: 8, href: '/home', imageUrl: 'https://ik.imagekit.io/dianerdiana/bluee-marketplace/images/adds-slide-2.png' },
];

const categories: CategoryType[] = [
  { id: '1', slug: 'gadget', name: 'Gadget', icon: 'Mobile', totalItems: 1294 },
  { id: '2', slug: 'fitness', name: 'Fitness', icon: 'Weight', totalItems: 1294 },
  { id: '3', slug: 'hardware', name: 'Hardware', icon: 'Devices', totalItems: 1294 },
  { id: '4', slug: 'furniture', name: 'Furniture', icon: 'Tree', totalItems: 1294 },
  { id: '5', slug: 'electronic', name: 'Electronic', icon: 'Lamp', totalItems: 1294 },
  { id: '6', slug: 'kitchen', name: 'Kitchen', icon: 'Cup', totalItems: 1294 },
];

const products = [
  {
    id: '1',
    slug: 'sonicwhirl-wireless-headphone',
    name: 'SonicWhirl Wireless Headphone',
    imageUrl: 'https://ik.imagekit.io/dianerdiana/bluee-marketplace/images/product-1.png',
    category: 'Gadget',
    totalSold: 120,
    price: 18500500,
    isLiked: false,
    isInCart: false,
  },
  {
    id: '2',
    slug: 'echobeats-pink-edition',
    name: 'EchoBeats Pink Edition',
    imageUrl: 'https://ik.imagekit.io/dianerdiana/bluee-marketplace/images/product-2.png',
    category: 'Gadget',
    totalSold: 120,
    price: 18500500,
    isLiked: false,
    isInCart: false,
  },
  {
    id: '3',
    slug: 'toneflex-noise-cancelling',
    name: 'ToneFlex Noise Cancelling',
    imageUrl: 'https://ik.imagekit.io/dianerdiana/bluee-marketplace/images/product-3.png',
    category: 'Gadget',
    totalSold: 120,
    price: 18500500,
    isLiked: false,
    isInCart: false,
  },
  {
    id: '4',
    slug: 'bassloop-studio-headset',
    name: 'BassLoop Studio Headset',
    imageUrl: 'https://ik.imagekit.io/dianerdiana/bluee-marketplace/images/product-4.png',
    category: 'Gadget',
    totalSold: 120,
    price: 18500500,
    isLiked: false,
    isInCart: false,
  },
  {
    id: '5',
    slug: 'rovopack-daily-backpack',
    name: 'RovoPack Daily Backpack',
    imageUrl: 'https://ik.imagekit.io/dianerdiana/bluee-marketplace/images/product-5.png',
    category: 'Fashion',
    totalSold: 120,
    price: 18500500,
    isLiked: false,
    isInCart: false,
  },
  {
    id: '6',
    slug: 'trailcore-adventure-bag',
    name: 'TrailCore Adventure Bag',
    imageUrl: 'https://ik.imagekit.io/dianerdiana/bluee-marketplace/images/product-6.png',
    category: 'Fashion',
    totalSold: 120,
    price: 18500500,
    isLiked: false,
    isInCart: false,
  },
  {
    id: '7',
    slug: 'nomar-urban-backpak',
    name: 'Nomar Urban Backpack',
    imageUrl: 'https://ik.imagekit.io/dianerdiana/bluee-marketplace/images/product-7.png',
    category: 'Fashion',
    totalSold: 120,
    price: 18500500,
    isLiked: false,
    isInCart: false,
  },
  {
    id: '8',
    slug: 'kavva-canvas-rolltop',
    name: 'Kavva Canvas Rolltop',
    imageUrl: 'https://ik.imagekit.io/dianerdiana/bluee-marketplace/images/product-8.png',
    category: 'Fashion',
    totalSold: 120,
    price: 18500500,
    isLiked: false,
    isInCart: false,
  },
];

const HomePage = () => {
  return (
    <main className='bg-white'>
      <section className='py-4 lg:py-8 bg-back'>
        <Swiper
          loop
          centeredSlides
          spaceBetween={32}
          slidesPerView='auto'
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
        >
          {addsList.map((add) => (
            <SwiperSlide key={add.id} className='w-full px-4 lg:px-0 lg:!flex-col-8'>
              <a href={add.href} target='_blank' className='overflow-hidden rounded-3xl'>
                <img src={add.imageUrl} alt='adds' className='w-full h-auto' />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className='px-5 mb-24 app-container'>
        <div className='items-center justify-between pt-16 row mb-9'>
          <h1 className='mb-3 text-3xl font-extrabold break-words lg:flex-col-4 flex-col-12 lg:mb-0 text-dark'>
            Explore High Quality Products by Category
          </h1>
          <ButtonLink variant='dark' className='row rounded-2xl'>
            <span className='me-2.5'>View All</span> <DynamicIcon name='ArrowRight' />
          </ButtonLink>
        </div>

        <Swiper loop pagination spaceBetween={32} slidesPerView='auto' modules={[Pagination]} tag='ul' className='py-1'>
          {categories.map((category) => (
            <SwiperSlide key={category.id} className='!w-[180px]' tag='li'>
              <Link
                to={`/products?category=${category.slug}`}
                className='flex-col items-center justify-center py-8 overflow-hidden border rounded-3xl row border-back hover:border-primary hover:inset-ring hover:inset-ring-primary hover:bg-slate-primary'
              >
                <DynamicIcon name={category.icon} variant='Bulk' size={36} className='text-primary' />

                <div className='mt-6'>
                  <h2 className='mb-1 text-xl font-bold text-center'>{category.name}</h2>
                  <p className='text-center text-secondary'>{formatThousandNumber(category.totalItems)} items</p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className='bg-white'>
        <div className='px-5 app-container'>
          <div className='items-center justify-between row mb-9'>
            <h1 className='mb-3 text-3xl font-extrabold break-words flex-col-12 lg:mb-0 lg:flex-col-3 text-dark'>
              Shop Quality Picks From Top Sellers
            </h1>
            <ButtonLink variant='dark' className='row rounded-2xl'>
              <span className='me-2.5'>View All</span> <DynamicIcon name='ArrowRight' />
            </ButtonLink>
          </div>

          <CardProductList className='pb-24'>
            {products.map((product) => (
              <CardProduct
                key={product.id}
                id={product.id}
                slug={product.slug}
                name={product.name}
                imageUrl={product.imageUrl}
                category={product.category}
                totalSold={product.totalSold}
                price={product.price}
                isLiked={product.isLiked}
                isInCart={product.isInCart}
              />
            ))}
          </CardProductList>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
