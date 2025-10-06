// components/Breadcrumb.tsx
import { Link } from 'react-router-dom';
import { DynamicIcon } from '@/components/DynamicIcon';

type BreadcrumbItem = {
  label: string;
  href?: string; // kalau tidak ada href, berarti active
};

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav aria-label='breadcrumb' className='flex items-center space-x-1 text-sm'>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <div key={index} className='flex items-center'>
            {!isLast && item.href ? (
              <Link to={item.href} className='text-gray-600 transition-colors hover:text-primary'>
                {item.label}
              </Link>
            ) : (
              <span className='font-medium text-gray-900'>{item.label}</span>
            )}
            {!isLast && (
              <span className='mx-1'>
                <DynamicIcon name='ArrowRight2' />
              </span>
            )}
          </div>
        );
      })}
    </nav>
  );
};
