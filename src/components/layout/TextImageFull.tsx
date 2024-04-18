'use client';
import Image from 'next/image';
import Heading from './Heading';
import { TextImageProps } from '@/types/layout';

const TextImageFull = ({ img, text, rtl, title }: TextImageProps) => {
  return (
    <div>
      <div
        className={`flex max-lg:flex-wrap items-center justify-between ${
          rtl ? 'lg:flex-row' : 'lg:flex-row-reverse'
        } h-full w-full`}
      >
        <div className='basis-full relative'>
          <div className='relative overflow-hidden aspect-square'>
            <Image
              src={img.url}
              alt={img.alt}
              fill
              sizes='100vw, (min-width: 1024px) 50vw, (min-width: 1280px) 1080px'
              placeholder='data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='
              className=' object-cover'
            />
          </div>
        </div>
        <div
          className={`h-full lg:w-4/5 flex ${
            rtl ? 'lg:justify-end' : 'lg:justify-start'
          }`}
        >
          <div className='lg:w-[90%] px-4 py-2'>
            <Heading title={title} size='ti' />
            <p className='font-light py-1 text-[1rem] md:text-[1.125rem] xl:text-[1.375rem] lg:leading-relaxed leading-normal w-full'>
              {text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextImageFull;
