import React from 'react';
import './Footer.css';
import { MdFingerprint } from 'react-icons/md';
import { Button } from '../Button';
import { Link } from 'react-router-dom';
import {
	FaFacebook,
	FaInstagram,
	FaYoutube,
	FaWhatsapp,
	FaLinkedin,
} from 'react-icons/fa';

function Footer() {
	return (
		<div className='footer-container'>
			<section className='footer-subscription'>
				<p className='footer-subscription-heading'>
					Join our exclusive membership WhatsApp Group for free to receive the
					latest news and recepies
				</p>
				<i className='footer-subscription-text'>
					You can also place your orders quickly.
				</i>
				<div className='input-areas'>
					<Button buttonSize='btn--wide' buttonColor='green'>
						<a
							className='whatsapp-link'
							href='https://wa.me/message/B5YXATOYPZKCJ1'
							target='blank'
							rel='noopener noreferrer'>
							<FaWhatsapp className='social-icon-link WIcon' />
							Join WhatsApp Group
						</a>
					</Button>
				</div>
			</section>
			<div className='footer-links'>
				<div className='footer-link-wrapper'>
					<div className='footer-link-items'>
						<h2>About Us</h2>
						<Link to='/sign-up'>How it works</Link>
						<Link to='/'>Testimonials</Link>
						{/* <Link to='/'>Careers</Link>
						<Link to='/'>Investors</Link>
						<Link to='/'>Terms of Service</Link> */}
					</div>
					<div className='footer-link-items'>
						<h2>Contact Us</h2>
						<Link to='/'>Contact</Link>
						<Link to='/'>WhatsApp</Link>
						{/* <Link to='/'>Destinations</Link>
						<Link to='/'>Sponsorships</Link> */}
					</div>
				</div>
				<div className='footer-link-wrapper'>
					<div className='footer-link-items'>
						<h2>Our Products</h2>
						<Link to='/'>Bream</Link>
						<Link to='/'>Tiger Fish</Link>
						{/* <Link to='/'>Agency</Link>
						<Link to='/'>Influencer</Link> */}
					</div>
					<div className='footer-link-items'>
						<h2>Social Media</h2>
						<Link to='/'>Instagram</Link>
						<Link to='/'>Facebook</Link>
						{/* <Link to='/'>Youtube</Link>
						<Link to='/'>Twitter</Link> */}
					</div>
				</div>
			</div>
			<section className='social-media'>
				<div className='social-media-wrap'>
					<div className='footer-logo'>
						<Link to='/' className='social-logo'>
							<MdFingerprint />
							MR FISH
						</Link>
					</div>
					<small className='website-rights'>
						MR FISH &copy; {new Date().getFullYear()}
					</small>
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
			</section>
		</div>
	);
}

export default Footer;
