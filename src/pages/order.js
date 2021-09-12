import React from 'react';
import { Helmet } from 'react-helmet';
import OrderForm from '../components/OrderForm';

const Order = () => {
	return (
		<>
			<Helmet>
				<meta charSet='utf-8' />
				<title>Order - Sea Harvest fish from Kariba</title>
				<link rel='canonical' href='https://seaharvest.co.zw/order' />
			</Helmet>
			<OrderForm />
		</>
	);
};

export default Order;
