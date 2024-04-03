import Link from 'next/link';
import MediaLinks from './MediaLinks';
import { pageLinks } from '@/lib/misc';
import BackToTop from './ScrollToTop';

const Footer = () => {
  return (
    <footer id='footer' className='bg-stone-900'>
      <div className='p-4'>
        <div className='min-h-48 grid grid-rows-[minmax(0, 1fr) minmax(0,1fr) minmax(0,1fr) 1fr]'>
          <div>
            <div className='flex w-full h-full flex-row flex-wrap justify-between'>
              <div>LOGO</div>
              <BackToTop />
            </div>
          </div>
          <div className='mt-2'>
            <ul className='flex flex-wrap gap-x-4 gap-y-2'>
              {pageLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <MediaLinks />
          <div>
            <div className='flex justify-center h-full flex-grow-1 flex-shrink-0'>
              <p className='text-sm text-stone-500 mt-auto'>
                &#169; 2024 Grove Park Fine Homes
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
