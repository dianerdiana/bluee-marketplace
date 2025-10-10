// React Imports
import { memo, useState } from 'react';

// Router Dom
import { Link, NavLink, Outlet, useMatches } from 'react-router-dom';

// Custom Components
import { BrandImage } from '@/components/BrandImage';
import { Button } from '@/components/Button';
import { Container } from '@/components/Container';

// Thirdparty
import { cn } from '@/configs/cn';
import { DynamicIcon } from '@/components/DynamicIcon';

// Type
import type { NavigationItem } from '@/types/navigationItem';
import type { RouteHandle } from '@/types/routeHandle';

// Utils
import { navigation } from '@/navigation';

const VerticalLayout = memo(() => {
  const [sidenavOpen, setSidenavOpen] = useState(true);
  const matches = useMatches();

  const currentMatch = matches.find((m) => {
    const h = m.handle;
    return typeof h === 'object' && h !== null && 'title' in (h as Record<string, unknown>);
  }) as ((typeof matches)[number] & { handle: RouteHandle }) | undefined;

  const linkTitle = currentMatch?.handle?.title ?? 'Default Title';
  const linkDescription = currentMatch?.handle?.description ?? 'Default Description';
  const linkBefore = currentMatch?.handle?.link ?? null;

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
          <nav className='h-full'>
            <ul className='space-y-2'>
              <NavMenuItems items={navigation} />
            </ul>
          </nav>
        </div>
      </aside>

      {/* Content */}
      <div className='lg:ms-64 ms-0'>
        {/* Top Nav */}
        <Container className='pt-2 mb-5'>
          <header className='row gap-4'>
            <div className={cn('flex flex-wrap justify-between items-center p-4 w-full flex-1 bg-white rounded-2xl')}>
              <div className='flex-col-2 lg:hidden'>
                <button onClick={toggleSideNav} className='p-2 border rounded-md text-secondary cursor-pointer'>
                  <DynamicIcon name='HamburgerMenu' />
                </button>
              </div>
              <div className='hidden lg:block'>
                <h1 className='font-dark font-bold lg:text-2xl text-lg'>{linkTitle}</h1>
                {linkBefore ? (
                  <Link to={linkBefore} className='flex items-center'>
                    <DynamicIcon name='ArrowLeft' className='me-1 text-secondary' />
                    <span className='text-secondary lg:text-base font-semibold text-sm'>{linkDescription}</span>
                  </Link>
                ) : (
                  <p className='text-secondary lg:text-base font-semibold text-sm'>{linkDescription}</p>
                )}
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
                    <img
                      src='https://ik.imagekit.io/dianerdiana/bluee-marketplace/images/profile-1.png'
                      alt='profile'
                    />
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
        </Container>

        <main className='pb-10'>
          <Outlet />
        </main>
      </div>
    </>
  );
});

export default VerticalLayout;

const NavMenuSectionHeader = ({ header }: { header: string }) => {
  return (
    <li className='text-base font-medium text-secondary'>
      <span>{header}</span>
    </li>
  );
};

const NavMenuLink: React.FC<NavigationItem & { isChild: boolean }> = ({
  title,
  navLink = '',
  icon = 'Cd',
  isChild,
}) => {
  return (
    <li>
      <NavLink to={navLink}>
        {({ isActive }) => (
          <div
            className={cn(
              'flex relative overflow-hidden items-center px-4 py-3 rounded-2xl group hover:bg-slate-primary transition-all duration-200',
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
              className={cn('absolute opacity-0 group-hover:opacity-100 right-0 w-2 h-8 rounded-s-4xl bg-primary', {
                'opacity-100': isActive,
              })}
            />
          </div>
        )}
      </NavLink>
    </li>
  );
};

const NavMenuGroup: React.FC<NavigationItem> = ({ title, navLink = '/home', icon = 'RecordCircle', subItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasSubItems = subItems && subItems.length > 0;

  const toggleSubMenu = (e: React.MouseEvent) => {
    if (hasSubItems) {
      e.preventDefault(); // Biar NavLink nggak langsung pindah halaman
      setIsOpen((prev) => !prev);
    }
  };

  return (
    <li className='flex flex-col'>
      <NavLink to={navLink} onClick={toggleSubMenu}>
        {({ isActive }) => (
          <div
            className={cn(
              'flex relative items-center px-4 py-3 rounded-2xl group hover:bg-slate-primary transition-all duration-200',
              isActive && 'bg-slate-primary',
            )}
          >
            <DynamicIcon
              name={icon}
              size={24}
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
        <ul
          className={cn(
            'overflow-hidden transition-[max-height] duration-300 ease-in-out ps-4',
            isOpen ? 'max-h-96' : 'max-h-0',
          )}
        >
          {subItems.map((sub, idx) => (
            <NavMenuLink key={idx} {...sub} isChild={true} />
          ))}
        </ul>
      )}
    </li>
  );
};

const NavMenuItems: React.FC<{ items: NavigationItem[] }> = ({ items }) => {
  const RenderNavItems = items.map((item, idx) => {
    if (item.header) {
      return <NavMenuSectionHeader key={idx} header={item.header} />;
    }

    if (item.subItems && item.subItems.length) {
      return <NavMenuGroup key={idx} {...item} />;
    }

    return <NavMenuLink key={idx} {...item} isChild={false} />;
  });

  return RenderNavItems;
};
