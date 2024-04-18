import Link from 'next/link';
import type { FullScreenNavProps } from '@/types/home';
import { pageLinks } from '@/lib/misc';
import { memo } from 'react';

const baseStyle =
  'fixed top-0 bottom-auto right-0 w-full h-screen  transition-[transform] duration-300 ease-in-out';

const FullScreenNav = memo(function FullScreenNav({
  open,
  setOpen,
}: FullScreenNavProps) {
  return (
    <nav
      className={
        `${baseStyle}` +
        `${
          open
            ? ' translate-y-0 pointer-events-auto overflow-hidden'
            : ' -translate-y-full pointer-events-none overflow-auto'
        }`
      }
    >
      <div className='bg-scroll'>
        <div className='w-full h-screen flex justify-end relative pointer-events-none'>
          <div
            className={`w-full md:w-[45%] z-20 h-full bg-stone-900 pointer-events-auto`}
          >
            <div
              className={`mt-[9em] mb-10 transition-[opacity] duration-360 delay-300 ease-in-out ${
                open ? ' opacity-100' : '  opacity-0 '
              }`}
            >
              <menu className='flex flex-col w-full pointer-events-auto px-8'>
                {pageLinks.map((link, index) => (
                  <li key={index} className={`w-full py-3 flex justify-end `}>
                    <Link
                      className={`link`}
                      onClick={() => setOpen(false)}
                      href={link.href}
                    >
                      <span
                        className={`text-xl font-light uppercase font-archivo tracking-wide`}
                      >
                        {link.title}
                      </span>
                    </Link>
                  </li>
                ))}
              </menu>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
});

export default FullScreenNav;
