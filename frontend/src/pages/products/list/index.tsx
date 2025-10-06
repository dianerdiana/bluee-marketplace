import { Breadcrumb } from '@/components/Breadcrumb';
import { Button } from '@/components/Button';
import { CardProduct, CardProductList } from '@/components/CardProduct';
import { DynamicIcon } from '@/components/DynamicIcon';
import type { Product } from '@/types/product';
import { formatThousandNumber } from '@/utils/utils';
import { useSearchParams } from 'react-router-dom';

const popularProducts: Product[] = [
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
  {
    id: '5',
    slug: 'iphone-14-pro-blue',
    name: 'iPhone 14 Pro Blue',
    imageUrl: 'https://ik.imagekit.io/dianerdiana/bluee-marketplace/images/product-12.png',
    category: 'Gadget',
    totalSold: 120,
    price: 18500500,
    isLiked: false,
    isInCart: false,
  },
  {
    id: '6',
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
    id: '7',
    slug: 'iphone-14-pro-gold',
    name: 'iPhone 16 Pro Max Gold',
    imageUrl: 'https://ik.imagekit.io/dianerdiana/bluee-marketplace/images/product-10.png',
    category: 'Gadget',
    totalSold: 120,
    price: 18500500,
    isLiked: false,
    isInCart: false,
  },
  {
    id: '8',
    slug: 'iphone-14-pro-green',
    name: 'iPhone 16 Green',
    imageUrl: 'https://ik.imagekit.io/dianerdiana/bluee-marketplace/images/product-9.png',
    category: 'Gadget',
    totalSold: 120,
    price: 18500500,
    isLiked: false,
    isInCart: false,
  },
];

const justReleasedProducts: Product[] = [
  {
    id: '1',
    slug: 'airpods-gen-z-2025',
    name: 'Airpods Gen Z 2025',
    imageUrl: 'https://ik.imagekit.io/dianerdiana/bluee-marketplace/images/product-14.png',
    category: 'Gadget',
    totalSold: 120,
    price: 18500500,
    isLiked: false,
    isInCart: false,
  },
  {
    id: '2',
    slug: 'macbook-pro-m2',
    name: 'Macbook Pro M2',
    imageUrl: 'https://ik.imagekit.io/dianerdiana/bluee-marketplace/images/product-15.png',
    category: 'Gadget',
    totalSold: 120,
    price: 18500500,
    isLiked: false,
    isInCart: false,
  },
  {
    id: '3',
    slug: 'macbook-pro-m2',
    name: 'Macbook Pro M2',
    imageUrl: 'https://ik.imagekit.io/dianerdiana/bluee-marketplace/images/product-15.png',
    category: 'Gadget',
    totalSold: 120,
    price: 18500500,
    isLiked: false,
    isInCart: false,
  },
  {
    id: '4',
    slug: 'macbook-pro-m2',
    name: 'Macbook Pro M2',
    imageUrl: 'https://ik.imagekit.io/dianerdiana/bluee-marketplace/images/product-15.png',
    category: 'Gadget',
    totalSold: 120,
    price: 18500500,
    isLiked: false,
    isInCart: false,
  },
  {
    id: '5',
    slug: 'macbook-pro-m2',
    name: 'Macbook Pro M2',
    imageUrl: 'https://ik.imagekit.io/dianerdiana/bluee-marketplace/images/product-15.png',
    category: 'Gadget',
    totalSold: 120,
    price: 18500500,
    isLiked: false,
    isInCart: false,
  },
  {
    id: '6',
    slug: 'macbook-pro-m2',
    name: 'Macbook Pro M2',
    imageUrl: 'https://ik.imagekit.io/dianerdiana/bluee-marketplace/images/product-15.png',
    category: 'Gadget',
    totalSold: 120,
    price: 18500500,
    isLiked: false,
    isInCart: false,
  },
  {
    id: '7',
    slug: 'macbook-pro-m2',
    name: 'Macbook Pro M2',
    imageUrl: 'https://ik.imagekit.io/dianerdiana/bluee-marketplace/images/product-15.png',
    category: 'Gadget',
    totalSold: 120,
    price: 18500500,
    isLiked: false,
    isInCart: false,
  },
  {
    id: '8',
    slug: 'macbook-pro-m2',
    name: 'Macbook Pro M2',
    imageUrl: 'https://ik.imagekit.io/dianerdiana/bluee-marketplace/images/product-15.png',
    category: 'Gadget',
    totalSold: 120,
    price: 18500500,
    isLiked: false,
    isInCart: false,
  },
];

const ProductListPage = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category') || '';

  return (
    <main>
      <section className='items-center px-5 py-14 row gap-y-3 app-container'>
        <Breadcrumb items={[{ label: 'Homepage', href: '/home' }, { label: category }]} />
        <h1 className='text-3xl font-extrabold flex-col-12'>
          Explore based on <span className='capitalize'>{category}</span> Category
        </h1>
        <div className='gap-4 row'>
          <div className='items-center row'>
            <DynamicIcon name='Box' size={20} className='text-secondary me-1.5' />
            <span className='font-semibold text-secondary'>{formatThousandNumber(1294)} Total Products</span>
          </div>
          <div className='items-center row'>
            <DynamicIcon name='Verify' size={20} className='text-secondary me-1.5' />
            <span className='font-semibold text-secondary'>Authenticity Guaranteed</span>
          </div>
        </div>
      </section>

      <div className='py-16 bg-white'>
        <section className='px-5 mb-24 app-container'>
          <h2 className='text-3xl font-extrabold mb-9'>Popular Products 🔥</h2>

          <CardProductList>
            {popularProducts.map((product) => (
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

          <div className='flex items-center justify-center mt-9'>
            <Button variant='dark' className='flex px-6 py-4 rounded-2xl'>
              <span className='me-2.5'>Load More</span>
              <DynamicIcon name='ArrowDown' />
            </Button>
          </div>
        </section>

        <section className='px-5 app-container'>
          <h2 className='text-3xl font-extrabold mb-9'>Just Released 🙌🏻 </h2>

          <CardProductList>
            {justReleasedProducts.map((product) => (
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

          <div className='flex items-center justify-center mt-9'>
            <Button variant='dark' className='flex px-6 py-4 rounded-2xl'>
              <span className='me-2.5'>Load More</span>
              <DynamicIcon name='ArrowDown' />
            </Button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ProductListPage;
