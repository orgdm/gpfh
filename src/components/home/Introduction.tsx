import { Button } from '../ui/button';
import Link from 'next/link';
import { CaretRightIcon } from '@radix-ui/react-icons';

const Introduction = () => {
  return (
    <div className='px-6 max-w-[624px] xl:max-w-[1200px] mx-auto  pt-12 pb-8'>
      <div className='flex flex-col xl:flex-row gap-x-10 h-full'>
        <div className='flex-grow-0 flex-shrink-1 flex flex-col basis-full'>
          <h2 className='text-dmd font-medium  leading-6 uppercase  max-xl:mb-8 xl:h-min lg:text-3xl'>
            Who We Are
          </h2>
          <p className='leading-9 lg:text-lg tracking-wide h-full lg:leading-9 lg:flex xl:items-end'>
            Grove Park Fine Homes builds luxury homes in the Asheville, North
            Carolina area. We relentlessly pursue perfection in every aspect of
            our custom home design and construction, never compromising on
            quality and service.
          </p>
          <div className='mt-6 flex items-end '>
            <Button asChild variant={'outline'} size={'intro'}>
              <Link href={'/about'} className='flex flex-row justify-between'>
                <span className='me-4 font-medium text-lg'>About us</span>
                <CaretRightIcon width={24} height={24} viewBox='0 0 14 14' />
              </Link>
            </Button>
          </div>
        </div>
        <div className='mt-8 flex-grow-1 flex-shrink-0 min-w-[300px] flex items-end'>
          <picture>
            <img
              src={
                'https://ecomm-imgs-test.s3.amazonaws.com/ecomm-imgs-test/gpfh/gpfh1.jpg'
              }
              alt='positivity'
            />
          </picture>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
