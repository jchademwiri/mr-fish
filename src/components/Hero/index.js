import React from 'react';
import { Button } from '../Button';
import { Link } from 'react-router-dom';

import './Hero.css';
const Hero = () => {
	return (
		<>
			<div className='hero-container'>
				<h1>SEA HARVEST</h1>
				<p>Fresh fish from Kariba, for your good health.</p>
				<div className='hero-btns'>
					<Link to='/letscook'>
						<Button
							className='btns'
							buttonStyle='btn--outline'
							buttonSize='btn--large'>
							LETS COOK
						</Button>
					</Link>
					<Link
						// to={'//chat.whatsapp.com/J6gFImaNNRP5fZigXyiv18'}
						to='/order'
						// target='blank'
						rel='noopener noreferrer'>
						<Button
							className='btns'
							buttonStyle='btn--primary'
							buttonSize='btn--wide'
							buttonColor='blue'>
							PLACE ORDER <i className='far fa-play-circle' />
						</Button>
					</Link>
				</div>
			</div>
		</>
	);
};

export default Hero;
