import type { WhoProps } from '@/types/home';
import TextImageLink from '../layout/TextImageLink';

const Introduction = ({ text, imgs }: WhoProps) => {
  return (
    <div className='px-6 mx-auto py-8 lg:py-24'>
      <TextImageLink
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
