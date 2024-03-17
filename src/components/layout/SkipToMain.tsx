'use client';

const SkipToMain = () => {
  return (
    <a
      href='#mainContent'
      className='p-2 pointer-events-auto text-black bg-white absolute left-0 -top-20 overflow-hidden border border-r-2 border-b-2 rounded-ee-sm transition-[top] duration-1000 ease-out z-[150] focus:transition-[top] focus:absolute focus:top-0 focus:left-0 focus:ease-in focus:duration-150'
    >
      skip to main content
    </a>
  );
};

export default SkipToMain;
