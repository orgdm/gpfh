'use client';
import Image from 'next/image';
import Heading from './Heading';
import { Button } from '../ui/button';
import Link from 'next/link';
import { CaretRightIcon } from '@radix-ui/react-icons';
import { TextImageLinkProps } from '@/types/layout';
import { useInView } from 'react-intersection-observer';

const TextImageLink = ({
  img,
  text,
  rtl,
  title,
  link,
  linkText,
}: TextImageLinkProps) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <div
      className={`max-w-[1400px] mx-auto ease-up ${
        inView ? 'translate-y-0 opacity-100' : 'translate-y-[12%] opacity-0'
      }`}
      ref={ref}
    >
      <div
        className={`flex max-lg:flex-wrap items-center justify-between ${
          rtl ? 'lg:flex-row' : 'lg:flex-row-reverse'
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
          className={`h-full lg:w-4/5 flex ${
            rtl ? 'lg:justify-end' : 'lg:justify-start'
          }`}
        >
          <div className='lg:w-[90%]'>
            <Heading title={title} size='ti' />
            <p className='font-light py-1 text-[1rem] md:text-[1.125rem] xl:text-[1.375rem] lg:leading-relaxed leading-normal w-full'>
              {text}
            </p>
            <div className='mt-8 flex items-end '>
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

export default TextImageLink;
