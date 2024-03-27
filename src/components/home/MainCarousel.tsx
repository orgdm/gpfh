'use client';
import { useState, useEffect, useRef } from 'react';

import { Button } from '../ui/button';
import Link from 'next/link';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { CaretRightIcon } from '@radix-ui/react-icons';

const imgs = [
  {
    title: 'test img 1',
    bg: '/gpfh1.jpg',
  },
  {
    title: 'test img 2',
    bg: '/gpfh_test_2.jpg',
  },
  {
    title: 'test img 3',
    bg: '/gpfh_test_3.jpg',
  },
];

export function MainCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const plugin = useRef(Autoplay({ delay: 4444, stopOnInteraction: false }));

  useEffect(() => {
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
    <>
      <Carousel
        opts={{ loop: true }}
        plugins={[plugin.current]}
        setApi={setApi}
      >
        <CarouselContent>
          {imgs.map((img, index) => (
            <CarouselItem key={index}>
              <div className={`relative h-svh`}>
                <Image
                  className='object-cover object-center overflow-hidden'
                  fill
                  src={img.bg}
                  alt={img.title}
                  priority
                  placeholder='blur'
                  blurDataURL='data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div
          className={`absolute bottom-7 w-full z-10 transition-opacity ${
            api ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className='flex flex-col justify-center'>
            <Button
              className='mx-auto pointer-events-auto'
              variant={'landing'}
              size={'landing'}
              asChild
            >
              <Link
                href={'/projects'}
                className='max-w-[600px] flex flex-row justify-between'
              >
                <span className='me-6 font-medium text-main'>
                  View Projects
                </span>
                <CaretRightIcon width={30} height={30} />
              </Link>
            </Button>
            <div className='flex justify-center mt-12'>
              {Array.from({ length: count }).map((i, index) => (
                <span
                  key={index}
                  onClick={() => api && api.scrollTo(index)}
                  className={`inline-block rounded-full border h-3 w-3 outline-white mx-2 ${
                    index + 1 === current ? 'bg-white' : 'bg-stone-100/10'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </Carousel>
    </>
  );
}

export default MainCarousel;
