import type { FullScreenNavProps } from '@/types/home';
import { memo } from 'react';

const openBtnStyle =
  'before:top-[0.9375rem] before:rotate-45 after:bottom-[0.9375rem] after:-rotate-45  ';
const closedBtnStyle = 'before:top-[0.4375rem] after:bottom-[0.4375rem]';
const baseBtnStyle =
  'relative h-[2rem] w-[2rem] p-[0.625rem] appearance-none bg-transparent border-none cursor-pointer before:absolute after:absolute before:block after:block before:bg-white after:bg-white before:w-[2rem] after:w-[2rem] before:h-[0.125rem] after:h-[0.125rem] before:left-[0.125rem] after:left-[0.125rem] before:right-[0.125rem] after:right-[0.125rem] before:transition-[transform] after:transition-[transform] before:ease-toggle after:ease-toggle before:duration-300 after:duration-300 ';

const ToggleBtn = memo(function ToggleBtn({
  open,
  setOpen,
}: FullScreenNavProps) {
  return (
    <>
      <ul className='flex items-center xxl:hidden'>
        <li
          id='menuToggleOuter'
          className='w-[48px] h-[48px] z-[100] appearance-none flex items-center justify-end pointer-events-auto no-underline aspect-square'
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
