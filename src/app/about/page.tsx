import { promises as fs } from 'fs';
import { AboutProps } from '@/types/about';
import Fragment from '@/components/about/Fragment';

const About = async () => {
  const file = await fs.readFile(
    process.cwd() + '/src/content/about/about.json',
    'utf8'
  );
  const data: AboutProps = JSON.parse(file);

  return (
    <>
      <div className='min-h-svh flex justify-center items-center'>
        <div>
          <span className='font-semibold text-2xl'>
            <h3>ABOUT</h3>
          </span>
        </div>
        <Fragment
          title={data.origin.title}
          img={data.origin.img}
          text={data.origin.text}
        />
        <Fragment
          title={data.mission.title}
          img={data.mission.img}
          text={data.mission.text}
        />
      </div>
    </>
  );
};

export default About;
