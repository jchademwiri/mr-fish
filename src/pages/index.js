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
				<link rel='canonical' href='https://www.seaharvest.co.zw' />
				<meta
					name='description'
					content='Sea Harvest brings you fresh fish from Kaiba, a number 1 fresh fish distributor in Zimbabwe'
				/>

				<meta property='og:locale' content='en_US' />
				<meta property='og:type' content='website' />
				<meta
					property='og:title'
					content='Sea Harvest Number 1 fresh fish distributor in Zimbabwe'
				/>
				<meta
					property='og:description'
					content='Sea Harvest brings you fresh fish from Kaiba, a number 1 fresh fish distributor in Zimbabwe'
				/>
				<meta property='og:url' content='https://wwwseaharvest.co.zw' />
				<meta
					property='og:site_name'
					content='Sea Harvest Number 1 fresh fish distributor in Zimbabwe'
				/>
				<meta
					property='article:publisher'
					content='https://www.facebook.com/seaharvest'
				/>
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
