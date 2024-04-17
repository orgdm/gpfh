'use client';
import { useState, useEffect, useRef } from 'react';
import type { IntroCarouselProps } from '@/types/home';
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

const MainCarousel = ({ imgs }: IntroCarouselProps) => {
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
    <div className='relative'>
      <Carousel
        opts={{ loop: true }}
        plugins={[plugin.current]}
        setApi={setApi}
      >
        <CarouselContent className='h-screen'>
          {imgs.map((img, index) => (
            <CarouselItem className='p-0 h-full' key={index}>
              <div className={`relative h-full overflow-hidden`}>
                <Image
                  className='object-cover'
                  fill
                  priority={true}
                  src={img.url}
                  alt={img.alt}
                  placeholder='data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='
                  sizes='100vw'
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className={`absolute bottom-8 w-full z-10`}>
        <div className='flex flex-col justify-center'>
          <Button
            className='mx-auto pointer-events-auto bg-[rgba(100,100,100,0.5)] backdrop-blur-sm '
            variant={'outlineSec'}
            size={'landing'}
            asChild
          >
            <Link
              href={'/projects'}
              className='max-w-[600px] flex flex-row justify-between'
            >
              <span className='me-6 font-normal text-main'>View Projects</span>
              <CaretRightIcon height={30} width={30} />
            </Link>
          </Button>
          <div className='flex justify-center mt-12'>
            {Array.from({ length: imgs.length }).map((i, index) => (
              <span
                key={index}
                onClick={() => api && api.scrollTo(index)}
                className={`inline-block cursor-pointer rounded-full h-3 w-3 mx-2 border border-white ${
                  index + 1 === current
                    ? 'bg-white '
                    : 'bg-[rgba(100,100,100,0.5)]'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCarousel;
