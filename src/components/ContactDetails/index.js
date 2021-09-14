import React from 'react';
// import { Button } from '../Button';
import './ContactDetails.css';
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
import Form from '../Form';

const ContactDetails = () => {
	return (
		<>
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
						<Form />
						{/* <form
							name='contact'
							method='POST'
							data-netlify='true'
							onSubmit='submit'
							netlify>
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
							*/}
					</div>
				</div>
			</div>

			{/* Form ends here =============================  */}
		</>
	);
};

export default ContactDetails;
