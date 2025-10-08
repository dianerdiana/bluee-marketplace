// React Imports
import { memo, useState } from 'react';

// Router Dom
import { Link, NavLink, Outlet } from 'react-router-dom';

// Thirdparty
import { cn } from '@/configs/cn';
import { DynamicIcon } from '@/components/DynamicIcon';

// Type
import { navigation, type SidenavItem } from '@/navigation';
import { BrandImage } from '@/components/BrandImage';
import { Button } from '@/components/Button';

const VerticalLayout = memo(() => {
  const [sidenavOpen, setSidenavOpen] = useState(true);
  const toggleSideNav = () => setSidenavOpen((prev) => !prev);

  return (
    <>
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full lg:translate-x-0 ${
          sidenavOpen ? '-translate-x-full' : 'translate-x-0'
        }`}
        aria-label='Sidebar'
      >
        <div className='flex flex-col h-full px-4 py-8 overflow-y-auto bg-white gap-7'>
          <div className='absolute top-0 right-0 p-2'>
            <button onClick={toggleSideNav} className='lg:hidden cursor-pointer'>
              <DynamicIcon name='CloseSquare' size={24} />
            </button>
          </div>
          <Link to={'/home'} className='border-none outline-none'>
            <BrandImage />
          </Link>
          <nav className='flex flex-col justify-between h-full'>
            <ul className='space-y-2'>
              {navigation.map((nav, idx) => (
                <li key={idx + 1}>
                  {nav.isHeader ? (
                    <SidenavMenuHeader title={nav.title} />
                  ) : (
                    <SidenavMenuItem {...nav} isChild={false} />
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>

      {/* Top Nav */}
      <div className='lg:ms-64 ms-0'>
        <header className='px-2 py-4 row gap-4'>
          <div className={cn('flex flex-wrap justify-between items-center p-4 w-full flex-1 bg-white rounded-2xl')}>
            <div className='flex-col-2 lg:hidden'>
              <button onClick={toggleSideNav} className='p-2 border rounded-md text-secondary cursor-pointer'>
                <DynamicIcon name='HamburgerMenu' />
              </button>
            </div>
            <div className='hidden lg:block'>
              <h1 className='font-dark font-bold lg:text-2xl text-lg'>Dashboard Overview</h1>
              <p className='text-secondary lg:text-base font-semibold text-sm'>View Your Dashboard</p>
            </div>
            <div className='gap-x-2 flex'>
              <Button variant='light-secondary' className='rounded-full lg:p-3 p-2'>
                <DynamicIcon name='SearchNormal1' className='text-dark' size={24} />
              </Button>
              <Button variant='light-secondary' className='rounded-full lg:p-3 p-2'>
                <DynamicIcon name='Notification' className='text-dark' size={24} />
              </Button>
              <div className='flex items-center'>
                <Button
                  variant='secondary'
                  className='lg:w-12 lg:h-12 w-10 h-10 p-0 overflow-hidden bg-gray-200 rounded-full'
                >
                  <img src='https://ik.imagekit.io/dianerdiana/bluee-marketplace/images/profile-1.png' alt='profile' />
                </Button>
                <div className='ms-2.5 hidden lg:block'>
                  <p className='font-semibold'>Bimore W</p>
                  <p className='flex shrink-0 text-secondary items-center'>
                    <DynamicIcon name='User' className='me-1.5' size={16} /> <span>Buyer</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <Outlet />
      </div>
    </>
  );
});

export default VerticalLayout;

const SidenavMenuHeader = ({ title }: { title: string }) => {
  return <h4 className='text-base font-medium text-secondary'>{title}</h4>;
};

const SidenavMenuItem = ({
  title,
  href = '/home',
  icon = 'RecordCircle',
  subItems,
  isChild = false,
}: SidenavItem & { isChild: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasSubItems = subItems && subItems.length > 0;

  const toggleSubMenu = (e: React.MouseEvent) => {
    if (hasSubItems) {
      e.preventDefault(); // Biar NavLink nggak langsung pindah halaman
      setIsOpen((prev) => !prev);
    }
  };

  return (
    <div className='flex flex-col'>
      <NavLink to={href} onClick={toggleSubMenu}>
        {({ isActive }) => (
          <div
            className={cn(
              'flex relative items-center px-4 py-3 rounded-2xl group hover:bg-slate-primary transition-all duration-200',
              isActive && 'bg-slate-primary',
            )}
          >
            <DynamicIcon
              name={icon}
              size={isChild ? 16 : 24}
              variant={isActive ? 'Bold' : 'Outline'}
              className={cn('text-dark group-hover:text-primary', isActive && 'text-primary')}
            />

            <span
              className={cn('font-semibold ms-3 group-hover:text-primary flex-1', {
                'text-primary': isActive,
              })}
            >
              {title}
            </span>

            <span
              className={cn(
                'absolute opacity-0 group-hover:opacity-100 right-0 w-2 h-8 rounded-s-4xl rounded-e-md bg-primary',
                { 'opacity-100': isActive },
              )}
            />

            {hasSubItems && (
              <span
                className={cn('transition-transform duration-200 group-hover:text-primary', {
                  'rotate-180': isOpen,
                  'text-primary': isActive,
                })}
              >
                <DynamicIcon name='ArrowCircleDown' size={20} />
              </span>
            )}
          </div>
        )}
      </NavLink>

      {/* Submenu */}
      {hasSubItems && (
        <div
          className={cn(
            'overflow-hidden transition-[max-height] duration-300 ease-in-out ps-4',
            isOpen ? 'max-h-96' : 'max-h-0',
          )}
        >
          {subItems.map((sub, idx) => (
            <SidenavMenuItem key={idx} {...sub} isChild={true} />
          ))}
        </div>
      )}
    </div>
  );
};
