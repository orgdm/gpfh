'use client';
import Link from 'next/link';
import { Dispatch, SetStateAction } from 'react';
import { useRef, useEffect } from 'react';
type FullScreenNavProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};
import { pageLinks } from '@/lib/misc';

const baseStyle =
  'fixed top-0 bottom-auto right-0 w-full transition-[transform] duration-300 ease-in-out';

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
      <div className='relative'>
        <div
          ref={menu}
          className={`md:w-full hidden md:block md:h-full md:col-span-4 md:bg-head md:transition-[opacity] md:delay-300 md:duration-300  absolute top-0 left-0 right-0 bottom-0 ease-in-out ${
            open ? 'md:opacity-0' : 'md:opacity-0'
          } `}
        >
          <div className='w-full h-full'>
            <div className='w-full h-full'></div>
          </div>
        </div>
        <div className='w-full h-svh flex justify-end relative pointer-events-none -z-1'>
          <div className={`w-[45%] min-h-scr bg-stone-900 pointer-events-auto`}>
            <div className='pointer-events-none h-head'></div>
            <div className='mt-12 mb-10'>
              <ul className='flex flex-col w-full pointer-events-auto px-8'>
                {pageLinks.map((link, index) => (
                  <li
                    key={index}
                    className='w-full py-3 flex justify-end text-lg font-semibold uppercase tracking-wide'
                  >
                    <Link
                      className={`transition-[opacity] delay-200 duration-300 relative  after:h-[1px] after:bg-stone-50 after:w-0 after:hover:w-full after:content-[''] after:absolute after:left-0 after:top-7 after:transition-[width] after:delay-0 after:duration-300 after:ease-in-out  ${
                        open ? ' opacity-100' : '  opacity-0'
                      }`}
                      onClick={() => setOpen(false)}
                      href={link.href}
                    >
                      <span className={`uppercase`}>{link.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullScreenNav;
