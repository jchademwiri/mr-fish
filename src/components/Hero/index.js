import React from 'react';
import { Button } from '../Button';
import { Link } from 'react-router-dom';

import './Hero.css';
const Hero = () => {
	return (
		<>
			<div className='hero-container'>
				{/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
				<h1>HEALTHY MEALS AWAITS</h1>
				<p>What are you waiting for?</p>
				<div className='hero-btns'>
					<Link to='/letscook'>
						<Button
							className='btns'
							buttonStyle='btn--outline'
							buttonSize='btn--large'>
							LETS COOK
						</Button>
					</Link>
					<Link to='/order'>
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
