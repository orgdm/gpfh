import { promises as fs } from 'fs';
import MainCarousel from '@/components/home/MainCarousel';
import Introduction from '@/components/home/Introduction';
import ServiceCarousel from '@/components/home/ServiceCarousel';
// import Standards from '@/components/home/Standards';
import Environment from '@/components/home/Environment';
import Subscribe from '@/components/home/Subscribe';
import type { HomeProps } from '@/types/home';

const Home = async () => {
  const file = await fs.readFile(
    process.cwd() + '/src/content/home/home.json',
    'utf8'
  );
  const data: HomeProps = JSON.parse(file);

  return (
    <>
      <MainCarousel imgs={data.IntroCarousel.imgs} />
      <Introduction imgs={data.WhoWeAre.imgs} text={data.WhoWeAre.text} />
      <Environment items={data.Environment.items} />
      <ServiceCarousel services={data.ServiceCarousel.services} />
      {/* <Standards text={data.OurStandards.text} img={data.OurStandards.img} /> */}
      <Subscribe />
    </>
  );
};

export default Home;
