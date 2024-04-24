import type { FullScreenNavProps } from '@/types/home';
import { memo } from 'react';

const openBtnStyle =
  'before:top-[1.125rem] before:rotate-45 after:bottom-[1.125rem] after:-rotate-45';
const closedBtnStyle = 'before:top-[0.625rem] after:bottom-[0.625rem]';
const baseBtnStyle =
  'relative h-[1.8125rem] w-[1.8125rem] p-[1.1875rem] appearance-none bg-transparent border-none cursor-pointer before:absolute after:absolute before:block after:block before:bg-white after:bg-white before:w-[1.8125rem] after:w-[1.8125rem] before:h-[0.125rem] after:h-[0.125rem] before:left-0 after:left-0 before:right-0 after:right-0 before:transition-[transform] after:transition-[transform] before:ease-toggle after:ease-toggle before:duration-500 after:duration-500 ';

const ToggleBtn = memo(function ToggleBtn({
  open,
  setOpen,
}: FullScreenNavProps) {
  return (
    <>
      <ul className='flex items-center xxl:hidden pt-1'>
        <li
          id='menuToggleOuter'
          className='z-[100] h-9 w-9 sa appearance-none flex items-center justify-end pointer-events-auto no-underline aspect-square'
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
