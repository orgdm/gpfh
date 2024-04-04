'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import HomeLinkLogo from './HomeLinkLogo';
import ToggleBtn from './navmenu/ToggleBtn';
import FullScreenNav from './navmenu/FullScreenNav';
import CloseOnClick from './navmenu/CloseOnClick';

const links = [
  { title: 'projects', href: '/projects' },
  { title: 'process', href: '/process' },
  { title: 'about', href: '/about' },
  { title: 'people', href: '/people' },
  { title: 'newsletter', href: '/newsletter' },
  { title: 'contact', href: '/contact' },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [scrollDir, setScrollDir] = useState<number>(2);

  useEffect(() => {
    menuOpen
      ? document.body.setAttribute('data-scroll', 'n')
      : document.body.setAttribute('data-scroll', 'y');
  }, [menuOpen]);

  useEffect(() => {
    const thresh = 2;
    let lastY: number = window.scrollY;
    let ticking: boolean = false;

    const updateDir = () => {
      const y: number = window.scrollY;
      const initial: boolean = lastY < 5;

      if (Math.abs(y - lastY) < thresh) {
        ticking = false;
        return;
      }
      const dir: number = initial ? 2 : y > lastY ? 0 : 1;
      setScrollDir(dir);
      lastY = y > 0 ? y : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateDir);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollDir]);

  return (
    <>
      <header
        className={`fixed z-50 left-0 right-0 top-0 bottom-auto transition-[transform] duration-500 ease-head bg-scroll ${
          menuOpen
            ? 'translate-y-0'
            : scrollDir > 0
            ? ' translate-y-0'
            : ' -translate-y-full'
        } `}
      >
        <div
          className={`relative px-4 h-head transition-[background-color] ease-head-overlay ${
            scrollDir < 2 ? ' bg-stone-900 delay-700' : ' bg-head-overlay'
          }`}
        >
          <div className='flex w-full h-full flex-row justify-between xl:grid xl:grid-cols-12 xl:grid-rows-1'>
            <div className='flex items-center list-none relative xl:col-start-1 xl:col-end-3'>
              <HomeLinkLogo />
            </div>
            <ToggleBtn open={menuOpen} setOpen={setMenuOpen} />
            <ul className='hidden xl:col-start-3 xl:col-end-7 xl:flex xl:items-center xl:justify-evenly'>
              {links.slice(0, 4).map((link, index) => (
                <li key={index}>
                  <Link className='link' href={link.href}>
                    <span className='uppercase font-archivo tracking-wider font-light'>
                      {link.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <ul className='hidden xl:col-start-9 xl:col-end-13 xl:flex xl:items-center xl:justify-self-end xl:justify-evenly'>
              {links.slice(4, 6).map((link, index) => (
                <li className='me-6' key={index}>
                  <Link className='link' href={link.href}>
                    <span className='uppercase font-archivo tracking-wider font-light'>
                      {link.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className='block xl:hidden'>
          <FullScreenNav setOpen={setMenuOpen} open={menuOpen} />
        </div>
        <div className='hidden md:block xl:hidden'>
          <CloseOnClick setOpen={setMenuOpen} open={menuOpen} />
        </div>
      </header>
    </>
  );
};

export default Header;
