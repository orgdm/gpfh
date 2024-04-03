// import Link from 'next/link';
import {
  LinkedInLogoIcon,
  TwitterLogoIcon,
  InstagramLogoIcon,
} from '@radix-ui/react-icons';

const MediaLinks = () => {
  return (
    <div className='mt-auto'>
      <ul className='footer-links'>
        <li className='media-icon ring-1 ring-stone-600'>
          <LinkedInLogoIcon className='scale-125' />
        </li>
        <li className='media-icon ring-1 ring-stone-600'>
          <TwitterLogoIcon className='scale-125' />
        </li>
        <li className='media-icon ring-1 ring-stone-600'>
          <InstagramLogoIcon className='scale-125' />
        </li>
      </ul>
    </div>
  );
};

export default MediaLinks;
