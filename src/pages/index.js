import Hero from '../components/Hero';
import Info from '../components/Info';
import {
	homeObjOne,
	homeObjTwo,
	homeObjThree,
	homeObjFour,
} from '../components/Info/Data';
const Home = () => {
	return (
		<>
			<Hero />
			<Info {...homeObjOne} />
			<Info {...homeObjTwo} />
			<Info {...homeObjThree} />
			<Info {...homeObjFour} />
		</>
	);
};

export default Home;
