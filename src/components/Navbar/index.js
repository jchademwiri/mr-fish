import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { MdFingerprint } from 'react-icons/md';
import './Navbar.css';
import { IconContext } from 'react-icons/lib';

import { Button } from '../Button';

const Navbar = () => {
	const [click, setClick] = useState(false);
	const [button, setButton] = useState(true);

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

	return (
		<>
			<IconContext.Provider value={{ color: '#fff' }}>
				<div className='navbar'>
					<div className='navbar-container container'>
						<Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
							<MdFingerprint className='navbar-icon' />
							MR FISH
						</Link>
						<div className='menu-icon' onClick={handleClick}>
							{click ? <FaTimes /> : <FaBars />}
						</div>

						<ul className={click ? 'nav-menu active' : 'nav-menu'}>
							<li className='nav-item'>
								<Link to='/' className='nav-links' onClick={closeMobileMenu}>
									Home
								</Link>
							</li>
							<li className='nav-item'>
								<Link
									to='/letscook'
									className='nav-links'
									onClick={closeMobileMenu}>
									Let's Cook
								</Link>
							</li>
							<li className='nav-item'>
								<Link
									to='/about'
									className='nav-links'
									onClick={closeMobileMenu}>
									About
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
									<Link to='/order' className='btn-link'>
										<Button buttonStyle='btn--outline' buttonSize='btn--medium'>
											Order Now
										</Button>
									</Link>
								) : (
									<Link to='/order' className='btn-link'>
										<Button
											buttonStyle='btn--outline'
											buttonSize='btn--mobile'
											onClick={closeMobileMenu}>
											Order Now
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