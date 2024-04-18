import type { GreenPracticesProps } from '@/types/sustainability';

const GreenPractices = ({ text }: GreenPracticesProps) => {
  return (
    <div className='px-6 py-10 xs:p-12'>
      <p className='text-balance    font-thin text-[1.125rem] leading-normal sm:text-[1.25rem] sm:leading-relaxed'>
        {text}
      </p>
    </div>
  );
};

export default GreenPractices;
