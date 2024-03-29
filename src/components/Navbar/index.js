import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

import { GiCirclingFish } from 'react-icons/gi';
import './Navbar.css';
import { IconContext } from 'react-icons/lib';
import { Button } from '../Button';

const Navbar = () => {
	const [click, setClick] = useState(false);
	const [button, setButton] = useState(true);
	const [navbar, setNavbar] = useState(false);

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	const showButton = () => {
		if (window.innerWidth <= 960) {
			setButton(false);
		} else {
			setButton(true);
		}
	};

	useEffect(() => {
		showButton();
	}, []);

	window.addEventListener('resize', showButton);

	const changeBackground = () => {
		if (window.scrollY >= 80) {
			setNavbar(true);
			// console.log(window.scrollY);
		} else if (window.scrollY <= 80) {
			setNavbar(false);
		} else {
			setNavbar(false);
		}
	};
	window.addEventListener('scroll', changeBackground);

	return (
		<>
			<IconContext.Provider value={{ color: '#fff' }}>
				<div className={navbar ? 'navbar active' : 'navbar'}>
					<div className='navbar-container container'>
						<Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
							<GiCirclingFish className='navbar-icon' />
							SEA HARVEST
						</Link>
						<div className='menu-icon' onClick={handleClick}>
							{click ? <FaTimes /> : <FaBars />}
						</div>

						<ul className={click ? 'nav-menu active count' : 'nav-menu'}>
							<li className='nav-item'>
								<Link to='/' className='nav-links' onClick={closeMobileMenu}>
									Home
								</Link>
							</li>
							<li className='nav-item'>
								<Link
									to='/letscook'
									className='nav-links '
									onClick={closeMobileMenu}>
									Let's Cook
								</Link>
							</li>
							<li className='nav-item'>
								<Link
									to='/order'
									className='nav-links'
									onClick={closeMobileMenu}>
									Order
								</Link>
							</li>
							<li className='nav-item'>
								<Link
									to='/contact'
									className='nav-links'
									onClick={closeMobileMenu}>
									Contact
								</Link>
							</li>
							<li className='nav-btn'>
								{button ? (
									<Link
										to={'//chat.whatsapp.com/J6gFImaNNRP5fZigXyiv18'}
										className='btn-link'
										target='blank'
										rel='noopener noreferrer'>
										<Button buttonStyle='btn--outline' buttonSize='btn--medium'>
											Join WhatsApp
										</Button>
									</Link>
								) : (
									<Link
										to={'//chat.whatsapp.com/J6gFImaNNRP5fZigXyiv18'}
										className='btn-link'
										target='blank'
										rel='noopener noreferrer'>
										<Button
											buttonStyle='btn--outline'
											buttonSize='btn--mobile'
											onClick={closeMobileMenu}>
											Join WhatsApp
										</Button>
									</Link>
								)}
							</li>
						</ul>
					</div>
				</div>
			</IconContext.Provider>
		</>
	);
};

export default Navbar;
