'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import FullScreenNav from './FullScreenNav';

const openBtnStyle =
  'before:top-[14px] before:rotate-45 after:bottom-[14px] after:-rotate-45';
const closedBtnStyle = 'before:top-[10px] after:bottom-[10px]';
const baseBtnStyle =
  'relative h-[30px] w-[30px] p-[10px] appearance-none bg-transparent border-none cursor-pointer before:absolute after:absolute before:block after:block before:bg-white after:bg-white before:w-[25px] after:w-[25px] before:h-[2px] after:h-[2px] before:left-[2px] after:left-[2px] before:right-[2px] after:right-[2px] before:transition after:transition before:origin-center after:origin-center before:ease-linear after:ease-linear before:transition-all after:transition-all before:duration-300 after:duration-300 ';

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

  const handleMenu = (
    event: React.MouseEvent<
      HTMLButtonElement | HTMLAnchorElement | HTMLDivElement
    >
  ): void => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const thresh = 3;
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
        className={`fixed z-50 left-0 right-0 bottom-auto transition-[top] duration-150 ease-out bg-scroll ${
          scrollDir > 0 ? 'top-0' : '-top-20'
        }`}
      >
        <div
          className={`relative px-4 h-head transition-[background-color] duration-300 ease-in ${
            scrollDir < 2 ? 'bg-stone-950' : 'bg-head-overlay'
          }`}
        >
          <div
            style={{ textShadow: 'rgba(0, 0, 0, 0.004) 1px 1px 1px' }}
            className='flex w-full h-full flex-row justify-between xl:grid xl:grid-cols-12 xl:grid-rows-1'
          >
            <div className='flex items-center list-none relative xl:col-start-1 xl:col-end-3'>
              <Link href={'/'}>logo</Link>
            </div>
            <ul className='flex items-center xl:hidden'>
              <li
                id='menuToggleOuter'
                className='w-[48px] h-[48px] z-[100] flex  items-center justify-end pointer-events-auto no-underline text-white aspect-square'
              >
                <button
                  className={
                    `${baseBtnStyle}` +
                    `${menuOpen ? openBtnStyle : closedBtnStyle}`
                  }
                  onClick={handleMenu}
                ></button>
              </li>
            </ul>
            <ul className='hidden xl:col-start-3 xl:col-end-7 xl:flex xl:items-center xl:justify-evenly'>
              {links.slice(0, 4).map((link, index) => (
                <li
                  className='capitalize tracking-wider font-light'
                  key={index}
                >
                  <Link href={link.href}>{link.title}</Link>
                </li>
              ))}
            </ul>
            <ul className='hidden xl:col-start-9 xl:col-end-13 xl:flex xl:items-center xl:justify-self-end xl:justify-evenly'>
              {links.slice(4, 6).map((link, index) => (
                <li className='me-6 tracking-wider font-light' key={index}>
                  <Link href={link.href}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className='block xl:hidden'>
          <FullScreenNav setOpen={setMenuOpen} open={menuOpen} />
        </div>
      </header>
    </>
  );
};

export default Header;
