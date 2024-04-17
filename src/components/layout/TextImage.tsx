'use client';
import Image from 'next/image';
import Heading from './Heading';
import { Button } from '../ui/button';
import Link from 'next/link';
import { CaretRightIcon } from '@radix-ui/react-icons';
import { TextImageProps } from '@/types/layout';
import { useInView } from 'react-intersection-observer';

const TextImage = ({
  img,
  text,
  rtl,
  title,
  link,
  linkText,
}: TextImageProps) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <div
      className={`max-w-[1180px] mx-auto ease-up ${
        inView ? 'translate-y-0 opacity-100' : 'translate-y-[12%] opacity-0'
      }`}
      ref={ref}
    >
      <div
        className={`flex max-md:flex-wrap items-center justify-between ${
          rtl ? 'md:flex-row' : 'md:flex-row-reverse'
        } h-full w-full`}
      >
        <div className='basis-full relative'>
          <div className='relative overflow-hidden aspect-[3/2] max-h-[30%]'>
            <Image
              src={img.url}
              alt={img.alt}
              fill
              sizes='100vw, (min-width: 1024px) 50vw, (min-width: 1280px) 1080px'
              placeholder='data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='
              className='rounded-sm object-cover'
            />
          </div>
        </div>
        <div
          className={`h-full md:w-4/5 flex ${
            rtl ? 'md:justify-end' : 'md:justify-start'
          }`}
        >
          <div className='md:w-[90%]'>
            <Heading title={title} size='ti' />
            <p className='font-light py-1 text-ti leading-7 md:leading-6 2md:leading-7 xl:text-xl xl:leading-[1.9] lg:leading-[1.9] w-full'>
              {text}
            </p>
            <div className='mt-4 xl:mt-8 flex items-end '>
              <Button asChild variant={'outline'} size={'intro'}>
                <Link href={link} className='flex flex-row justify-between'>
                  <span className='me-4 font-normal tracking-wide text-lg'>
                    {linkText}
                  </span>
                  <CaretRightIcon width={24} height={24} viewBox='0 0 14 14' />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextImage;
