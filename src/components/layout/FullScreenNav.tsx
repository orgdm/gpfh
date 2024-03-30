'use client';
import Link from 'next/link';
import { Dispatch, SetStateAction } from 'react';
import { useRef, useEffect } from 'react';
type FullScreenNavProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const links = [
  { title: 'home', href: '/' },
  { title: 'projects', href: '/projects' },
  { title: 'about', href: '/about' },
  { title: 'people', href: '/people' },
  { title: 'contact', href: '/contact' },
  { title: 'newsletter', href: '/newsletter' },
];

const baseStyle =
  'fixed top-0 bottom-0 right-0 w-full transition-[transform] duration-300 ease-out';

const FullScreenNav = ({ open, setOpen }: FullScreenNavProps) => {
  const menu = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const closeMenuOnClick: EventListener = (e: Event) => {
      if (open && menu.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', closeMenuOnClick);

    return () => {
      document.removeEventListener('mousedown', closeMenuOnClick);
    };
  }, [open, setOpen]);

  return (
    <div
      className={
        `${baseStyle}` +
        `${
          open
            ? ' translate-y-0 pointer-events-auto'
            : ' -translate-y-full pointer-events-none'
        }`
      }
    >
      <div className='grid grid-rows-1 grid-cols-1 md:grid-rows-[1fr] md:grid-cols-12 relative w-full h-[calc(100vh - 77px)]'>
        <div
          ref={menu}
          className={`md:w-full hidden md:block md:h-full md:col-span-4 md:bg-head md:backdrop-blur-sm  md:transition-opacity md:delay-100 md:duration-500  relative ease-out ${
            open ? 'md:opacity-100' : 'md:opacity-0'
          } `}
        >
          <div className='w-full h-full'>
            <div className='w-full h-full'></div>
          </div>
        </div>
        <div className='w-full h-svh block relative bg-stone-950 md:col-span-8'>
          <div className='pointer-events-none h-head'></div>
          <div className='mt-12 mb-10'>
            <ul className='flex flex-col w-full pointer-events-auto px-8'>
              {links.map((link, index) => (
                <li
                  key={index}
                  className='w-full py-3 flex justify-end text-lg font-semibold uppercase tracking-wide'
                >
                  <Link
                    className={`transition-[opacity,margin] delay-200 duration-300 ${
                      open ? ' opacity-100' : '  opacity-0'
                    }`}
                    onClick={() => setOpen(false)}
                    href={link.href}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullScreenNav;
