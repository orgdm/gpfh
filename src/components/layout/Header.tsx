'use client';
import Link from 'next/link';
import { useState } from 'react';
import FullScreenNav from './FullScreenNav';

const openBtnStyle =
  'before:top-[14px] before:rotate-45 after:bottom-[14px] after:-rotate-45';
const closedBtnStyle = 'before:top-[10px] after:bottom-[10px]';
const baseBtnStyle =
  'relative h-[30px] w-[30px] p-[10px] appearance-none bg-transparent border-none cursor-pointer before:absolute after:absolute before:block after:block before:bg-white after:bg-white before:w-[25px] after:w-[25px] before:h-[2px] after:h-[2px] before:left-[2px] after:left-[2px] before:right-[2px] after:right-[2px] before:transition after:transition before:origin-center after:origin-center before:ease-linear after:ease-linear before:transition-all after:transition-all before:duration-300 after:duration-300 ';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  // const [scrollDir, setScrollDir] = useState<number>(0);

  const handleMenu = (
    event: React.MouseEvent<
      HTMLButtonElement | HTMLAnchorElement | HTMLDivElement
    >
  ): void => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className='fixed z-1 left-0 right-0 top-0 bottom-auto bg-stone-800'>
        <div className='relative px-4 h-head'>
          <div className='flex w-full h-full flex-row justify-between'>
            <div className='flex items-center list-none relative'>
              <Link href={'/'}>logo</Link>
            </div>
            <ul className='flex items-center'>
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
          </div>
        </div>
        <FullScreenNav setOpen={setMenuOpen} open={menuOpen} />
      </header>
    </>
  );
};

export default Header;
