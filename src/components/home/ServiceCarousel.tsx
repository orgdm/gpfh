'use client';
import { useState, useEffect, useCallback } from 'react';
import Heading from '../layout/Heading';
import type { ServiceCarouselProps } from '@/types/home';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';
import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons';
import { Button } from '@/components/ui/button';

import Image from 'next/image';

const ServiceCarousel = ({ services }: ServiceCarouselProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [prevDisabled, setPrevDisabled] = useState<boolean>(true);
  const [nextDisabled, setNextDisabled] = useState<boolean>(true);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const onPrevClick = useCallback(() => {
    if (!api) return;
    api.scrollPrev();
  }, [api]);

  const onNextClick = useCallback(() => {
    if (!api) return;
    api.scrollNext();
  }, [api]);

  const onSelect = useCallback((emblaApi: CarouselApi) => {
    setPrevDisabled(!emblaApi?.canScrollPrev());
    setNextDisabled(!emblaApi?.canScrollNext());
  }, []);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });

    onSelect(api);
    api.on('reInit', onSelect);
    api.on('select', onSelect);
  }, [api, onSelect]);

  return (
    <>
      <div className='px-8 relative'>
        <Heading title='Services' />
        <div className='relative'>
          <Carousel
            setApi={setApi}
            opts={{
              align: 'start',
              slidesToScroll: 'auto',
              watchSlides: false,
            }}
          >
            <CarouselContent>
              {services.map((service, index) => (
                <CarouselItem
                  key={index}
                  className='sm:basis-1/2 lg:basis-1/3 rounded-smd'
                >
                  <div
                    className={`relative h-full aspect-square overflow-hidden rounded-smd before:absolute before:h-full before:bottom-0 before:w-full before:content-[''] before:z-[1] before:bg-img-overlay  before:rounded-smd  before:pointer-events-none`}
                  >
                    <Image
                      src={service.img.url}
                      alt={service.img.alt}
                      fill
                      sizes='640px, (min-width: 1920px) 1080px, (min-width: 3000px) 1920px'
                      placeholder='data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='
                      className={`rounded-smd object-cover bg-origin-border `}
                    />
                    <div className='h-full flex items-end w-full rounded-smd absolute z-[2]'>
                      <h3 className={` mt-auto uppercase ps-4 pb-7`}>
                        <span className=' tracking-tight line-clamp-1 2xs:text-main xs:text-lg sm:text-xl'>
                          {service.img.title}
                        </span>
                      </h3>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <Button
            className='rounded-full disabled:opacity-0 will-change-[opacity] transition-opacity duration-200  ease-linear absolute -left-2 top-1/3'
            disabled={prevDisabled}
            onClick={onPrevClick}
            variant={'default'}
            size={'icon'}
          >
            <ArrowLeftIcon className='scale-150 ' />
            <span className='sr-only'>Previous slide</span>
          </Button>{' '}
          <Button
            className='rounded-full disabled:opacity-0 will-change-[opacity] transition-opacity duration-200  ease-linear absolute -right-2 top-1/3 '
            disabled={nextDisabled}
            onClick={onNextClick}
            variant={'default'}
            size={'icon'}
          >
            <ArrowRightIcon className='scale-150' />
            <span className='sr-only'>Next slide</span>
          </Button>
        </div>
      </div>
    </>
  );
};

export default ServiceCarousel;
