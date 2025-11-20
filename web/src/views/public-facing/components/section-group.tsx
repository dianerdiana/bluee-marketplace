import { Container } from '@/components/container';
import { Iconsax } from '@/components/iconsax';
import { Button } from '@/components/ui/button';

type SectionGroupProps = {
  title: string;
  url: string;
  children: React.ReactElement;
};

export default function SectionGroup({ title, children }: SectionGroupProps) {
  return (
    <Container>
      <section>
        <div className='flex items-center justify-between pt-16 mb-9'>
          <h1 className='mb-3 text-3xl font-extrabold wrap-wrap-break-words lg:flex-col-4 flex-col-12 lg:mb-0 text-dark'>
            {title}
          </h1>
          <Button className='flex rounded-md'>
            <span className='me-2.5'>View All</span> <Iconsax name='ArrowRight' />
          </Button>
        </div>
        {children}
      </section>
    </Container>
  );
}
