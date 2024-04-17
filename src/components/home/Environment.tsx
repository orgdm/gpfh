import type { EnvironmentProps } from '@/types/home';
import TextImageLink from '../layout/TextImageLink';

const Environment = ({ items }: EnvironmentProps) => {
  return (
    <div className='px-6 py-12 lg:py-24'>
      <div className='mb-[4em]'>
        <TextImageLink
          link='/sustainability'
          linkText='Sustainability'
          title='Green Approach'
          text={items[1].text}
          img={items[1].img}
          rtl={false}
        />
      </div>
    </div>
  );
};

export default Environment;
