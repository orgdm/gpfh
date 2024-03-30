import MainCarousel from '@/components/home/MainCarousel';
import Introduction from '@/components/home/Introduction';
import ServiceCarousel from '@/components/home/services/ServiceCarousel';
import Subscribe from '@/components/home/Subscribe';
// fetch data from s3 and pass into components

const Home = () => {
  return (
    <>
      <MainCarousel />
      <Introduction />
      <ServiceCarousel />
      {/* GREEN FOCUS */}
      <Subscribe />
    </>
  );
};

export default Home;
