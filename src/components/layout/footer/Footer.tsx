import Link from 'next/link';
import MediaLinks from './MediaLinks';
import { pageLinks } from '@/lib/misc';
import BackToTop from './ScrollToTop';

const Footer = () => {
  return (
    <footer>
      <div className='footer-grid'>
        <div>
          <div className='footer-row-1'>
            <div>LOGO</div>
            <BackToTop />
          </div>
        </div>
        <ul className='footer-links'>
          {pageLinks.map((link, index) => (
            <li key={index}>
              <Link href={link.href}>{link.title}</Link>
            </li>
          ))}
        </ul>
        <MediaLinks />
        <div>
          <div className='cr-wrap'>
            <p className='text-sm text-stone-500 mt-auto'>
              &#169; 2024 Grove Park Fine Homes
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
