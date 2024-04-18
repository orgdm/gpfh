import Image from 'next/image';
import type { IntroProps } from '@/types/sustainability';

const SusIntro = ({ text, img }: IntroProps) => {
  return (
    <div className='relative before:absolute before:w-full before:h-full before:z-[1] before:bg-img-overlay overflow-hidden h-[47vh]'>
      <Image
        src={img.url}
        fill
        alt={img.alt}
        className='h-auto w-full object-cover'
      />
      <div className='absolute bottom-5 px-4 sm:px-6 py-2 md:px-8 z-[2]'>
        <h1 className='my-[0.4em] text-4xl font-light md:text-5xl font-archivo tracking-wide xl:text-6xl '>
          {img.title}
        </h1>
        <div>
          <p className='font-extralight text-[1rem] md:text-[1.125rem] xl:text-[1.25rem] tracking-wide sm:px-1'>
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SusIntro;
