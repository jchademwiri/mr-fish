import Orders from '../components/PlaceOrder';

const Order = () => {
	return (
		<>
			<Orders />

			<span
				className='skype-button bubble'
				data-color='#0078D4'
				data-contact-id='live:jchademwiri_1'></span>
			<span className='skype-chat' data-color-message='#0078D4'></span>
			<script src='https://swc.cdn.skype.com/sdk/v1/sdk.min.js'></script>
		</>
	);
};

export default Order;
