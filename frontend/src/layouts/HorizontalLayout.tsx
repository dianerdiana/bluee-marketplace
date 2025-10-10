// React
import { Suspense } from 'react';

// Routing
import { Link, NavLink, Outlet, useSearchParams } from 'react-router-dom';

// Custom Components
import { BrandImage } from '@/components/BrandImage';
import { Button, ButtonLink } from '@/components/Button';
import { DynamicIcon } from '@/components/DynamicIcon';
import { BaseInput, InputWrapper, IconWrapper } from '@/components/Input';

// Thirdparty
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Types
import type { IconName } from '@/types/iconNames';

// Configs
import { cn } from '@/configs/cn';

// Import Swiper styles
import 'swiper/swiper-bundle.css';
import '@/assets/css/swiper.css';
import { Container } from '@/components/Container';
import { Row } from '@/components/Row';
import { Col } from '@/components/Col';

type NavLink = {
  id: string;
  title: string;
  href: string;
  icon: IconName;
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

const HorizontalLayout = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search') || '';

  return (
    <Suspense fallback={null}>
      <header className='py-4 bg-white lg:py-8'>
        <Container className='lg:px-0 mb-6'>
          <Row className='items-center justify-between'>
            <Col sm={6} lg={2} className='order-1'>
              <Link to={'/home'}>
                <BrandImage imgClassName='me-1 lg:me-3' />
              </Link>
            </Col>
            <Col sm={12} lg={8} className='order-3 mt-3 lg:mt-0 lg:order-2'>
              <form onSubmit={() => console.log(search)}>
                <InputWrapper>
                  <IconWrapper>
                    <DynamicIcon name='SearchNormal1' />
                  </IconWrapper>
                  <BaseInput
                    id='search'
                    name='search'
                    placeholder='Search any products'
                    defaultValue={search}
                    onChange={(e) => {
                      const value = e.target.value;

                      if (value.length) {
                        setSearchParams({ search: value });
                      } else {
                        setSearchParams('');
                      }
                    }}
                  />
                </InputWrapper>
              </form>
            </Col>
            <Col sm={6} lg={2} className='lg:order-3 order-2'>
              <div className='flex items-center justify-end gap-2 lg:gap-3'>
                <Button
                  variant='secondary'
                  className='items-center justify-center w-10 h-10 p-2 bg-gray-200 rounded-full row text-dark hover:text-white hover:bg-gray-400 lg:w-14 lg:h-14'
                >
                  <DynamicIcon name='Notification' size={24} />
                </Button>
                <ButtonLink
                  href='/carts'
                  variant='secondary'
                  className='items-center justify-center w-10 h-10 p-2 bg-gray-200 rounded-full row text-dark hover:text-white hover:bg-gray-400 lg:w-14 lg:h-14'
                >
                  <DynamicIcon name='ShoppingCart' />
                </ButtonLink>
                <Button
                  variant='secondary'
                  className='w-10 h-10 p-0 overflow-hidden bg-gray-200 rounded-full lg:w-14 lg:h-14'
                >
                  <img src='https://ik.imagekit.io/dianerdiana/bluee-marketplace/images/profile-1.png' alt='profile' />
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
        <Container className='lg:px-0'>
          <nav>
            <Swiper
              tag='ul'
              slidesPerView='auto'
              spaceBetween={32}
              pagination
              modules={[Pagination]}
              className='justify-between row'
            >
              {navLinks.map((navLink) => (
                <SwiperSlide key={navLink.id} tag='li' className='space-x-3 !w-fit'>
                  <NavLink to={navLink.href} className='items-center row group'>
                    {({ isActive }) => (
                      <>
                        <DynamicIcon
                          name={navLink.icon}
                          variant={isActive ? 'Bold' : 'Outline'}
                          className={cn(
                            'me-2 transition-colors',
                            isActive
                              ? 'text-primary group-hover:text-blue-900'
                              : 'text-secondary group-hover:text-gray-900',
                          )}
                        />
                        <span
                          className={cn(
                            'me-2 transition-colors',
                            isActive
                              ? 'text-primary group-hover:text-blue-900'
                              : 'text-secondary group-hover:text-gray-900',
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

                <p className='text-secondary leading-160'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text
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
                        <NavLink to={navLink.href} className='text-secondary hover:text-gray-900'>
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
                        <NavLink to={navLink.href} className='text-secondary hover:text-gray-900'>
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
              <p className='text-center text-secondary'>&copy; 2025 Bluee Company. All Rights Reserved</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </Suspense>
  );
};

export default HorizontalLayout;
