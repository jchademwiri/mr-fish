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
				<link rel='canonical' href='https://seaharvest.co.zw/contact' />
			</Helmet>
			<Location />
			<ContactDetails />
		</>
	);
};

export default Contact;
