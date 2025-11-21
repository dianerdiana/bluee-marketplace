import { useState } from 'react';
import parse from 'html-react-parser';

type ProductAboutProps = { description: string };

export default function ProductAbout({ description }: ProductAboutProps) {
  const [lessDescription, setLessDescription] = useState(true);

  const toggleExpandDescription = () => setLessDescription((prev) => !prev);

  return (
    <section>
      <h3 className='mb-3 font-bold'>Product About</h3>
      <div
        className={`product__description text-justify text-muted-foreground font-medium ${
          lessDescription ? 'line-clamp-6' : ''
        }`}
      >
        {parse(description)}
      </div>
      <span onClick={toggleExpandDescription} className='font-semibold cursor-pointer text-primary'>
        {lessDescription ? 'Read More' : 'Show Less'}
      </span>
    </section>
  );
}
