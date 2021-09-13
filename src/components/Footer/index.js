import React from 'react';
import './Footer.css';
import { Button } from '../Button';
import { Link } from 'react-router-dom';
import {
	FaFacebook,
	FaInstagram,
	FaYoutube,
	FaWhatsapp,

} from 'react-icons/fa';

import { GiCirclingFish } from 'react-icons/gi';

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
						<Link
							className='whatsapp-link'
							to={'//chat.whatsapp.com/J6gFImaNNRP5fZigXyiv18'}
							target='blank'
							rel='noopener noreferrer'>
							<FaWhatsapp className='social-icon-link WIcon' />
							Join WhatsApp Group
						</Link>
					</Button>
				</div>
			</section>
			<div className='footer-links'>
				<div className='footer-link-wrapper'>
					<div className='footer-link-items'>
						<h2>About Us</h2>
						<Link to='/'>Home</Link>
						<Link to='/'>About</Link>
						{/* <Link to='/'>Careers</Link>
						<Link to='/'>Investors</Link>
						<Link to='/'>Terms of Service</Link> */}
					</div>
					<div className='footer-link-items'>
						<h2>Contact Us</h2>
						<Link to='/contact'>Contact</Link>
						<Link
							to={'//chat.whatsapp.com/J6gFImaNNRP5fZigXyiv18'}
							target='blank'
							aria-label='WhatsApp'>
							WhatsApp
						</Link>
						{/* <Link to='/'>Destinations</Link>
						<Link to='/'>Sponsorships</Link> */}
					</div>
				</div>
				<div className='footer-link-wrapper'>
					<div className='footer-link-items'>
						<h2>Our Products</h2>
						<Link to='/'>Breams</Link>
						<Link to='/'>Matemba</Link>
						{/* <Link to='/'>Agency</Link>
						<Link to='/'>Influencer</Link> */}
					</div>
					<div className='footer-link-items'>
						<h2>Social Media</h2>
						<Link
							to={'//www.facebook.com/seaharvestZW'}
							target='_blank'
							aria-label='Facebook'>
							Facebook
						</Link>
						<Link
							to={'//chat.whatsapp.com/J6gFImaNNRP5fZigXyiv18'}
							target='blank'
							aria-label='WhatsApp'>
							WhatsApp
						</Link>
						{/* <Link to='/'>Youtube</Link>
						<Link to='/'>Twitter</Link> */}
					</div>
				</div>
			</div>
			<section className='social-media'>
				<div className='social-media-wrap'>
					<div className='footer-logo'>
						<Link to='/' className='social-logo'>
							<GiCirclingFish className='navbar-icon' />
							SEA HARVEST
						</Link>
					</div>
					{/* <div className='designer'>
						<div className='footer-logo'>
							Designed by:
							<a href='#' target='_blank' rel='noopener noreferrer'>
								Jacob Chademwiri
							</a>
						</div>
					</div> */}
					<small className='website-rights'>
						SEA HARVEST &copy; {new Date().getFullYear()}
					</small>
					<div className='social-icons'>
						<Link
							className='social-icon-link'
							to={'//chat.whatsapp.com/J6gFImaNNRP5fZigXyiv18'}
							target='blank'
							aria-label='WhatsApp'>
							<FaWhatsapp />
						</Link>
						<Link
							className='social-icon-link'
							to={'//www.facebook.com/seaharvestZW'}
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
			</section>
		</div>
	);
}

export default Footer;
