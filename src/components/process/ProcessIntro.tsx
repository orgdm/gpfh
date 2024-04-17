import { ProcessProps } from '@/types/process';
import TextImage from '../layout/TextImage';

const ProcessIntro = ({ text, imgs }: ProcessProps) => {
  return (
    <div className='px-8'>
      <TextImage text={text.p1} img={imgs[0]} rtl={true} />
      <TextImage text={text.p2} img={imgs[0]} rtl={false} />
      <TextImage text={text.p3} img={imgs[0]} rtl={true} />
    </div>
  );
};

export default ProcessIntro;
