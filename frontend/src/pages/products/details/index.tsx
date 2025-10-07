import { Badge } from '@/components/Badge';
import { Breadcrumb } from '@/components/Breadcrumb';
import { Button, ButtonLink } from '@/components/Button';
import { CardProduct, CardProductList } from '@/components/CardProduct';
import { DynamicIcon } from '@/components/DynamicIcon';
import { Rating, Star } from '@/components/Rating';
import type { Product } from '@/types/product';
import { formatCurrency } from '@/utils/utils';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination, Thumbs } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper/types';

const products: Product[] = [
  {
    id: '1',
    slug: 'iphone-14-pro-green',
    name: 'iPhone 16 Green',
    imageUrl: 'https://ik.imagekit.io/dianerdiana/bluee-marketplace/images/product-9.png',
    category: 'Gadget',
    totalSold: 120,
    price: 18500500,
    isLiked: false,
    isInCart: false,
  },
  {
    id: '2',
    slug: 'iphone-14-pro-pink',
    name: 'iPhone 14 Pro Pink',
    imageUrl: 'https://ik.imagekit.io/dianerdiana/bluee-marketplace/images/product-11.png',
    category: 'Gadget',
    totalSold: 120,
    price: 18500500,
    isLiked: true,
    isInCart: true,
  },
  {
    id: '3',
    slug: 'iphone-14-pro-green',
    name: 'iPhone 16 Green',
    imageUrl: 'https://ik.imagekit.io/dianerdiana/bluee-marketplace/images/product-9.png',
    category: 'Gadget',
    totalSold: 120,
    price: 18500500,
    isLiked: false,
    isInCart: false,
  },
  {
    id: '4',
    slug: 'iphone-14-pro-white',
    name: 'iPhone 14 Pro White',
    imageUrl: 'https://ik.imagekit.io/dianerdiana/bluee-marketplace/images/product-13.png',
    category: 'Gadget',
    totalSold: 120,
    price: 18500500,
    isLiked: false,
    isInCart: false,
  },
];

const productDetails = {
  id: '1',
  name: 'Macbook Pro M2',
  category: 'laptop',
  condition: 'New Item',
  weight: '3',
  weightUnit: 'KG',
  warranty: '24',
  warrantyUnit: 'Month',
  orderStatus: 'Ready to Ship',
  price: 18500500,
  description: `
    <p>The MacBook Pro 13-inch with the M2 chip delivers incredible speed, long battery life, and a brilliant Retina display—all in a sleek, compact design.</p>

    <p>Key Specs:</p>
    <ul>
      <li>Chip: Apple M2 (8-core CPU, 10-core GPU)</li>
      <li>RAM: 8GB (upgradable)</li>
      <li>Storage: 256GB SSD (up to 2TB)</li>
      <li>Display: 13.3” Retina, 2560 x 1600 resolution</li>
      <li>Battery Life: Up to 20 hours</li>
      <li>Ports: 2x Thunderbolt / USB 4, 3.5mm headphone jack</li>
      <li>Camera: 720p FaceTime HD</li>
      <li>Keyboard: Backlit with Touch ID</li>
      <li>OS: macOS</li>
    </ul>
  `,
  rating: 4.5,
  totalReviews: 245,
  totalSold: 120,
  thumbnails: [
    { id: '1', imageUrl: 'https://ik.imagekit.io/dianerdiana/bluee-marketplace/images/macbook-1.png' },
    { id: '2', imageUrl: 'https://ik.imagekit.io/dianerdiana/bluee-marketplace/images/macbook-2.png' },
    { id: '3', imageUrl: 'https://ik.imagekit.io/dianerdiana/bluee-marketplace/images/macbook-3.png' },
    { id: '4', imageUrl: 'https://ik.imagekit.io/dianerdiana/bluee-marketplace/images/macbook-4.png' },
    { id: '5', imageUrl: 'https://ik.imagekit.io/dianerdiana/bluee-marketplace/images/macbook-4.png' },
    { id: '6', imageUrl: 'https://ik.imagekit.io/dianerdiana/bluee-marketplace/images/macbook-4.png' },
    { id: '7', imageUrl: 'https://ik.imagekit.io/dianerdiana/bluee-marketplace/images/macbook-4.png' },
  ],
};

const store = {
  id: '1',
  name: 'Bimore Gadget Universe',
  totalProducts: 1294,
  thumbnail: 'https://ik.imagekit.io/dianerdiana/bluee-marketplace/logo/store-thumbnail-1.png',
};

const productTestimonials = [
  {
    id: '1',
    name: 'Bryan Utami',
    imageUrl: 'https://ik.imagekit.io/dianerdiana/default-image.jpg',
    testimony:
      "The MacBook is perfect for work, and the AirPods sound crystal clear. Plus, the store's service was amazing—fast delivery and great support!",
    rating: 5,
    createdAt: '2025-10-03 00:01:01',
  },
  {
    id: '2',
    name: 'Bryan Utami',
    imageUrl: 'https://ik.imagekit.io/dianerdiana/default-image.jpg',
    testimony:
      "The MacBook is perfect for work, and the AirPods sound crystal clear. Plus, the store's service was amazing—fast delivery and great support!",
    rating: 5,
    createdAt: '2025-10-05 00:01:01',
  },
  {
    id: '3',
    name: 'Bryan Utami',
    imageUrl: 'https://ik.imagekit.io/dianerdiana/default-image.jpg',
    testimony:
      "The MacBook is perfect for work, and the AirPods sound crystal clear. Plus, the store's service was amazing—fast delivery and great support!",
    rating: 5,
    createdAt: '2025-10-05 00:01:01',
  },
];

const adds = [
  { id: '1', href: '/home', imageUrl: 'https://ik.imagekit.io/dianerdiana/bluee-marketplace/images/adds-1.jpg' },
  { id: '2', href: '/home', imageUrl: 'https://ik.imagekit.io/dianerdiana/bluee-marketplace/images/adds-2.jpg' },
];

const ProductDetailPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [lessDescription, setLessDescription] = useState(true);
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [activeIndexSlide, setActiveIndexSlide] = useState(0);

  const toggleIncreaseQuantity = () => setQuantity((prev) => ++prev);
  const toggleDecreaseQuantity = () => setQuantity((prev) => (prev === 1 ? 1 : --prev));
  const toggleExpandDescription = () => setLessDescription((prev) => !prev);

  const category = 'laptop';

  return (
    <main>
      <section className='px-5 py-6 app-container'>
        <Breadcrumb
          items={[
            { label: 'Homepage', href: '/home' },
            { label: category, href: `/products?category=${category}` },
            { label: 'Product Details' },
          ]}
        />
      </section>

      <article className='bg-white'>
        <section className='px-5 py-8 app-container'>
          <div className='justify-between row'>
            <div className='mb-10 lg:flex-col-6 flex-col-12 lg:mb-0'>
              <Swiper
                onSlideChange={(swiper) => setActiveIndexSlide(swiper.activeIndex)}
                spaceBetween={10}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Thumbs]}
                className='bg-back rounded-2xl h-[356px] mb-3'
              >
                {productDetails.thumbnails.map((thumbnail) => (
                  <SwiperSlide key={thumbnail.id} className='flex items-center justify-center'>
                    <div className='items-center justify-center w-full h-full overflow-hidden row'>
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
                {productDetails.thumbnails.map((thumbnail, idx) => (
                  <SwiperSlide key={thumbnail.id} className={`cursor-pointer !w-[130px]`}>
                    <div
                      className={`overflow-hidden w-full h-32 px-4 py-4 rounded-2xl bg-back ${
                        activeIndexSlide === idx ? 'inset-ring-2 inset-ring-primary' : ''
                      }`}
                    >
                      <img src={thumbnail.imageUrl} alt='thumbnail' className='object-contain w-full h-full' />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <section className='lg:flex-col-5 flex-col-12'>
              <h1 className='mb-3 text-3xl font-extrabold'>{productDetails.name}</h1>

              <div className='items-center gap-3 mb-6 space-x-1 row'>
                <Badge variant='light-primary' className='px-3 py-1.5'>
                  {productDetails.category}
                </Badge>
                <p className='items-center space-x-1 text-dark row'>
                  <Star fill={100} />
                  <span className='font-bold'>{productDetails.rating}</span>{' '}
                  <span className='font-semibold text-secondary'>({productDetails.totalReviews} Reviews)</span>
                </p>
              </div>

              <div className='px-5 mb-6 border border-collapse border-back rounded-xl'>
                <table className='w-full'>
                  <tbody>
                    <tr>
                      <th className='py-5 text-lg font-semibold border-b text-start text-secondary border-b-back'>
                        Condition
                      </th>
                      <td className='text-lg font-bold border-b text-end text-dark border-b-back'>
                        {productDetails.condition}
                      </td>
                    </tr>
                    <tr>
                      <th className='py-5 text-lg font-semibold border-b text-start text-secondary border-b-back'>
                        Weight
                      </th>
                      <td className='text-lg font-bold border-b text-end text-dark border-b-back'>
                        {productDetails.weight} {productDetails.weightUnit}
                      </td>
                    </tr>
                    <tr>
                      <th className='py-5 text-lg font-semibold border-b text-start text-secondary border-b-back'>
                        Warranty
                      </th>
                      <td className='text-lg font-bold border-b text-end text-dark border-b-back'>
                        {productDetails.warranty} {productDetails.warrantyUnit}
                      </td>
                    </tr>
                    <tr>
                      <th className='py-5 text-lg font-semibold text-start text-secondary'>Order Status</th>
                      <td className='text-lg font-bold text-end '>{productDetails.orderStatus}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className='flex-col-reverse items-center mb-8 lg:flex-row lg:justify-between row gap-y-4 lg:gap-0'>
                <div className='flex flex-col lg:flex-col-6 flex-col-12'>
                  <div className='flex items-center shrink-0'>
                    <DynamicIcon name='ShoppingCart' size={20} className='text-secondary me-1' />
                    <span className='text-base font-semibold text-secondary'>Subtotal</span>
                  </div>
                  <p className='text-2xl font-bold text-primary'>{formatCurrency(productDetails.price * quantity)}</p>
                </div>
                <div className='lg:flex-col-5 flex-col-8'>
                  <div className='flex items-center justify-center py-2 border rounded-2xl shrink-0 border-back'>
                    <button onClick={toggleDecreaseQuantity} className='px-4 py-2 cursor-pointer'>
                      <DynamicIcon name='Minus' />
                    </button>
                    <span className='text-lg font-bold leading-5 text-center w-14 border-x border-x-back'>
                      {quantity}
                    </span>
                    <button onClick={toggleIncreaseQuantity} className='px-4 py-2 cursor-pointer'>
                      <DynamicIcon name='Add' />
                    </button>
                  </div>
                </div>
              </div>

              <div className='grid grid-cols-12 gap-5 mb-4 flex-col-12'>
                <div className='col-span-6'>
                  <Button
                    variant='primary'
                    className='flex items-center justify-center w-full py-5 shrink-0 rounded-2xl'
                  >
                    <DynamicIcon name='ShoppingCart' className='me-1.5' />
                    <span className='hidden font-bold lg:inline'>Add to Cart</span>
                  </Button>
                </div>
                <div className='col-span-6'>
                  <Button
                    variant='outline-secondary'
                    className='flex items-center justify-center w-full py-5 shrink-0 rounded-2xl'
                  >
                    <DynamicIcon name='Heart' className='me-1.5' />
                    <span className='hidden font-bold lg:inline'>Add to Wishlist</span>
                  </Button>
                </div>
              </div>

              <p className='flex items-center text-lg font-bold text-red-600 flex-col-12 shrink-0'>
                <DynamicIcon name='BagTick' className='me-1' size={20} />
                <span>{productDetails.totalSold} Units Sold</span>
              </p>
            </section>
          </div>

          <section className='flex items-center justify-between p-5 mt-10 border lg:-mt-10 mb-14 lg:flex-col-6 flex-col-12 border-back rounded-3xl'>
            <div className='flex items-center'>
              <div className='overflow-hidden rounded-full w-14 h-14 lg:w-20 lg:h-20 me-4'>
                <img
                  src='https://ik.imagekit.io/dianerdiana/bluee-marketplace/logo/store-thumbnail-1.png'
                  alt='Store Logo'
                  className='object-contain w-full h-full'
                />
              </div>

              <div>
                <h2 className='text-lg font-bold mb-1.5'>{store.name}</h2>
                <p className='flex items-center font-semibold text-secondary shrink-0'>
                  <DynamicIcon name='Box' size={20} className='me-1.5' />{' '}
                  <span>{store.totalProducts} Total Products</span>
                </p>
              </div>
            </div>

            <Link
              to='/store'
              title='Visit Store'
              className='text-lg font-semibold text-center lg:text-end text-primary w-fit'
            >
              Visit Store
            </Link>
          </section>

          <section className='lg:flex-col-6 mb-14 flex-col-12'>
            <h3 className='mb-3 text-lg font-bold'>Product About</h3>
            <div
              className={`ProductDescription leading-160 text-lg text-secondary font-medium ${
                lessDescription ? 'line-clamp-6' : ''
              }`}
            >
              {parse(productDetails.description)}
            </div>
            <span onClick={toggleExpandDescription} className='font-semibold cursor-pointer text-primary'>
              {lessDescription ? 'Read More' : 'Show Less'}
            </span>
          </section>

          <section className='lg:flex-col-6 flex-col-12 mb-14'>
            <Swiper spaceBetween={16} slidesPerView='auto'>
              {adds.map((add) => (
                <SwiperSlide key={add.id} className='!w-[280px]'>
                  <Link to={add.href} className='overflow-hidden rounded-3xl '>
                    <img src={add.imageUrl} alt='Adds Image' className='object-contain object-center w-full h-auto' />
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </section>

          <section className='mb-14 lg:flex-col-6 flex-col-12'>
            <h3 className='mb-6 text-lg font-bold'>Product Testimony</h3>

            <Swiper
              freeMode
              pagination={{
                type: 'bullets',
              }}
              spaceBetween={16}
              slidesPerView='auto'
              modules={[Pagination]}
            >
              {productTestimonials.map((testimony) => (
                <SwiperSlide key={testimony.id} className='!w-72'>
                  <div className='p-5 border border-back rounded-2xl'>
                    <div className='flex gap-2.5 mb-6'>
                      <div className='overflow-hidden rounded-full w-14 h-14'>
                        <img src={testimony.imageUrl} alt='Image Profile' className='object-cover w-full h-full' />
                      </div>
                      <div className='flex-1'>
                        <h4 className='text-lg font-bold'>{testimony.name}</h4>
                        <p className='text-secondary'>3 Days Ago</p>
                      </div>
                    </div>

                    <div className='mb-4'>
                      <q className='font-semibold leading-160'>{testimony.testimony}</q>
                    </div>

                    <div>
                      <Rating rating={testimony.rating} />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </section>

          <section>
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
          </section>
        </section>
      </article>
    </main>
  );
};

export default ProductDetailPage;
