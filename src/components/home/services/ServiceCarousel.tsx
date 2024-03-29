'use client';
import { useState, useEffect, useCallback } from 'react';
import type { ServiceProps } from '@/types/services';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';
import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons';
import { Button } from '@/components/ui/button';

import Image from 'next/image';

const services: ServiceProps[] = [
  {
    title: 'Luxury Home Design',
    img: '/gpfh_test_3.jpg',
    desc: 'Grove Park Fine Homes builds luxury homes in the Asheville, North Carolina area. We relentlessly pursue perfection in every aspect of our custom home design and construction, never compromising on quality and service',
    id: 1,
  },
  {
    title: 'Custom Renovations',
    img: '/gpfh_test_3.jpg',
    desc: 'Specializing in environmentally friendly homes and building practices, we always approach your project with a goal of minimal environmental impact. Our custom projects are incorporated into the natural North Carolina landscape in areas like Balsam Mountain Preserve, Biltmore Forest, Laurel Ridge Country Club, Kenmure Country Club, Lake Lure and private Equestrian Estates. Grove Park Fine Homes strives to preserve our environment, both locally and globally',
    id: 2,
  },
  {
    title: 'Premium Home Construction',
    img: '/gpfh_test_3.jpg',
    desc: 'Specializing in environmentally friendly homes and building practices, we always approach your project with a goal of minimal environmental impact. Our custom projects are incorporated into the natural North Carolina landscape in areas like Balsam Mountain Preserve, Biltmore Forest, Laurel Ridge Country Club, Kenmure Country Club, Lake Lure and private Equestrian Estates. Grove Park Fine Homes strives to preserve our environment, both locally and globally',
    id: 3,
  },
  {
    title: 'Construction Management',
    img: '/gpfh_test_3.jpg',
    desc: 'Specializing in environmentally friendly homes and building practices, we always approach your project with a goal of minimal environmental impact. Our custom projects are incorporated into the natural North Carolina landscape in areas like Balsam Mountain Preserve, Biltmore Forest, Laurel Ridge Country Club, Kenmure Country Club, Lake Lure and private Equestrian Estates. Grove Park Fine Homes strives to preserve our environment, both locally and globally',
    id: 4,
  },
  {
    title: 'Green Homes',
    img: '/gpfh_test_3.jpg',
    desc: 'Specializing in environmentally friendly homes and building practices, we always approach your project with a goal of minimal environmental impact. Our custom projects are incorporated into the natural North Carolina landscape in areas like Balsam Mountain Preserve, Biltmore Forest, Laurel Ridge Country Club, Kenmure Country Club, Lake Lure and private Equestrian Estates. Grove Park Fine Homes strives to preserve our environment, both locally and globally',
    id: 5,
  },
];

const ServiceCarousel = () => {
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
    <section>
      <div className='px-8 relative'>
        <div className='flex w-full my-3 flex-row flex-wrap justify-between items-center'>
          <h2 className='text-4xl md:text-5xl xl:text-6xl leading-6 md:leading-7 capitalize my-[0.8em] '>
            Services
          </h2>
        </div>
        <div className='relative'>
          <Carousel
            setApi={setApi}
            opts={{ align: 'start', slidesToScroll: 'auto' }}
          >
            <CarouselContent>
              {services.map((service) => (
                <CarouselItem
                  key={service.id}
                  className='sm:basis-1/2 md:basis-1/3 aspect-square'
                >
                  <div
                    className={`relative h-full rounded-sm before:absolute before:h-full before:bottom-0 before:w-full before:content-[''] before:z-[1] before:bg-img-overlay  before:pointer-events-none`}
                  >
                    <Image
                      src={service.img}
                      alt={service.title}
                      fill
                      placeholder='blur'
                      blurDataURL='data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='
                      className={`overflow-hidden rounded-md will-change-[opacity] object-cover transition-opacity duration-500 origin-center bg-origin-border `}
                    />
                    <div className='h-full flex items-end w-full absolute z-[2]'>
                      <h3 className={`text-xl mt-auto uppercase ps-4 pb-9`}>
                        {service.title}
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
          </Button>{' '}
          <Button
            className='rounded-full disabled:opacity-0 will-change-[opacity] transition-opacity duration-200  ease-linear absolute -right-2 top-1/3 '
            disabled={nextDisabled}
            onClick={onNextClick}
            variant={'default'}
            size={'icon'}
          >
            <ArrowRightIcon className='scale-150' />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServiceCarousel;
