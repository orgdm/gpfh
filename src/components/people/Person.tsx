import type { PeopleProps } from '@/types/people';
import Image from 'next/image';

const Person = ({ imgs, text }: PeopleProps) => {
  return (
    <div>
      <div className='relative overflow-hidden aspect-[2/3]'>
        <Image
          src={imgs[0].url}
          alt={imgs[0].url}
          width={200}
          height={300}
          className='object-contain'
        />
      </div>
      <div>
        <p>{text.p1}</p>
        <p>{text.p2}</p>
        <p>{text.p3}</p>
      </div>
    </div>
  );
};

export default Person;
