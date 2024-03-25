import NewsletterHome from '../forms/NewsletterHome';

const Subscribe = () => {
  return (
    <div className='px-2 sm:px-5 my-10'>
      <div className='bg-stone-900 rounded-lg p-5 shadow-lg'>
        <div className='py-2'>
          <h4 className='text-lg'>Newsletter</h4>
        </div>
        <NewsletterHome />
      </div>
    </div>
  );
};

export default Subscribe;
