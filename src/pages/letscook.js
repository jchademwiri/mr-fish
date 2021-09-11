import React from 'react';
import {Helmet} from "react-helmet";
import Location from '../components/Location';
import Recipe from '../components/Recipe';
const Letscook = () => {
	return (
		<>
			<Helmet>
				<meta charSet='utf-8' />
				<title>Blog - Sea Harvest fish from Kariba</title>
				<link rel='canonical' href='https://seaharvest.co.zw/letscook' />
			</Helmet>
			<Recipe />
			<Location />
		</>
	);
};

export default Letscook;
