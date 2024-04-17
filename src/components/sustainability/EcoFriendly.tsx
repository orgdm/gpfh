import type { EcoFriendlyProps } from '@/types/sustainability';
import TextImage from '../layout/TextImage';

const EcoFriendly = ({ text, img }: EcoFriendlyProps) => {
  return (
    <div className='px-8 py-24'>
      <TextImage text={text} title={img.title} img={img} rtl={false} />
    </div>
  );
};

export default EcoFriendly;
