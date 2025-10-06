import { Badge } from '@/components/Badge';
import { Breadcrumb } from '@/components/Breadcrumb';
import { ButtonLink } from '@/components/Button';
import { CardProduct, CardProductList } from '@/components/CardProduct';
import { DynamicIcon } from '@/components/DynamicIcon';
import { Star } from '@/components/Rating';
import type { Product } from '@/types/product';
import { formatCurrency } from '@/utils/utils';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

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
  warranty: '24 Month',
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
};

const store = {
  id: '1',
  name: 'Bimore Gadget Universe',
  totalProducts: 1294,
  thumbnail: 'https://ik.imagekit.io/dianerdiana/bluee-marketplace/logo/store-thumbnail-1.png',
};

const productTestimonies = [
  {
    id: '1',
    name: 'Bryan Utami',
    imageUrl: '',
    testimony:
      "The MacBook is perfect for work, and the AirPods sound crystal clear. Plus, the store's service was amazing—fast delivery and great support!",
    rating: 5,
    createdAt: '2025-10-03 00:01:01',
  },
  {
    id: '1',
    name: 'Bryan Utami',
    imageUrl: '',
    testimony:
      "The MacBook is perfect for work, and the AirPods sound crystal clear. Plus, the store's service was amazing—fast delivery and great support!",
    rating: 5,
    createdAt: '2025-10-05 00:01:01',
  },
];

const ProductDetailPage = () => {
  const [quantity, setQuantity] = useState(1);

  const toggleIncreaseQuantity = () => setQuantity((prev) => ++prev);
  const toggleDecreaseQuantity = () => setQuantity((prev) => (prev === 1 ? 1 : --prev));

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
        <section className='app-container'>
          <div className='justify-between row'>
            <div className='flex-col-6'></div>
            <section className='flex-col-5'>
              <h1>{productDetails.name}</h1>
              <div>
                <Badge variant='light-primary'>{productDetails.category}</Badge>
                <div>
                  <Star fill={100} />
                  <p>
                    {productDetails.rating}{' '}
                    <span className='text-secondary'>({productDetails.totalReviews} Reviews)</span>
                  </p>
                </div>

                <table>
                  <tbody>
                    <tr>
                      <th>Condition</th>
                      <td>{productDetails.condition}</td>
                    </tr>
                    <tr>
                      <th>Weight</th>
                      <td>
                        {productDetails.weight} {productDetails.weightUnit}
                      </td>
                    </tr>
                    <tr>
                      <th>Warranty</th>
                      <td>
                        {productDetails.warranty} {productDetails.warrantyUnit}
                      </td>
                    </tr>
                    <tr>
                      <th>Order Status</th>
                      <td>{productDetails.orderStatus}</td>
                    </tr>
                  </tbody>
                </table>

                <div>
                  <div>
                    <div>
                      <DynamicIcon name='ShoppingCart' />
                      <span>Subtotal</span>
                    </div>
                    <p>{formatCurrency(productDetails.price * quantity)}</p>
                  </div>
                  <div>
                    <div>
                      <button onClick={toggleDecreaseQuantity} className='px-4 py-2 cursor-pointer'>
                        <DynamicIcon name='Minus' />
                      </button>
                      <span>{quantity}</span>
                      <button onClick={toggleIncreaseQuantity} className='px-4 py-2 cursor-pointer'>
                        <DynamicIcon name='Add' />
                      </button>
                    </div>
                  </div>
                  <p className='font-bold text-red-600'>
                    <DynamicIcon name='BagTick' />
                    {productDetails.totalSold} Units Sold
                  </p>
                </div>
              </div>
            </section>
          </div>

          <section className='flex-col-6'>
            <div className='overflow-hidden logo-wrapper'>
              <img
                src='https://ik.imagekit.io/dianerdiana/bluee-marketplace/logo/store-thumbnail-1.png'
                alt='Store Logo'
              />
            </div>

            <div>
              <h2>{store.name}</h2>
              <p>
                <DynamicIcon name='Box' /> <span>{store.totalProducts} Total Products</span>
              </p>
            </div>

            <Link to='/store' title='Visit Store'>
              Visit Store
            </Link>
          </section>

          <section className='flex-col-6'>
            <h3>Product About</h3>
            <div className='ProductDescription'>{parse(productDetails.description)}</div>
          </section>

          <section>
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
        </section>
      </article>
    </main>
  );
};

export default ProductDetailPage;
