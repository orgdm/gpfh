'use client';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer id='footer' className='bg-stone-900'>
      <div className='min-h-48 px-4'>
        <div className='flex w-full flex-row flex-wrap justify-between'>
          <div className='flex flex-col w-full'>
            <div>
              <ul>
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
              </ul>
            </div>
            <div>
              <Link href={'/newsletter'}>Newsletter</Link>
            </div>
          </div>
          <div>
            <button onClick={() => window.scrollTo(0, 0)}>return to top</button>
          </div>
        </div>
        <div className='flex justify-center'>
          <p className='text-sm'>&#169; 2024 Grove Park Fine Homes</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
