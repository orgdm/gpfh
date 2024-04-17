import Link from 'next/link';
import MediaLinks from './MediaLinks';
import { pageLinks } from '@/lib/misc';
import BackToTop from './BackToTop';

const Footer = () => {
  return (
    <footer id='footer' className='bg-stone-900'>
      <div className='p-4'>
        <div className='min-h-48 grid grid-rows-[minmax(0, 1fr) minmax(0,1fr) minmax(0,1fr) 1fr]'>
          <div className='mt-1 mb-[1em]'>
            <div className='flex w-full h-full flex-row flex-wrap justify-between'>
              <div>LOGO</div>
              <BackToTop />
            </div>
          </div>
          <div className='my-4'>
            <ul className='flex flex-wrap gap-x-4 gap-y-2'>
              {pageLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='py-6'>
            <p className='text-sm text-stone-300 font-normal'>
              Call us at 828-243-0701 or contact us online for more information
              about our Custom Home Building and Construction Services.
            </p>
          </div>
          <MediaLinks />
          <div>
            <div className='flex justify-center h-full flex-grow-1 flex-shrink-0'>
              <p className='text-xs text-stone-400  mt-auto'>
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
