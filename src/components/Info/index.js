import React from 'react';
import { Button } from '../Button';
import { Link } from 'react-router-dom';
import './Info.css';
const Info = ({
	lightBg,
	topLine,
	lightText,
	lightTextDesc,
	headline,
	description,
	buttonLabel,
	imgStart,
	img,
	alt,
}) => {
	return (
		<>
			<div
				className={
					lightBg ? 'home__info-section lightBg' : 'home__info-section darkBg'
				}>
				<div className='container'>
					<div
						className='row home__info-row'
						style={{
							display: 'flex',
							flexDirection: imgStart === 'start' ? 'row-reverse' : 'row',
						}}>
						<div className='col'>
							<div className='home__info-text-wrapper'>
								<div className='top-line'>{topLine}</div>
								<h1 className={lightText ? 'heading' : 'heading dark'}>
									{headline}
								</h1>
								<p
									className={
										lightTextDesc
											? 'home__info-subtitle'
											: 'home__info-subtitle dark'
									}>
									{description}
								</p>
								<Link to='/'>
									<Button buttonSize='btn--wide' buttonColor='blue'>
										{buttonLabel}
									</Button>
								</Link>
							</div>
						</div>
						<div className='col'>
							<div className='home__info-img-wraper'>
								<img src={img} alt={alt} className='home__info-img' />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Info;
