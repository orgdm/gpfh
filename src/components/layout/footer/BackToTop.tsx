'use client';
import { ArrowUpIcon } from '@radix-ui/react-icons';

const BackToTop = () => {
  return (
    <div>
      <button
        className='flex flex-row items-center'
        onClick={() => window.scrollTo(0, 0)}
      >
        <span className='me-2'>back to top</span> <ArrowUpIcon />
      </button>
    </div>
  );
};

export default BackToTop;
