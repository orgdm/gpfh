import Link from 'next/link';
import type { FullScreenNavProps } from '@/types/home';
import { pageLinks } from '@/lib/misc';
import { memo } from 'react';

const baseStyle =
  'fixed top-0 bottom-auto right-0 w-full min-h-scr transition-[transform] duration-300 ease-in-out';

const FullScreenNav = memo(function FullScreenNav({
  open,
  setOpen,
}: FullScreenNavProps) {
  return (
    <div
      className={
        `${baseStyle}` +
        `${
          open
            ? ' translate-y-0 pointer-events-auto overflow-hidden'
            : ' -translate-y-full pointer-events-none overflow-auto'
        }`
      }
    >
      <div className='relative'>
        <div className='w-full min-h-scr flex justify-end relative pointer-events-none'>
          <div
            className={`w-full md:w-[45%] z-20 bg-stone-900 pointer-events-auto`}
          >
            <div className='mt-[96px] mb-10'>
              <ul className='flex flex-col w-full pointer-events-auto px-8'>
                {pageLinks.map((link, index) => (
                  <li
                    key={index}
                    className='w-full py-3 flex justify-end text-lg font-semibold uppercase tracking-wide'
                  >
                    <Link
                      className={`transition-[opacity] delay-200 duration-300 link  ${
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
});

export default FullScreenNav;
