import type { FullScreenNavProps } from '@/types/home';
import { memo } from 'react';

const openBtnStyle =
  'before:top-[14px] before:rotate-45 after:bottom-[14px] after:-rotate-45  ';
const closedBtnStyle = 'before:top-[10px] after:bottom-[10px]';
const baseBtnStyle =
  'relative h-[30px] w-[30px] p-[10px] appearance-none bg-transparent border-none cursor-pointer before:absolute after:absolute before:block after:block before:bg-white after:bg-white before:w-[30px] after:w-[30px] before:h-[1.6px] after:h-[1.6px] before:left-[2px] after:left-[2px] before:right-[2px] after:right-[2px] before:transition-[transform] after:transition-[transform] before:ease-toggle after:ease-toggle before:duration-300 after:duration-300 ';

const ToggleBtn = memo(function ToggleBtn({
  open,
  setOpen,
}: FullScreenNavProps) {
  return (
    <>
      <ul className='flex items-center xl:hidden'>
        <li
          id='menuToggleOuter'
          className='w-[48px] h-[48px] z-[100] flex items-center justify-end pointer-events-auto no-underline aspect-square'
        >
          <button
            aria-label='Toggle Menu'
            className={
              `${baseBtnStyle}` + `${open ? openBtnStyle : closedBtnStyle}`
            }
            onClick={() => setOpen(!open)}
          ></button>
        </li>
      </ul>
    </>
  );
});

export default ToggleBtn;
