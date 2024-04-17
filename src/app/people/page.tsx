import { promises as fs } from 'fs';
import type { PeopleProps } from '@/types/people';
import Person from '@/components/people/Person';
import Heading from '@/components/layout/Heading';

const People = async () => {
  const file = await fs.readFile(
    process.cwd() + '/src/content/people/people.json',
    'utf8'
  );
  const data: PeopleProps = JSON.parse(file);

  return (
    <div className='mt-[90px]'>
      <div className='min-h-svh px-4'>
        <div className='py-8'>
          <span className='font-semibold text-2xl'>
            <Heading title='Meet the Team' />
          </span>
        </div>
        <Person imgs={data.imgs} text={data.text} />
      </div>
    </div>
  );
};

export default People;
