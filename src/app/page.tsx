import MainCarousel from '@/components/home/MainCarousel';
import Introduction from '@/components/home/Introduction';
import AllServices from '@/components/home/services/AllServices';
import Subscribe from '@/components/home/Subscribe';
// fetch data from s3 and pass into components

export default function Home() {
  return (
    <>
      <div>
        <MainCarousel />
      </div>
      <Introduction />
      <div>
        <AllServices />
      </div>
      <Subscribe />
    </>
  );
}
