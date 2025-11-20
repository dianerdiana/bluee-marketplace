// React
import { Suspense } from 'react';

// Routing
import { Link, NavLink, Outlet, useSearchParams } from 'react-router-dom';

// Custom Components
import { Iconsax } from '@/components/iconsax';

// Thirdparty
import { Swiper, SwiperSlide } from 'swiper/react';

// Types
import type { IconsaxName } from '@/types/iconsax-names';

// Configs
import { cn } from '@/lib/utils';

// Import Swiper styles
import 'swiper/swiper-bundle.css';
import { Col } from '@/components/col';
import { Container } from '@/components/container';
import { Row } from '@/components/row';
import { Field } from '@/components/ui/field';
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group';
import { BrandImage } from '@/components/brand-image';
import { Button } from '@/components/ui/button';

type NavLink = {
  id: string;
  title: string;
  href: string;
  icon: IconsaxName;
};

const navLinks: NavLink[] = [
  {
    id: '1',
    title: 'HomePage',
    href: '/home',
    icon: 'Home',
  },
  {
    id: '2',
    title: 'Flash Deals',
    href: '/flash-deals',
    icon: 'Flash',
  },
  {
    id: '3',
    title: 'Track Orders',
    href: '/track-orders',
    icon: 'BoxSearch',
  },
  {
    id: '4',
    title: 'Return & Refund',
    href: '/return-and-refund',
    icon: 'Note',
  },
  {
    id: '5',
    title: 'Shipping Info',
    href: '/shipping-info',
    icon: 'TruckFast',
  },
  {
    id: '6',
    title: 'About Us',
    href: '/about-us',
    icon: 'Buildings',
  },
  {
    id: '7',
    title: 'Customer Service',
    href: '/customer-service',
    icon: 'CallCalling',
  },
];

const mainMenuFooterNavLinks = [
  { id: 1, title: 'Categories', href: '#' },
  { id: 2, title: 'Flash Deals', href: '#' },
  { id: 3, title: 'Top Up Game', href: '#' },
  { id: 4, title: 'Track My Order', href: '#' },
  { id: 5, title: 'Blue Article', href: '#' },
  { id: 6, title: 'Payment Method', href: '#' },
];

const companyFooterNavLinks = [
  { id: 1, title: 'Contact Us', href: '#' },
  { id: 2, title: 'About Us', href: '#' },
  { id: 3, title: 'Privacy Policy', href: '#' },
  { id: 4, title: 'Terms & Conditions', href: '#' },
];

export default function HorizontalLayout() {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search') || '';

  return (
    <Suspense fallback={null}>
      <header className='py-4 bg-white lg:py-8'>
        <Container className='mb-6'>
          <Row className='items-center justify-center'>
            <Col sm={6} lg={2} className='order-1'>
              <Link to={'/home'}>
                <BrandImage />
              </Link>
            </Col>
            <Col sm={12} lg={8} className='order-3 mt-3 lg:mt-0 lg:order-2'>
              <form onSubmit={() => console.log(search)}>
                <Field className='gap-2'>
                  <InputGroup>
                    <InputGroupAddon>
                      <Iconsax name='SearchNormal' />
                    </InputGroupAddon>
                    <InputGroupInput id='search' placeholder='Search any products' />
                  </InputGroup>
                </Field>
              </form>
            </Col>
            <Col sm={6} lg={2} className='lg:order-3 order-2'>
              <div className='flex items-center justify-end gap-2 lg:gap-3'>
                <Button
                  variant='secondary'
                  className='flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full text-dark hover:text-white hover:bg-gray-400'
                >
                  <Iconsax name='Notification' />
                </Button>
                <Link
                  to='/carts'
                  className='flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full text-dark hover:text-white hover:bg-gray-400'
                >
                  <Iconsax name='ShoppingCart' />
                </Link>
                <Button
                  variant='secondary'
                  className='w-10 h-10 p-0 overflow-hidden bg-gray-200 rounded-full'
                >
                  <img
                    src='https://ik.imagekit.io/dianerdiana/bluee-marketplace/images/profile-1.png'
                    alt='profile'
                  />
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <nav>
            <Swiper
              tag='ul'
              slidesPerView='auto'
              spaceBetween={32}
              pagination
              className='flex flex-wrap justify-between'
            >
              {navLinks.map((navLink) => (
                <SwiperSlide key={navLink.id} tag='li' className='space-x-3 max-w-fit'>
                  <NavLink to={navLink.href} className='flex flex-wrap items-center group'>
                    {({ isActive }) => (
                      <>
                        <Iconsax
                          name={navLink.icon}
                          variant={isActive ? 'Bold' : 'Outline'}
                          className={cn(
                            'me-2 transition-colors',
                            isActive
                              ? 'text-primary group-hover:text-blue-900'
                              : 'text-muted-foreground group-hover:text-dark',
                          )}
                        />
                        <span
                          className={cn(
                            'me-2 transition-colors',
                            isActive
                              ? 'text-primary group-hover:text-blue-900'
                              : 'text-muted-foreground group-hover:text-dark',
                          )}
                        >
                          {navLink.title}
                        </span>
                      </>
                    )}
                  </NavLink>
                </SwiperSlide>
              ))}
            </Swiper>
          </nav>
        </Container>
      </header>

      <Outlet />

      <footer className='py-6 bg-white border-t border-t-back lg:py-14'>
        <Container>
          <Row className='gap-y-4'>
            <Col sm={12} lg={3}>
              <section className='lg:me-20'>
                <BrandImage className='mb-6' />

                <p className='text-muted-foreground '>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text
                </p>
              </section>
            </Col>
            <Col sm={12} lg={2}>
              <section className='lg:me-12'>
                <h1 className='mb-4 font-semibold text-dark'>Main Menu</h1>

                <nav title='Nav Main Menu Footer'>
                  <ul className='space-y-2 lg:space-y-4'>
                    {mainMenuFooterNavLinks.map((navLink) => (
                      <li key={navLink.id}>
                        <NavLink
                          to={navLink.href}
                          className='text-muted-foreground hover:text-gray-900'
                        >
                          {navLink.title}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </nav>
              </section>
            </Col>
            <Col sm={12} lg={2}>
              <section>
                <h1 className='mb-4 font-semibold text-dark'>Company</h1>

                <nav title='Nav Company Footer'>
                  <ul className='space-y-2 lg:space-y-4'>
                    {companyFooterNavLinks.map((navLink) => (
                      <li key={navLink.id}>
                        <NavLink
                          to={navLink.href}
                          className='text-muted-foreground hover:text-gray-900'
                        >
                          {navLink.title}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </nav>
              </section>
            </Col>
            <Col sm={12}>
              <hr className='border-back w-full my-9' />
            </Col>
            <Col sm={12}>
              <p className='text-center text-muted-foreground'>
                &copy; 2025 Bluee Company. All Rights Reserved
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </Suspense>
  );
}
