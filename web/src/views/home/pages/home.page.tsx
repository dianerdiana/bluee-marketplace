// Import Swiper styles
import 'swiper/swiper-bundle.css';
import AddSlide from '../components/add-slide';
import CategorySlide from '../components/category-slide';
import SectionGroup from '../components/section-group';
import ListProduct from '../components/list-product';

const arrayCategories = [
  { id: '1', slug: 'gadget', name: 'Gadget', icon: 'Mobile', totalItems: 1294 },
  { id: '2', slug: 'fitness', name: 'Fitness', icon: 'Weight', totalItems: 1294 },
  { id: '3', slug: 'hardware', name: 'Hardware', icon: 'Devices', totalItems: 1294 },
  { id: '4', slug: 'furniture', name: 'Furniture', icon: 'Tree', totalItems: 1294 },
  { id: '5', slug: 'electronic', name: 'Electronic', icon: 'Lamp', totalItems: 1294 },
  { id: '6', slug: 'kitchen', name: 'Kitchen', icon: 'Cup', totalItems: 1294 },
];

const arrayAdds = [
  {
    id: '1',
    href: '/home',
    imageUrl: 'https://ik.imagekit.io/dianerdiana/bluee-marketplace/images/adds-slide-1.png',
  },
  {
    id: '2',
    href: '/home',
    imageUrl: 'https://ik.imagekit.io/dianerdiana/bluee-marketplace/images/adds-slide-2.png',
  },
  {
    id: '3',
    href: '/home',
    imageUrl: 'https://ik.imagekit.io/dianerdiana/bluee-marketplace/images/adds-slide-1.png',
  },
  {
    id: '4',
    href: '/home',
    imageUrl: 'https://ik.imagekit.io/dianerdiana/bluee-marketplace/images/adds-slide-2.png',
  },
  {
    id: '5',
    href: '/home',
    imageUrl: 'https://ik.imagekit.io/dianerdiana/bluee-marketplace/images/adds-slide-1.png',
  },
  {
    id: '6',
    href: '/home',
    imageUrl: 'https://ik.imagekit.io/dianerdiana/bluee-marketplace/images/adds-slide-2.png',
  },
  {
    id: '7',
    href: '/home',
    imageUrl: 'https://ik.imagekit.io/dianerdiana/bluee-marketplace/images/adds-slide-1.png',
  },
  {
    id: '8',
    href: '/home',
    imageUrl: 'https://ik.imagekit.io/dianerdiana/bluee-marketplace/images/adds-slide-2.png',
  },
];

const arrayProducts = [
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

export default function HomePage() {
  return (
    <main className='bg-white'>
      <section className='pt-4 pb-1 lg:pt-8 lg:pb-4 bg-primary-foreground'>
        <AddSlide arrayAdds={arrayAdds} />
      </section>

      <SectionGroup title='Explore High Quality Products by Category' url='/categories'>
        <CategorySlide arrayCategories={arrayCategories} />
      </SectionGroup>

      <SectionGroup title='Shop Quality Picks From Top Sellers' url='/products'>
        <ListProduct arrayProducts={arrayProducts} />
      </SectionGroup>
    </main>
  );
}
