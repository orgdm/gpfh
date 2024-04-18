import TextImageFull from '../layout/TextImageFull';
import type { EcoFriendlyProps } from '@/types/sustainability';

const EcoFriendly = ({ img, text }: EcoFriendlyProps) => {
  return (
    <div className='mb-[5em]'>
      <TextImageFull img={img} title={img.title} text={text} rtl={true} />
    </div>
  );
};

export default EcoFriendly;
