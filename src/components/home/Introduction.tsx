'use client';
import { Button } from '../ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { CaretRightIcon } from '@radix-ui/react-icons';
import { useInView } from 'react-intersection-observer';

const Introduction = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div className='px-8 mx-auto lg:mx-auto xl:max-w-[1160px] py-14'>
      <div ref={ref} className='flex flex-row max-lg:flex-wrap gap-x-10 h-full'>
        <div className='basis-full lg:basis-[60%] flex-shrink-0 flex-grow-0 w-full h-full'>
          <div>
            <picture className='w-full h-full'>
              <div className='relative object-contain rounded-sm aspect-[9/5]'>
                <Image
                  src={'/gpfh1.jpg'}
                  fill
                  className={`overflow-hidden rounded-sm transition-[transform,opacity] duration-300 ease  ${
                    inView
                      ? ' transform-y-0 ease opacity-100'
                      : ' translate-y-[5%] opacity-0'
                  }`}
                  alt='sample of work'
                  // placeholder='blur'
                  // blurDataURL='data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='
                />
              </div>
            </picture>
          </div>
        </div>
        <div className='block basis-auto flex-shrink-1 flex-grow-0'>
          <div
            className={`my-[0.9em] transition-opacity will-change-[opacity] duration-300 ${
              inView ? ' opacity-100' : ' opacity-0'
            }`}
          >
            <h2 className='text-4xl md:text-5xl xl:text-6xl leading-6 md:leading-7 capitalize my-[0.8em] '>
              Who We Are
            </h2>
          </div>
          <div
            className={`will-change-[opacity] transition-all delay-200 ease ${
              inView
                ? ' translate-y-0 opacity-100 ease duration-500'
                : ' translate-y-16 opacity-0'
            }`}
          >
            <p className='font-light my-[1em] md:text-lg leading-7 md:leading-8 lg:leading-9'>
              Grove Park Fine Homes builds luxury homes in the Asheville, North
              Carolina area. We relentlessly pursue perfection in every aspect
              of our custom home design and construction, never compromising on
              quality and service.
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
