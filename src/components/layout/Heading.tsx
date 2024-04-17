import { type HeadingProps } from '@/types/layout';

const Heading = ({ title, size }: HeadingProps) => {
  return (
    <div className={`my-[0.2em]`}>
      <h2
        className={` capitalize text-balance ${
          size == 'ti'
            ? 'text-[1.75rem] md:text-[2rem] lg:text-[2.25rem] xl:text-[2.5rem] tracking-[0.0125rem] '
            : 'my-[0.8em] text-4xl md:text-5xl xl:text-6xl leading-6 tracking-[0.0125rem]  md:leading-7'
        }  `}
      >
        {title}
      </h2>
    </div>
  );
};

export default Heading;
