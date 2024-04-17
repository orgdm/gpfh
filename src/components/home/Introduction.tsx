import type { WhoProps } from '@/types/home';
import TextImage from '../layout/TextImage';

const Introduction = ({ text, imgs }: WhoProps) => {
  return (
    <div className='px-8 mx-auto py-10 md:py-24'>
      <TextImage
        text={text}
        title='Who We Are'
        img={imgs[0]}
        link='/about'
        linkText='About Us'
        rtl={true}
      />
    </div>
  );
};

export default Introduction;
