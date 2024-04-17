import type { EnvironmentProps } from '@/types/home';
import TextImage from '../layout/TextImage';

const Environment = ({ items }: EnvironmentProps) => {
	return (
		<div className='px-8 py-12 2md:py-24'>
			<div className='mb-[4.24em]'>
				<TextImage
					link='/sustainability'
					linkText='Sustainability'
					title='Green Approach'
					text={items[1].text}
					img={items[1].img}
					rtl={false}
				/>
			</div>
		</div>
	);
};

export default Environment;
