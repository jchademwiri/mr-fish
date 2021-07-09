import React from 'react';
import { Button } from '../Button';

import './Hero.css';
const Hero = () => {
	return (
		<>
			<div className='hero-container'>
				<video src='/videos/video-2.mp4' autoPlay loop muted />
				<h1>HEALTHY MEALS AWAITS</h1>
				<p>What are you waiting for?</p>

				<div className='hero-btns'>
					<Button
						className='btns'
						buttonStyle='btn--outline'
						buttonSize='btn--large'>
						Get Started
					</Button>
					<Button
						className='btns'
						buttonStyle='btn--primary'
						buttonSize='btn--large'>
						Place Order
					</Button>
				</div>
			</div>
		</>
	);
};

export default Hero;
