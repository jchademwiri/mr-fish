import React from 'react';
import { Button } from '../Button';
import './ContactDetails.css';
import { Link } from 'react-router-dom';
import {
	FaFacebook,
	FaInstagram,
	FaYoutube,
	FaWhatsapp,
	FaLinkedin,
	FaPhone,
	FaEnvelope,
	FaLocationArrow,
} from 'react-icons/fa';

const ContactDetails = () => {
	return (
		<div className='conact-details-container'>
			<h1>Contact Us</h1>
			<p>Any questions or remarks? Just write us a message.</p>
			<div className='main-container'>
				<div className='left-container'>
					<h3>Our Contact Information</h3>
					<small>
						Fill up this form and our Team will get back to you within 24 hours.
					</small>
					<span>
						<FaPhone className='icon' />
						<a href='tel:+63772850334'>0772 850 334</a>
					</span>
					<span>
						<FaEnvelope className='icon' />
						<a href='mailto:jchademwiri@gmail.com'>mrfish@gmail.com</a>
					</span>
					<span>
						<FaLocationArrow className='icon' />
						<address>7467 Chikanga ext Magamba rd</address>
					</span>
					<div className='social-icons'>
						<Link
							className='social-icon-link'
							to='/'
							target='_blank'
							aria-label='WhatsApp'>
							<FaWhatsapp />
						</Link>
						<Link
							className='social-icon-link'
							to='/'
							target='_blank'
							aria-label='Facebook'>
							<FaFacebook />
						</Link>
						<Link
							className='social-icon-link'
							to='/'
							target='_blank'
							aria-label='Instagram'>
							<FaInstagram />
						</Link>
						<Link
							className='social-icon-link'
							to={
								'//www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A?view_as=subscriber'
							}
							target='_blank'
							aria-label='Youtube'>
							<FaYoutube />
						</Link>

						<Link
							className='social-icon-link'
							to='/'
							target='_blank'
							aria-label='LinkedIn'>
							<FaLinkedin />
						</Link>
					</div>
				</div>
				<div className='right-container '>
					<div className='contained'>
						<input
							type='text'
							name='firstName'
							id='name'
							placeholder='First Name'
						/>
						<input
							type='text'
							name='lastName'
							id='name'
							placeholder='Last Name'
						/>
					</div>
					<div className='contained'>
						<input
							type='email'
							name='email'
							id='email'
							placeholder='Email address'
						/>
						<input type='tel' name='tel' id='tel' placeholder='Phone Number' />
					</div>

					<textarea
						name='message'
						id='message'
						placeholder='Your Message here'></textarea>
					<Button buttonSize='btn--wide' buttonColor='blue' type='submit'>
						Send Message
					</Button>
				</div>
			</div>
		</div>
	);
};

export default ContactDetails;
