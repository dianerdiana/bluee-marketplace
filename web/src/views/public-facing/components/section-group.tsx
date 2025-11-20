import { Container } from '@/components/container';
import { Iconsax } from '@/components/iconsax';
import { Button } from '@/components/ui/button';

type SectionGroupProps = {
  title: string;
  href?: string;
  children: React.ReactElement;
};

export default function SectionGroup({ title, children, href }: SectionGroupProps) {
  return (
    <Container>
      <section>
        <div className='flex items-center justify-between pt-16 mb-9'>
          <h1 className='mb-3 text-3xl font-extrabold wrap-wrap-break-words lg:flex-col-4 flex-col-12 lg:mb-0 text-dark'>
            {title}
          </h1>
          {href ? (
            <Button className='flex rounded-md'>
              <span className='me-2.5'>View All</span> <Iconsax name='ArrowRight' />
            </Button>
          ) : null}
        </div>
        {children}
      </section>
    </Container>
  );
}
