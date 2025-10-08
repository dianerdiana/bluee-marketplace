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

const VerticalLayout = memo(() => {
  const [open, setOpen] = useState(true);
  const toggleSideNav = () => setOpen((prev) => !prev);

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
              className={cn('text-gray-400 group-hover:text-primary', isActive && 'text-primary')}
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
                <DynamicIcon name='ArrowCircleDown' size={16} />
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
