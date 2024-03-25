import type { ServiceProps } from '@/types/services';
import Service from './Service';

const services: ServiceProps[] = [
  {
    title: 'Luxury Home Design',
    img: 'https://ecomm-imgs-test.s3.amazonaws.com/ecomm-imgs-test/gpfh/gpfh_test_3.jpg',
    desc: 'Grove Park Fine Homes builds luxury homes in the Asheville, North Carolina area. We relentlessly pursue perfection in every aspect of our custom home design and construction, never compromising on quality and service',
    reverse: false,
  },
  {
    title: 'Custom Renovations',
    img: 'https://ecomm-imgs-test.s3.amazonaws.com/ecomm-imgs-test/gpfh/gpfh_test_3.jpg',
    desc: 'Specializing in environmentally friendly homes and building practices, we always approach your project with a goal of minimal environmental impact. Our custom projects are incorporated into the natural North Carolina landscape in areas like Balsam Mountain Preserve, Biltmore Forest, Laurel Ridge Country Club, Kenmure Country Club, Lake Lure and private Equestrian Estates. Grove Park Fine Homes strives to preserve our environment, both locally and globally',
    reverse: true,
  },
  {
    title: 'Premium Home Construction',
    img: 'https://ecomm-imgs-test.s3.amazonaws.com/ecomm-imgs-test/gpfh/gpfh_test_3.jpg',
    desc: 'Specializing in environmentally friendly homes and building practices, we always approach your project with a goal of minimal environmental impact. Our custom projects are incorporated into the natural North Carolina landscape in areas like Balsam Mountain Preserve, Biltmore Forest, Laurel Ridge Country Club, Kenmure Country Club, Lake Lure and private Equestrian Estates. Grove Park Fine Homes strives to preserve our environment, both locally and globally',
    reverse: true,
  },
  {
    title: 'Construction Management',
    img: 'https://ecomm-imgs-test.s3.amazonaws.com/ecomm-imgs-test/gpfh/gpfh_test_3.jpg',
    desc: 'Specializing in environmentally friendly homes and building practices, we always approach your project with a goal of minimal environmental impact. Our custom projects are incorporated into the natural North Carolina landscape in areas like Balsam Mountain Preserve, Biltmore Forest, Laurel Ridge Country Club, Kenmure Country Club, Lake Lure and private Equestrian Estates. Grove Park Fine Homes strives to preserve our environment, both locally and globally',
    reverse: true,
  },
  {
    title: 'Green Homes',
    img: 'https://ecomm-imgs-test.s3.amazonaws.com/ecomm-imgs-test/gpfh/gpfh_test_3.jpg',
    desc: 'Specializing in environmentally friendly homes and building practices, we always approach your project with a goal of minimal environmental impact. Our custom projects are incorporated into the natural North Carolina landscape in areas like Balsam Mountain Preserve, Biltmore Forest, Laurel Ridge Country Club, Kenmure Country Club, Lake Lure and private Equestrian Estates. Grove Park Fine Homes strives to preserve our environment, both locally and globally',
    reverse: true,
  },
];

const AllServices = () => {
  return (
    <div className='px-4 pt-12 bg-stone-900'>
      <div className='pb-3'>
        <h2 className='text-dmd font-medium leading-6 mb-3 uppercase'>
          Services
        </h2>
      </div>
      <ul className='flex flex-col pb-4'>
        {services.map((service, index) => (
          <li
            className='mt-10 h-full rounded-lg shadow-lg appearance-none'
            key={index}
          >
            <Service {...service}></Service>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllServices;
