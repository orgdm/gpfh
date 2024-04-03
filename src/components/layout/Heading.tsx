import { type HeadingProps } from '@/types/layout';

const Heading = ({ title }: HeadingProps) => {
  return (
    <div className={`my-[0.9em] `}>
      <h2 className='font-robo font-thin text-4xl md:text-5xl xl:text-6xl leading-6 md:leading-7 capitalize my-[0.8em] '>
        {title}
      </h2>
    </div>
  );
};

export default Heading;
