import { promises as fs } from 'fs';
import type { PeopleProps } from '@/types/people';
import Person from '@/components/people/Person';

const People = async () => {
  const file = await fs.readFile(
    process.cwd() + '/src/content/people/people.json',
    'utf8'
  );
  const data: PeopleProps = JSON.parse(file);

  console.log(data.imgs);
  return (
    <div className='mt-[90px]'>
      <div className='min-h-svh'>
        <div>
          <span className='font-semibold text-2xl'>
            <h3>MEET THE TEAM</h3>
          </span>
        </div>
        <Person imgs={data.imgs} text={data.text} />
      </div>
    </div>
  );
};

export default People;
