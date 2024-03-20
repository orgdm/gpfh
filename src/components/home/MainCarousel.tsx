'use client';
import * as React from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';
import { CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

const imgs = [
  {
    title: 'test img 1',
    bg: 'https://ecomm-imgs-test.s3.amazonaws.com/ecomm-imgs-test/gpfh/gpfh_test_1.jpg',
  },
  {
    title: 'test img 2',
    bg: 'https://ecomm-imgs-test.s3.amazonaws.com/ecomm-imgs-test/gpfh/gpfh_test_2.jpg',
  },
  {
    title: 'test img 3',
    bg: 'https://ecomm-imgs-test.s3.amazonaws.com/ecomm-imgs-test/gpfh/gpfh_test_3.jpg',
  },
];

export function MainCarousel() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div>
      <Carousel
        opts={{ loop: true }}
        // plugins={[plugin.current]}
        setApi={setApi}
        className='w-full h-svh flex'
      >
        <CarouselContent className='h-full'>
          {imgs.map((img, index) => (
            <CarouselItem className='h-full w-full' key={index}>
              <CardContent className='flex p-0 justify-center h-full w-full'>
                <div className={`object-cover flex w-full h-full `}>
                  <img className='w-full' src={img.bg} alt={img.title} />
                </div>
              </CardContent>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className='absolute bottom-10 w-full z-10'>
          <div className='flex flex-col justify-center'>
            <Button
              className='mx-auto pointer-events-auto'
              variant={'landing'}
              size={'lg'}
              asChild
            >
              <Link className='max-w-[600px]' href={'/projects'}>
                view our work
              </Link>
            </Button>
            <div className='flex justify-center mt-14'>
              {Array.from({ length: count }).map((i, index) => (
                <span
                  key={index}
                  onClick={() => api && api.scrollTo(index)}
                  className={`inline-block rounded-full border h-3 w-3 border-white mx-2 ${
                    index + 1 === current ? 'bg-white' : 'bg-stone-200/20'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </Carousel>
      <div className='py-2 text-center text-sm text-muted-foreground'>
        Slide {current} of {count}
      </div>
    </div>
  );
}

export default MainCarousel;
