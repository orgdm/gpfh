import Heading from '../layout/Heading';
import { CommitmentProps } from '@/types/sustainability';

const Commitment = ({ text, title }: CommitmentProps) => {
  return (
    <div className='py-24 px-8'>
      <Heading title={title} />
      <p>{text}</p>
    </div>
  );
};

export default Commitment;
