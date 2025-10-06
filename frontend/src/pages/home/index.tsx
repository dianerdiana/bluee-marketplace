import { Badge } from '@/components/Badge';
import { Button, ButtonLink } from '@/components/Button';
import { DynamicIcon } from '@/components/DynamicIcon';
import type { IconName } from '@/types/iconNames';
import { formatCurrency } from '@/utils/utils';
import { Link } from 'react-router-dom';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

type CategoryType = {
  id: string;
  name: string;
  icon: IconName;
  totalItems: number;
  href: string;
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
  { id: '1', href: '/home', name: 'Gadget', icon: 'Mobile', totalItems: 1294 },
  { id: '2', href: '/home', name: 'Fitness', icon: 'Weight', totalItems: 1294 },
  { id: '3', href: '/home', name: 'Hardware', icon: 'Devices', totalItems: 1294 },
  { id: '4', href: '/home', name: 'Furniture', icon: 'Tree', totalItems: 1294 },
  { id: '5', href: '/home', name: 'Electronic', icon: 'Lamp', totalItems: 1294 },
  { id: '6', href: '/home', name: 'Kitchen', icon: 'Cup', totalItems: 1294 },
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
    liked: false,
  },
  {
    id: '2',
    slug: 'echobeats-pink-edition',
    name: 'EchoBeats Pink Edition',
    imageUrl: 'https://ik.imagekit.io/dianerdiana/bluee-marketplace/images/product-2.png',
    category: 'Gadget',
    totalSold: 120,
    price: 18500500,
    liked: false,
  },
  {
    id: '3',
    slug: 'toneflex-noise-cancelling',
    name: 'ToneFlex Noise Cancelling',
    imageUrl: 'https://ik.imagekit.io/dianerdiana/bluee-marketplace/images/product-3.png',
    category: 'Gadget',
    totalSold: 120,
    price: 18500500,
    liked: false,
  },
  {
    id: '4',
    slug: 'bassloop-studio-headset',
    name: 'BassLoop Studio Headset',
    imageUrl: 'https://ik.imagekit.io/dianerdiana/bluee-marketplace/images/product-4.png',
    category: 'Gadget',
    totalSold: 120,
    price: 18500500,
    liked: false,
  },
  {
    id: '5',
    slug: 'rovopack-daily-backpack',
    name: 'RovoPack Daily Backpack',
    imageUrl: 'https://ik.imagekit.io/dianerdiana/bluee-marketplace/images/product-5.png',
    category: 'Fashion',
    totalSold: 120,
    price: 18500500,
    liked: false,
  },
  {
    id: '6',
    slug: 'trailcore-adventure-bag',
    name: 'TrailCore Adventure Bag',
    imageUrl: 'https://ik.imagekit.io/dianerdiana/bluee-marketplace/images/product-6.png',
    category: 'Fashion',
    totalSold: 120,
    price: 18500500,
    liked: false,
  },
  {
    id: '7',
    slug: 'nomar-urban-backpak',
    name: 'Nomar Urban Backpack',
    imageUrl: 'https://ik.imagekit.io/dianerdiana/bluee-marketplace/images/product-7.png',
    category: 'Fashion',
    totalSold: 120,
    price: 18500500,
    liked: false,
  },
  {
    id: '8',
    slug: 'kavva-canvas-rolltop',
    name: 'Kavva Canvas Rolltop',
    imageUrl: 'https://ik.imagekit.io/dianerdiana/bluee-marketplace/images/product-8.png',
    category: 'Fashion',
    totalSold: 120,
    price: 18500500,
    liked: false,
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

      <section className='mb-24 app-container'>
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
                to={category.href}
                className='flex-col items-center justify-center py-8 overflow-hidden border rounded-3xl row border-back hover:border-primary hover:inset-ring hover:inset-ring-primary hover:bg-slate-primary'
              >
                <DynamicIcon name={category.icon} variant='Bulk' size={36} className='text-primary' />

                <div className='mt-6'>
                  <h2 className='mb-1 text-xl font-bold text-center'>{category.name}</h2>
                  <p className='text-center text-secondary'>{category.totalItems} items</p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className='bg-white'>
        <div className='app-container'>
          <div className='items-center justify-between row mb-9'>
            <h1 className='mb-3 text-3xl font-extrabold break-words flex-col-12 lg:mb-0 lg:flex-col-3 text-dark'>
              Shop Quality Picks From Top Sellers
            </h1>
            <ButtonLink variant='dark' className='row rounded-2xl'>
              <span className='me-2.5'>View All</span> <DynamicIcon name='ArrowRight' />
            </ButtonLink>
          </div>

          <div className='grid grid-cols-12 gap-6 pb-24'>
            {products.map((product) => (
              <section
                key={product.id}
                className='col-span-12 overflow-hidden border lg:col-span-3 md:col-span-6 border-back rounded-2xl'
              >
                <Link to={`/products/${product.slug}/details`}>
                  <div className='overflow-hidden w-full h-[194px] bg-back text-center flex justify-center'>
                    <div className='w-full max-w-[196px]'>
                      <img
                        src={product.imageUrl}
                        alt={`Image Product ${product.name}`}
                        className='object-contain object-center w-full h-auto'
                      />
                    </div>
                  </div>

                  <div className='px-5 pt-5'>
                    <div className='flex items-center mb-3'>
                      <Badge variant='light-primary' className='px-2 py-1 font-bold me-3'>
                        {product.category}
                      </Badge>
                      <p className='font-semibold text-red-500'>{product.totalSold} Sold</p>
                    </div>
                    <div className='mb-6'>
                      <h2 className='text-xl font-bold truncate'>{product.name}</h2>
                      <p className='text-xl font-bold text-primary'>{formatCurrency(product.price)}</p>
                    </div>
                  </div>
                </Link>

                <div className='flex justify-between gap-4 px-5 pb-5 lg:gap-8'>
                  <Button variant='light-pink' className='rounded-xl'>
                    <DynamicIcon name='Heart' size={24} />
                  </Button>
                  <Button variant='light-primary' className='flex px-5 py-4 rounded-xl'>
                    <DynamicIcon name='ShoppingCart' size={24} className='me-1.5' />
                    <span>Add to Cart</span>
                  </Button>
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
