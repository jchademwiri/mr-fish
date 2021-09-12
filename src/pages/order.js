import React from 'react';
import { Helmet } from 'react-helmet';
import OrderForm from '../components/OrderForm';

const Order = () => {
	return (
		<>
			<Helmet>
				<meta charSet='utf-8' />
				<title>Order - Sea Harvest fish from Kariba</title>
				<link rel='canonical' href='https://wwwseaharvest.co.zw/order' />

				<meta
					name='description'
					content='Sea Harvest brings you high quality fresh fish from Kaiba, a number 1 fresh fish distributor in Zimbabwe'
				/>

				<meta property='og:locale' content='en_US' />
				<meta property='og:type' content='website' />
				<meta
					property='og:title'
					content='Sea Harvest brings you high quality fresh fish from Kaiba, a number 1 fresh fish distributor in Zimbabwe'
				/>
				<meta
					property='og:description'
					content='Sea Harvest brings you high quality fresh fish from Kaiba, a number 1 fresh fish distributor in Zimbabwe'
				/>
				<meta property='og:url' content='https://www.seaharvest.co.zw/order' />
				<meta
					property='og:site_name'
					content='Sea Harvest brings you high quality fresh fish from Kaiba, a number 1 fresh fish distributor in Zimbabwe'
				/>
				<meta
					property='article:publisher'
					content='https://www.facebook.com/seaharvest'
				/>
			</Helmet>
			<OrderForm />
		</>
	);
};

export default Order;
