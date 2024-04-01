'use client';
import { useRef, useEffect, memo } from 'react';
import type { FullScreenNavProps } from '@/types/home';

const CloseOnClick = memo(function CloseOnClick({
  setOpen,
  open,
}: FullScreenNavProps) {
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
      ref={menu}
      className={`md:w-[55%] hidden md:block md:min-h-scr md:col-span-4 md:bg-[rgb(1,2,3)] md:transition-[opacity] md:duration-300   absolute top-0 left-0 right-0 bottom-0 ease-in-out ${
        open
          ? 'md:opacity-40 md:pointer-events-auto'
          : 'md:opacity-0 md:pointer-events-none'
      } `}
    >
      <div className='w-full h-full'>
        <div className='w-full h-full'></div>
      </div>
    </div>
  );
});

export default CloseOnClick;
