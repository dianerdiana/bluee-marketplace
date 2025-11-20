// Routing
import { useSearchParams } from 'react-router-dom';

// Custom Components

// Types

// Utils
import { formatThousandNumber } from '@/utils/utils';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Iconsax } from '@/components/iconsax';
import { Button } from '@/components/ui/button';
import ProductList from '../components/product-list';
import { Container } from '@/components/container';
import SectionGroup from '../components/section-group';

type Product = {
  id: string;
  slug: string;
  name: string;
  imageUrl: string;
  category: string;
  totalSold: number;
  price: number;
  isLiked: boolean;
  isInCart: boolean;
};

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

const LoadMoreButton = () => {
  return (
    <div className='flex items-center justify-center'>
      <Button variant='dark' className='flex px-6 py-5 rounded-md'>
        <span className='me-2.5'>Load More</span>
        <Iconsax name='ArrowDown' />
      </Button>
    </div>
  );
};

export default function ProductListPage() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category') || '';

  return (
    <main>
      <Container>
        <section className='flex flex-col justify-center py-14  gap-y-3'>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href='/home' className='font-semibold'>
                  Homepage
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className='capitalize font-semibold'>{category}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className='text-3xl font-extrabold flex-col-12'>
            Explore based on <span className='capitalize'>{category}</span> Category
          </h1>
          <div className='gap-4 flex'>
            <div className='flex items-center'>
              <Iconsax name='Box' size={20} className='text-muted-foreground me-1.5' />
              <span className='font-semibold text-muted-foreground'>
                {formatThousandNumber(1294)} Total Products
              </span>
            </div>
            <div className='flex items-center'>
              <Iconsax name='Verify' size={20} className='text-muted-foreground me-1.5' />
              <span className='font-semibold text-muted-foreground'>Authenticity Guaranteed</span>
            </div>
          </div>
        </section>
      </Container>

      <div className='bg-white'>
        <Container>
          <SectionGroup title='Popular Products 🔥'>
            <div className='space-y-8'>
              <ProductList arrayProducts={popularProducts} />
              <LoadMoreButton />
            </div>
          </SectionGroup>

          <SectionGroup title='Just Released 🙌🏻'>
            <div className='space-y-8 pb-10'>
              <ProductList arrayProducts={justReleasedProducts} />
              <LoadMoreButton />
            </div>
          </SectionGroup>
        </Container>
      </div>
    </main>
  );
}
