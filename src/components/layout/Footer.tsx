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
                  <Link href={'/work'}>work</Link>
                </li>
                <li>
                  <Link href={'/contact'}>contact</Link>
                </li>
                <li>
                  <Link href={'/about'}>about</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4>Newsletter</h4>
            </div>
          </div>
          <div>
            <button onClick={() => window.scrollTo(0, 0)}>return to top</button>
          </div>
        </div>
        <div className='flex justify-center'>
          <p>&#169; 2024</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
