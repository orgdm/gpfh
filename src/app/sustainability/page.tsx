import { promises as fs } from 'fs';
import { SustainabilityProps } from '@/types/sustainability';
import Commitment from '@/components/sustainability/Commitment';
import GreenPractices from '@/components/sustainability/GreenPractices';
import EcoFriendly from '@/components/sustainability/EcoFriendly';

const Sustainability = async () => {
  const file = await fs.readFile(
    process.cwd() + '/src/content/sustainability/sustainability.json',
    'utf8'
  );
  const data: SustainabilityProps = JSON.parse(file);

  return (
    <div>
      <Commitment title={data.commitment.title} text={data.commitment.text} />
      <GreenPractices text={data.greenPractices.text} />
      <EcoFriendly text={data.ecoFriendly.text} img={data.ecoFriendly.img} />
    </div>
  );
};

export default Sustainability;
