'use client';
import Link from 'next/link';
import { ArrowUpIcon } from '@radix-ui/react-icons';

const Footer = () => {
  return (
    <footer id='footer' className='bg-stone-900'>
      <div className='p-4'>
        <div className='min-h-48 grid grid-rows-[minmax(0, 1fr) minmax(0,1fr) 1fr]'>
          <div>
            <div className='flex w-full h-full flex-row flex-wrap justify-between'>
              <div>LOGO</div>
              <div>
                <button
                  className='flex flex-row items-center'
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <span className='me-2'>back to top</span> <ArrowUpIcon />
                </button>
              </div>
            </div>
          </div>
          <div>
            <ul className='flex flex-wrap gap-x-4 gap-y-2'>
              <li>
                <Link href={'/projects'}>projects</Link>
              </li>
              <li>
                <Link href={'/contact'}>contact</Link>
              </li>
              <li>
                <Link href={'/about'}>about</Link>
              </li>
              <li>
                <Link href={'/people'}>people</Link>
              </li>
              <li>
                <Link href={'/newsletter'}>Newsletter</Link>
              </li>
            </ul>
          </div>
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
