import React from 'react';
import { Helmet } from 'react-helmet';

// import ContactDetails from '../components/ContactDetails';
import { Button } from '../components/Button';
import '../components/ContactDetails/ContactDetails.css';
import { Link } from 'react-router-dom';
import {
	FaFacebook,
	FaInstagram,
	FaYoutube,
	FaWhatsapp,
	FaPhone,
	FaEnvelope,
	FaLocationArrow,
} from 'react-icons/fa';
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
				<meta property='og:url' content='https://wwwseaharvest.co.zw/contact' />
				<meta
					property='og:site_name'
					content='Sea Harvest brings you high quality fresh fish from Kaiba, a number 1 fresh fish distributor in Zimbabwe'
				/>
				<meta
					property='article:publisher'
					content='https://www.facebook.com/seaharvest'
				/>
			</Helmet>
			<Location />
			{/* <ContactDetails /> */}

			{/* Form form here =========================  */}
			<div className='conact-details-container'>
				<h1>Contact Us</h1>
				<p>Any questions or remarks? Just write us a message.</p>
				<div className='main-container'>
					<div className='left-container'>
						<h3>Our Contact Information</h3>
						<small>
							Fill up this form and our Team will get back to you within 24
							hours.
						</small>
						<span>
							<FaPhone className='icon' />
							<a href='tel:+263772850334'>0772 850 334</a>
						</span>
						<span>
							<FaEnvelope className='icon' />
							<a href='mailto:jchademwiri@gmail.com'>schademuwiri@gmail.com</a>
						</span>
						<span>
							<FaLocationArrow className='icon' />
							<address>7467 Chikanga ext Magamba rd</address>
						</span>
						<div className='social-icons'>
							<Link
								className='social-icon-link'
								to={'//chat.whatsapp.com/J6gFImaNNRP5fZigXyiv18'}
								target='_blank'
								aria-label='WhatsApp'>
								<FaWhatsapp />
							</Link>
							<Link
								className='social-icon-link'
								to={'//facebook.com/seaharvestZW/'}
								target='_blank'
								aria-label='Facebook'>
								<FaFacebook />
							</Link>
							<Link
								className='social-icon-link'
								to={'//instagram.com/playhousemediatech/'}
								target='_blank'
								aria-label='Instagram'>
								<FaInstagram />
							</Link>
							<Link
								className='social-icon-link'
								to={
									'//www.youtube.com/channel/UCgnCtM2Ih8L5xNXXpBREmEg?sub_confirmation=1'
								}
								target='_blank'
								aria-label='Youtube'>
								<FaYoutube />
							</Link>

							{/* <Link
							className='social-icon-link'
							to='/'
							target='_blank'
							aria-label='LinkedIn'>
							<FaLinkedin />
						</Link> */}
						</div>
					</div>
					<div className='right-container '>
						<form
							name='contact'
							method='POST'
							data-netlify='true'
							onSubmit='submit'>
							<input type='hidden' name='form-name' value='contact' />
							<div className='contained'>
								<div className='form'>
									<input
										className='form__input'
										type='text'
										name='firstName'
										id='firstname'
										placeholder=' '
										required
									/>
									<label className='form__label' htmlFor='firstname'>
										First Name
									</label>
								</div>
								<div className='form'>
									<input
										className='form__input'
										type='text'
										name='lastname'
										id='lastname'
										placeholder=' '
										required
									/>
									<label className='form__label' htmlFor='lastname'>
										Last Name
									</label>
								</div>
							</div>
							<div className='contained'>
								<div className='form'>
									<input
										className='form__input'
										type='email'
										name='email'
										id='email'
										placeholder=' '
										required
									/>
									<label className='form__label' htmlFor='email'>
										Email Address
									</label>
								</div>
								<div className='form'>
									<input
										className='form__input'
										type='tel'
										name='phone_number'
										id='phone_number'
										placeholder=' '
										required
									/>
									<label className='form__label' htmlFor='phone_number'>
										Phone Number
									</label>
								</div>
							</div>

							<div>
								<label className='text__area' htmlFor='message'>
									Your message
								</label>
								<textarea
									className='text__area'
									name='message'
									id='message'
									required
									placeholder='Enter Your Message here'></textarea>
							</div>
							<Button buttonSize='btn--wide' buttonColor='blue' type='submit'>
								Send Message
							</Button>
						</form>
					</div>
				</div>
			</div>

			{/* Form ends here =============================  */}
		</>
	);
};

export default Contact;
