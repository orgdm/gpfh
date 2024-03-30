import Newsletter from '../forms/Newsletter';

const Subscribe = () => {
  return (
    <div className='px-2 sm:px-5 my-10'>
      <div className='bg-stone-900 rounded-lg p-5 shadow-lg'>
        <div className='py-2'>
          <h3 className='text-lg text-center'>newsletter sign up</h3>
        </div>
        <p className='mb-[1em] font-light text-stone-400 text-sm text-center'>
          sign up with your email to keep up with our latest updates
        </p>
        <Newsletter />
      </div>
    </div>
  );
};

export default Subscribe;
