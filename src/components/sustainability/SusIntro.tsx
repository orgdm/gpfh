import Image from 'next/image';
import type { IntroProps } from '@/types/sustainability';

const SusIntro = ({ text, img }: IntroProps) => {
  return (
    <div className='relative before:absolute before:w-full before:h-full before:z-[1] before:bg-img-overlay overflow-hidden h-[calc((47*1vh)+2rem)]'>
      <Image
        src={img.url}
        fill
        priority={true}
        alt={img.alt}
        className='w-full object-cover'
        placeholder='data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='
        sizes='100vw'
      />
      <div className='h-full flex flex-col relative justify-end px-4 sm:px-6 py-8 md:px-8 z-[2]'>
        <h1 className='my-[0.32em] text-4xl font-light md:text-5xl font-archivo tracking-wide xl:text-6xl '>
          {img.title}
        </h1>
        <div className='pb-2'>
          <p className='font-extralight text-[1rem] md:text-[1.125rem] xl:text-[1.25rem] tracking-wide sm:px-1'>
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SusIntro;
