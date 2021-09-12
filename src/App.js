import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages';
import Footer from './components/Footer';
import Contact from './pages/contact';
import Order from './pages/order';
// import About from './pages/about';
import Letscook from './pages/letscook';
import ScrollToTop from './components/ScrollToTop';
import Copyright from './components/Copyright';

function App() {
	useEffect(() => {
		ReactGA.initialize('UA-207433899-1');
		// To Report Page View
		ReactGA.pageview(window.location.pathname + window.location.search);
	}, []);

	useEffect(() => {
		ReactGA.initialize('G-9ES9KKD4KS');
		// To Report Page View
		ReactGA.pageview(window.location.pathname + window.location.search);
	}, []);

	return (
		<>
			<Router>
				<ScrollToTop />
				<Navbar />
				<Switch>
					<Route path='/' exact component={Home} />
					<Route path='/letscook' component={Letscook} />
					{/* <Route path='/about' component={About} /> */}
					<Route path='/contact' component={Contact} />
					<Route path='/order' component={Order} />
				</Switch>
				<Footer />
				<Copyright />
			</Router>
		</>
	);
}

export default App;
