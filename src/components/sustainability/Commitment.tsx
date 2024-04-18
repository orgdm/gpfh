import { CommitmentProps } from '@/types/sustainability';
import Image from 'next/image';

const Commitment = ({ text, title, img }: CommitmentProps) => {
  return (
    <div className=''>
      <div className='grid grid-cols-12 grid-rows-12'>
        <div className='py-10 px-4 sm:px-6 md:px-8 row-start-1 col-start-1 row-span-12 col-span-12 lg:row-span-12 lg:col-span-6 '>
          <h3 className='text-[1.625rem] md:text-[1.75rem] lg:text-[1.875rem] font-bold font-archivo leading-[1.875rem] md:leading-[2.0625rem] lg:leading-[2.25rem] mb-[0.42em]'>
            {title.upper}
            <br />
            {title.lower}
          </h3>
          <p className='font-normal text-base md:text-lg'>{text}</p>
        </div>
        <div className='relative basis-full hidden lg:block lg:row-start-1 lg:row-span-12 lg:col-start-7 lg:col-end-13  aspect-[2/3] overflow-hidden'>
          <Image
            src={img.url}
            alt={img.alt}
            fill
            placeholder='data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='
            sizes='640px, (min-width: 1400) 820px'
            className='object-fill'
          />
        </div>
      </div>
    </div>
  );
};

export default Commitment;
