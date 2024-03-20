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
  { title: 'about', href: '/about' },
  { title: 'projects', href: '/projects' },
  { title: 'contact', href: '/contact' },
];

const baseStyle =
  'fixed z-10 top-0 bottom-0 right-0 w-full transition-translate duration-300 ease-out';

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
            ? ' -translate-x-0 md:translate-y-0 md:translate-x-0 opacity-100 pointer-events-auto'
            : ' translate-x-full md:-translate-y-full md:translate-x-0 opacity-0 pointer-events-none'
        }`
      }
    >
      <div className='grid grid-rows-1 grid-cols-1 md:grid-rows-[1fr] md:grid-cols-12 relative w-full h-full'>
        <div
          ref={menu}
          className={`md:w-full hidden md:block md:h-full md:col-span-4 relative md:bg-[rgba(0,0,0,0.22)] md:opacity-${
            open ? '0' : '100'
          } md:delay-300 md:transition-[opacity]`}
        >
          <div className='w-full h-full'>
            <div className='w-full h-full'></div>
          </div>
        </div>
        <div className='w-full h-svh block relative bg-stone-100/10 backdrop-blur-xl md:col-span-8'>
          <div className='bg-transparent pointer-events-none h-head'></div>
          <div className='mt-12 mb-10'>
            <ul className='flex flex-col w-full pointer-events-auto px-8'>
              {links.map((link, index) => (
                <li
                  key={index}
                  className='w-full py-2 flex justify-end text-lg font-semibold uppercase tracking-wide'
                >
                  <Link onClick={() => setOpen(false)} href={link.href}>
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
