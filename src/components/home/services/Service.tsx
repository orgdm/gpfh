'use client';
import type { ServiceProps } from '@/types/services';
import { useInView } from 'react-intersection-observer';

const Service = ({ img, title, desc, reverse }: ServiceProps) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className='shadow-md'>
      <div className={`relative object-contain aspect-video h-auto`}>
        <img
          src={img}
          alt={title}
          className={`absolute w-full aspect-[3/2] h-full rounded-lg transition-opacity duration-700 ease-linear ${
            inView ? 'opacity-100' : 'opacity-0'
          }`}
          loading='lazy'
        />
        <div className='h-full w-full flex items-end'>
          <h3
            className={`text-xl uppercase ps-4 pb-9 relative row-start-4 row-end-8 ${
              reverse ? 'col-start-9 col-end-12' : 'col-start-1 col-end-4'
            }`}
          >
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Service;
