import { Section } from '@/types/about';
import Heading from '../layout/Heading';
import Image from 'next/image';

const Fragment = ({ img, text, title }: Section) => {
  return (
    <div>
      <Heading title={title} />
      <div className='relative overflow-hidden aspect-[2/3]'>
        <Image
          src={img.url}
          alt={img.alt}
          width={200}
          height={300}
          className='object-cover'
        />
      </div>
      <div>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Fragment;
