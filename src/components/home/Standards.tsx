import Heading from '../layout/Heading';
import Image from 'next/image';
import TextImage from '../layout/TextImage';
import { OurStandardsProps } from '@/types/home';

const Standards = ({ text, img }: OurStandardsProps) => {
  return (
    <div className='py-16 px-8'>
      <TextImage
        category='standards'
        text={text}
        img={img}
        title='How We Operate'
        rtl={false}
      />
    </div>
  );
};

export default Standards;
