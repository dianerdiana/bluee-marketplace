import { Breadcrumb } from '@/components/Breadcrumb';
import { useSearchParams } from 'react-router-dom';

const ProductSearchPage = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category') || '';

  return (
    <main>
      <section>
        <Breadcrumb items={[{ label: 'Homepage', href: '/home' }, { label: category }]} />
      </section>
    </main>
  );
};

export default ProductSearchPage;
