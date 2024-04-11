'use client';
import type { WhoProps } from '@/types/home';
import { Button } from '../ui/button';
import Link from 'next/link';
import Image from 'next/image';
import Heading from '../layout/Heading';
import { CaretRightIcon } from '@radix-ui/react-icons';
import { useInView } from 'react-intersection-observer';

const Introduction = ({ text, imgs }: WhoProps) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <div className='px-8 mx-auto lg:mx-auto xl:max-w-[1400px] py-16'>
      <div
        ref={ref}
        className={`flex flex-row max-lg:flex-wrap gap-x-10 h-full ease-up  ${
          inView ? 'translate-y-0 opacity-100' : 'translate-y-[12%] opacity-0'
        }`}
      >
        <div className='basis-full lg:basis-[55%] xl:basis-[60%] flex-shrink-0 flex-grow-0 w-full h-full'>
          <div>
            <picture className='w-full h-full'>
              <div className='relative rounded-smd overflow-hidden aspect-[3/2]'>
                <Image
                  src={imgs[0].url}
                  fill
                  className={`object-fill rounded-smd`}
                  alt={imgs[0].alt}
                  sizes='100vw, (min-width: 1024px) 50vw, (min-width: 1280px) 1080px'
                  placeholder='data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='
                />
              </div>
            </picture>
          </div>
        </div>
        <div className='block basis-auto flex-shrink-1 flex-grow-0'>
          <Heading title='Who We Are' />
          <div>
            <p className='font-light my-[1em] xl:text-xl leading-7 md:leading-8 lg:leading-9 xl:leading-10'>
              {text}
            </p>
          </div>
          <div className='mt-6 flex items-end '>
            <Button asChild variant={'outline'} size={'intro'}>
              <Link href={'/about'} className='flex flex-row justify-between'>
                <span className='me-4 font-medium text-lg'>About us</span>
                <CaretRightIcon width={24} height={24} viewBox='0 0 14 14' />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
