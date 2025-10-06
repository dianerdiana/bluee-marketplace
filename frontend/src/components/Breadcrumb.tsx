// components/Breadcrumb.tsx
import { Link } from 'react-router-dom';

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
              <Link to={item.href} className='text-lg transition-colors text-secondary hover:text-primary'>
                {item.label}
              </Link>
            ) : (
              <span className='text-lg font-semibold capitalize text-dark'>{item.label}</span>
            )}
            {!isLast && <span className='mx-3'>/</span>}
          </div>
        );
      })}
    </nav>
  );
};
