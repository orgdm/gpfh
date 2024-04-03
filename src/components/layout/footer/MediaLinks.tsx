import {
  LinkedInLogoIcon,
  TwitterLogoIcon,
  InstagramLogoIcon,
} from '@radix-ui/react-icons';

const MediaLinks = () => {
  return (
    <div className='py-2'>
      <ul className='flex flex-row flex-wrap gap-x-2 gap-y-1'>
        <li className='cursor-pointer rounded-full bg-stone-600 ring-1 ring-stone-600 p-2 translate-y-0 hover:-translate-y-1 transition-transform '>
          <LinkedInLogoIcon className='scale-125' />
        </li>
        <li className='cursor-pointer rounded-full bg-stone-600 ring-1 ring-stone-600 p-2 translate-y-0 hover:-translate-y-1 transition-transform '>
          <TwitterLogoIcon className='scale-125' />
        </li>
        <li className='cursor-pointer rounded-full bg-stone-600 ring-1 ring-stone-600 p-2 translate-y-0 hover:-translate-y-1 transition-transform '>
          <InstagramLogoIcon className='scale-125' />
        </li>
      </ul>
    </div>
  );
};

export default MediaLinks;
