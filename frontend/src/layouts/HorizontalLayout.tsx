import BrandImage from '@/components/BrandImage';
import { Button } from '@/components/Button';
import { DynamicIcon } from '@/components/DynamicIcon';
import { BaseInput, InputWrapper, IconWrapper } from '@/components/Input';
import type { IconName } from '@/types/iconNames';
import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

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
  return (
    <Suspense fallback={null}>
      <header className='py-8 bg-white'>
        <div className='container items-center justify-between mx-auto mb-8 row'>
          <div className='flex-col-2'>
            <BrandImage />
          </div>
          <form className='flex-col-8'>
            <InputWrapper>
              <IconWrapper>
                <DynamicIcon name='SearchNormal1' />
              </IconWrapper>
              <BaseInput placeholder='Search any products' />
            </InputWrapper>
          </form>
          <div className='items-center justify-end gap-3 flex-col-2 row'>
            <Button
              variant='secondary'
              className='bg-gray-200 rounded-full text-dark hover:text-white hover:bg-gray-400 w-14 h-14'
            >
              <DynamicIcon name='Notification' />
            </Button>
            <Button
              variant='secondary'
              className='bg-gray-200 rounded-full text-dark hover:text-white hover:bg-gray-400 w-14 h-14'
            >
              <DynamicIcon name='ShoppingCart' />
            </Button>
            <Button
              variant='secondary'
              className='p-0 overflow-hidden bg-gray-200 rounded-full text-dark hover:text-white hover:bg-gray-400 w-14 h-14'
            >
              <img src='https://ik.imagekit.io/dianerdiana/bluee-marketplace/images/profile-1.png' alt='profile' />
            </Button>
          </div>
        </div>
        <nav className='container mx-auto'>
          <ul className='items-center justify-between row'>
            {navLinks.map((navLink) => (
              <li key={navLink.id}>
                <NavLink
                  to={navLink.href}
                  className={({ isActive }) =>
                    [
                      'row items-center ',
                      isActive ? 'text-primary hover:text-blue-900' : 'text-secondary hover:text-gray-900',
                    ].join('')
                  }
                >
                  {({ isActive }) => (
                    <>
                      <DynamicIcon name={navLink.icon} variant={isActive ? 'Bold' : 'Outline'} className='me-2' />
                      <span>{navLink.title}</span>
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <Outlet />

      <footer className='bg-white border-t-gray-400 py-14'>
        <div className='container mx-auto row'>
          <section className='lg:flex-col-3 flex-col-12 lg:me-20'>
            <BrandImage className='mb-6' />

            <p className='text-secondary leading-160'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text
            </p>
          </section>
          <section className='lg:flex-col-2 flex-col-12 lg:me-12'>
            <h1 className='mb-4 font-semibold text-dark'>Main Menu</h1>

            <nav title='Nav Main Menu Footer'>
              <ul className='space-y-4'>
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
              <ul className='space-y-4'>
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
            <p className='text-secondary'>@ 2025 Bluee Company. All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </Suspense>
  );
};

export default HorizontalLayout;
