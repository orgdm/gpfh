import type { PeopleProps } from '@/types/people';
import Image from 'next/image';

const Person = ({ imgs, text }: PeopleProps) => {
  return (
    <div>
      <div className='flex flex-row'>
        <div className='relative overflow-hidden aspect-[2/3] basis-full'>
          <Image
            src={imgs[0].url}
            alt={imgs[0].url}
            width={200}
            height={300}
            className='object-contain'
          />
        </div>
        <p className='w-[95%]'>{text.p1}</p>
      </div>
      <div>
        <p className='my-4'>{text.p2}</p>
        <p>{text.p3}</p>
      </div>
    </div>
  );
};

export default Person;
