import { CommitmentProps } from '@/types/sustainability';
import Image from 'next/image';

const Commitment = ({ text, title, img }: CommitmentProps) => {
  return (
    <div className=''>
      <div className='flex flex-row max-lg:flex-wrap'>
        <div className='py-10 px-4 sm:px-6 md:px-8 flex-srhink-0 flex-grow-1 lg:w-[90%] lg:me-6'>
          <h3 className='text-[1.625rem] md:text-[1.75rem] lg:text-[1.875rem] font-bold font-archivo leading-[1.875rem] md:leading-[2.0625rem] lg:leading-[2.25rem] mb-[0.42em]'>
            {title.upper}
            <br />
            {title.lower}
          </h3>
          <p className='font-normal text-base md:text-lg lg:w-[90%]'>{text}</p>
        </div>
        <div className='relative basis-full hidden lg:block lg:flex-grow-0 lg:flex-shrink-1 overflow-clip'>
          <Image
            src={img.url}
            alt={img.alt}
            fill
            placeholder='data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='
            sizes='640px, (min-width: 1400) 820px'
            className='object-cover'
          />
        </div>
      </div>
    </div>
  );
};

export default Commitment;
