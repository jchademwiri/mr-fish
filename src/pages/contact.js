import React from 'react';
import { Helmet } from 'react-helmet';

import ContactDetails from '../components/ContactDetails';
import Location from '../components/Location';

const Contact = () => {
	return (
		<>
			<Helmet>
				<meta charSet='utf-8' />
				<title>Contact - Sea Harvest fish from Kariba</title>
				<link rel='canonical' href='https://wwwseaharvest.co.zw/contact' />
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
				<meta property='og:url' content='https://wwwseaharvest.co.zw/contact' />
				<meta
					property='og:site_name'
					content='Sea Harvest Number 1 fresh fish distributor in Zimbabwe'
				/>
				<meta
					property='article:publisher'
					content='https://www.facebook.com/seaharvest'
				/>
			</Helmet>
			<Location />
			<ContactDetails />
		</>
	);
};

export default Contact;
