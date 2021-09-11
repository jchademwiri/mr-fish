import React from 'react';
import Hero from '../components/Hero';
import Info from '../components/Info';
import {
	homeObjOne,
	homeObjTwo,
	homeObjThree,
	homeObjFour,
} from '../components/Info/Data';
import { Helmet } from 'react-helmet';
const Home = () => {
	return (
		<>
			<Helmet>
				<meta charSet='utf-8' />
				<title>Home - Sea Harvest fish from Kariba</title>
				<link rel='canonical' href='https://seaharvest.co.zw' />
			</Helmet>
			<Hero />
			<Info {...homeObjOne} />
			<Info {...homeObjTwo} />
			<Info {...homeObjThree} />
			<Info {...homeObjFour} />
		</>
	);
};

export default Home;
