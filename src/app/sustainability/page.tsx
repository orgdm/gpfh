import { promises as fs } from 'fs';
import { SustainabilityProps } from '@/types/sustainability';
import SusIntro from '@/components/sustainability/SusIntro';
import Commitment from '@/components/sustainability/Commitment';
import EcoFriendly from '@/components/sustainability/EcoFriendly';

const Sustainability = async () => {
  const file = await fs.readFile(
    process.cwd() + '/src/content/sustainability/sustainability.json',
    'utf8'
  );
  const data: SustainabilityProps = JSON.parse(file);

  return (
    <div>
      <SusIntro text={data.intro.text} img={data.intro.img} />
      <Commitment
        title={data.commitment.title}
        text={data.commitment.text}
        img={data.commitment.img}
      />
      <EcoFriendly text={data.ecoFriendly.text} img={data.ecoFriendly.img} />
    </div>
  );
};

export default Sustainability;
