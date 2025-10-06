import { Breadcrumb } from '@/components/Breadcrumb';
import { DynamicIcon } from '@/components/DynamicIcon';
import { formatThousandNumber } from '@/utils/utils';
import { useSearchParams } from 'react-router-dom';

const ProductListPage = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category') || '';

  return (
    <main className='px-5 app-container'>
      <section className='items-center py-14 row gap-y-3'>
        <Breadcrumb items={[{ label: 'Homepage', href: '/home' }, { label: category }]} />
        <h1>
          Explore based on <span className='capitalize'>{category}</span> Category
        </h1>
        <div>
          <div>
            <DynamicIcon name='Box' />
            <span>{formatThousandNumber(1294)} Total Products</span>
          </div>
          <div>
            <DynamicIcon name='Verify' />
            <span>Authenticity Guaranteed</span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductListPage;
