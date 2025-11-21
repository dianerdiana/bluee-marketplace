// React Imports

// Route Dom

// Custom Components

// Types

// Utils
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import ProductList from '../components/product-list';
import SectionGroup from '../components/section-group';
import { Container } from '@/components/container';
import ProductThumbnailSlide from '../components/product-thumbnail-slide';
import ProductDetail from '../components/product-detail';
import Store from '../components/store';
import LandscapeAdvertisementSlide from '../components/landscape-advertisement-slide';
import ProductAbout from '../components/product-about';
import ProductTestimonySlide from '../components/product-testimony-slide';

const arrayProducts = [
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
  unitWeight: 'KG',
  warranty: '24',
  unitWarranty: 'Month',
  orderStatus: 'Ready to Ship',
  price: 18500500,
  description: `
    <p>The MacBook Pro 13-inch with the M2 chip delivers incredible speed, long battery life, and a brilliant Retina display—all in a sleek, compact design.</p>
    <br />
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
    {
      id: '1',
      imageUrl: 'https://ik.imagekit.io/dianerdiana/bluee-marketplace/images/macbook-1.png',
    },
    {
      id: '2',
      imageUrl: 'https://ik.imagekit.io/dianerdiana/bluee-marketplace/images/macbook-2.png',
    },
    {
      id: '3',
      imageUrl: 'https://ik.imagekit.io/dianerdiana/bluee-marketplace/images/macbook-3.png',
    },
    {
      id: '4',
      imageUrl: 'https://ik.imagekit.io/dianerdiana/bluee-marketplace/images/macbook-4.png',
    },
    {
      id: '5',
      imageUrl: 'https://ik.imagekit.io/dianerdiana/bluee-marketplace/images/macbook-4.png',
    },
    {
      id: '6',
      imageUrl: 'https://ik.imagekit.io/dianerdiana/bluee-marketplace/images/macbook-4.png',
    },
    {
      id: '7',
      imageUrl: 'https://ik.imagekit.io/dianerdiana/bluee-marketplace/images/macbook-4.png',
    },
  ],
};

const store = {
  id: '1',
  name: 'Bimore Gadget Universe',
  totalProducts: 1294,
  thumbnail: 'https://ik.imagekit.io/dianerdiana/bluee-marketplace/logo/store-thumbnail-1.png',
};

const arrayProductTestimonials = [
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

const arrayAdvertisements = [
  {
    id: '1',
    href: '/home',
    imageUrl: 'https://ik.imagekit.io/dianerdiana/bluee-marketplace/images/adds-1.jpg',
  },
  {
    id: '2',
    href: '/home',
    imageUrl: 'https://ik.imagekit.io/dianerdiana/bluee-marketplace/images/adds-2.jpg',
  },
];

export default function ProductDetailPage() {
  const category = 'gadget';

  return (
    <main>
      <Container className='py-8'>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href='/home' className='capitalize font-semibold'>
                Homepage
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href='/home' className='capitalize font-semibold'>
                {category}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className='capitalize font-semibold'>Product Details</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </Container>

      <div className='bg-white'>
        <Container>
          <div className='flex flex-wrap justify-between py-8'>
            <div className='mb-10 lg:w-1/2 w-full lg:mb-0'>
              <ProductThumbnailSlide thumbnails={productDetails.thumbnails} />
            </div>
            <div className='lg:w-5/12 w-full'>
              <ProductDetail {...productDetails} />
            </div>
          </div>

          <div className='flex flex-wrap gap-10 items-center justify-between lg:w-6/12 w-full'>
            <Store
              name={store.name}
              slug={store.name}
              thumbnail={store.thumbnail}
              totalProducts={store.totalProducts}
            />

            <ProductAbout description={productDetails.description} />
            <LandscapeAdvertisementSlide arrayAdvertisements={arrayAdvertisements} />
            <ProductTestimonySlide arrayProductTestimonials={arrayProductTestimonials} />
          </div>
        </Container>

        <SectionGroup title='Shop Quality Picks From Top Sellers' href='/home'>
          <ProductList arrayProducts={arrayProducts} />
        </SectionGroup>
      </div>
    </main>
  );
}
