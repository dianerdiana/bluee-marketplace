// React Imports
import { memo, useRef, useState } from 'react';

// Router Dom
import { Link, NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';

// Thirdparty
import { cn } from '@/configs/cn';
import { DynamicIcon } from '@/components/DynamicIcon';

// Type
import { navigation, type SidenavItem } from '@/navigation';
import { BrandImage } from '@/components/BrandImage';

const VerticalLayout = memo(() => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [open, setOpen] = useState(true);
  const toggleSideNav = () => setOpen((prev) => !prev);

  const handleLogout = () => {
    navigate('/signin');
  };

  return (
    <>
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 ${
          open ? '-translate-x-full' : 'translate-x-0'
        }`}
        aria-label='Sidebar'
      >
        <div className='flex flex-col h-full px-4 py-8 overflow-y-auto bg-white gap-7'>
          <div className='absolute top-0 right-0 p-1'>
            <button onClick={toggleSideNav} className='sm:hidden'>
              <DynamicIcon name='CloseSquare' className='w-4 h-4' />
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
                  ) : nav.subMenu ? (
                    <SidenavSubmenu pathname={pathname} {...nav} />
                  ) : (
                    <SidenavMenuItem {...nav} />
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>

      {/* Top Nav */}
      <div className='h-screen sm:ml-64'>
        <header className='p-4 border-b-[1px]'>
          <div className='flex justify-between'>
            <div>
              <button onClick={toggleSideNav} className='p-2 border rounded-md text-gold border-gold sm:hidden'>
                <DynamicIcon name='ArrowUp' />
              </button>
            </div>
            <div className='flex items-center gap-3'>
              <div>
                <p className='text-xs text-gold text-end'>username</p>
                <p className='text-sm font-semibold text-white text-end'>Full Name</p>
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

const SidenavMenuItem = ({ title, href = '/home', icon = 'RecordCircle' }: SidenavItem) => {
  return (
    <NavLink to={href}>
      {({ isActive }) => (
        <div
          className={cn(
            'flex relative items-center px-4 py-4 rounded-2xl group hover:bg-slate-primary',
            isActive && 'bg-slate-primary',
          )}
        >
          <DynamicIcon
            name={icon}
            variant={isActive ? 'Bold' : 'Outline'}
            className={`${isActive ? 'text-primary' : 'group-hover:text-primary'}`}
          />
          <span
            className={cn('font-semibold ms-3 group-hover:text-primary', {
              'text-primary': isActive,
            })}
          >
            {title}
          </span>

          <span
            className={cn(
              'absolute opacity-0 group-hover:opacity-100 right-0 w-2 h-8 rounded-s-4xl rounded-e-md bg-primary',
              {
                'opacity-100': isActive,
              },
            )}
          />
        </div>
      )}
    </NavLink>
  );
};

const SidenavSubmenu = ({ href, title, pathname, subMenuItems }: SidenavItem & { pathname: string }) => {
  // ** State
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleSidenavSubMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='space-y-1 rounded-2xl'>
      <button
        onClick={toggleSidenavSubMenu}
        className={cn(
          'w-full flex items-center leading-10 rounded-2xl group hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary-200',
          {
            'bg-primary text-white': href.includes('pathname'),
          },
        )}
      >
        <span className='font-semibold ms-3 group-hover:text-white'>{title}</span>

        <DynamicIcon
          name='ArrowUp'
          className={cn('w-6 h-6 group-hover:text-white ms-auto transition-transform duration-200', {
            'rotate-180': isOpen,
          })}
        />
      </button>
      <div
        ref={contentRef}
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : '0px',
        }}
        className={`overflow-hidden transition-max-height duration-500 ease-in-out`}
      >
        <ul>
          {subMenuItems?.map((nav, idx) => (
            <li key={idx + 1}>
              <NavLink to={nav.href}>
                {({ isActive }) => (
                  <div
                    className={cn(
                      'flex relative items-center px-4 py-4 rounded-2xl group hover:bg-slate-primary',
                      isActive && 'bg-slate-primary',
                    )}
                  >
                    <DynamicIcon
                      name={nav.icon}
                      variant={isActive ? 'Bold' : 'Outline'}
                      className={`${isActive ? 'text-primary' : 'group-hover:text-primary'}`}
                    />
                    <span
                      className={cn('font-semibold ms-3 group-hover:text-primary', {
                        'text-primary': isActive,
                      })}
                    >
                      {title}
                    </span>

                    <span
                      className={cn(
                        'absolute opacity-0 group-hover:opacity-100 right-0 w-2 h-8 rounded-s-4xl rounded-e-md bg-primary',
                        {
                          'opacity-100': isActive,
                        },
                      )}
                    />
                  </div>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
