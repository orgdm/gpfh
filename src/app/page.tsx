import MainCarousel from '@/components/home/MainCarousel';
import Introduction from '@/components/home/Introduction';
import ServiceCarousel from '@/components/home/ServiceCarousel';
import Subscribe from '@/components/home/Subscribe';

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
