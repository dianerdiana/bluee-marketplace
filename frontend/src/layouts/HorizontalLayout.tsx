import BrandImage from '@/components/BrandImage';
import { Button } from '@/components/Button';
import { DynamicIcon } from '@/components/DynamicIcon';
import { BaseInput, InputWrapper, IconWrapper } from '@/components/Input';
import type { IconName } from '@/types/iconNames';
import { Suspense } from 'react';
import { NavLink, Outlet, useSearchParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { cn } from '@/configs/cn';

// Import Swiper styles
import 'swiper/swiper-bundle.css';
import '@/assets/css/swiper.css';

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
  const [params, setParams] = useSearchParams();
  const search = params.get('search') || '';

  return (
    <Suspense fallback={null}>
      <header className='py-4 bg-white lg:py-8'>
        <div className='items-center justify-between mb-8 app-container row'>
          <div className='order-1 flex-col-6 lg:flex-col-2'>
            <BrandImage imgClassName='me-1 lg:me-3' />
          </div>
          <form
            onSubmit={() => console.log(search)}
            className='order-3 mt-3 lg:mt-0 flex-col-12 lg:flex-col-8 lg:order-2'
          >
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
                    setParams({ search: value });
                  } else {
                    setParams('');
                  }
                }}
              />
            </InputWrapper>
          </form>
          <div className='items-center justify-end order-2 gap-2 lg:gap-3 flex-col-6 lg:flex-col-2 row lg:order-3'>
            <Button
              variant='secondary'
              className='items-center justify-center w-10 h-10 p-2 bg-gray-200 rounded-full row text-dark hover:text-white hover:bg-gray-400 lg:w-14 lg:h-14'
            >
              <DynamicIcon name='Notification' size={24} />
            </Button>
            <Button
              variant='secondary'
              className='items-center justify-center w-10 h-10 p-2 bg-gray-200 rounded-full row text-dark hover:text-white hover:bg-gray-400 lg:w-14 lg:h-14'
            >
              <DynamicIcon name='ShoppingCart' />
            </Button>
            <Button
              variant='secondary'
              className='w-10 h-10 p-0 overflow-hidden bg-gray-200 rounded-full lg:w-14 lg:h-14'
            >
              <img src='https://ik.imagekit.io/dianerdiana/bluee-marketplace/images/profile-1.png' alt='profile' />
            </Button>
          </div>
        </div>
        <nav className='app-container'>
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
      </header>

      <Outlet />

      <footer className='py-6 bg-white border-t-gray-400 lg:py-14'>
        <div className='app-container row'>
          <section className='mb-4 lg:flex-col-3 flex-col-12 lg:me-20 lg:mb-0'>
            <BrandImage className='mb-6' />

            <p className='text-secondary leading-160'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text
            </p>
          </section>
          <section className='mb-4 lg:flex-col-2 flex-col-12 lg:me-12 lg:mb-0'>
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
          <section className='lg:flex-col-2 flex-col-12'>
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

          <hr className='border-gray-400 flex-col-12 my-9' />

          <div className='flex-col-12'>
            <p className='text-center text-secondary'>&copy; 2025 Bluee Company. All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </Suspense>
  );
};

export default HorizontalLayout;
