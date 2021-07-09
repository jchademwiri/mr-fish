import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages';
import Footer from './components/Footer';
import Contact from './pages/contact';
import Order from './pages/order';
import About from './pages/about';
import Letscook from './pages/letscook';
import ScrollToTop from './components/ScrollToTop';

function App() {
	return (
		<>
			<Router>
				<ScrollToTop />
				<Navbar />
				<Switch>
					<Route path='/' exact component={Home} />
					<Route path='/letscook' component={Letscook} />
					<Route path='/about' component={About} />
					<Route path='/contact' component={Contact} />
					<Route path='/order' component={Order} />
				</Switch>
				<Footer />
			</Router>
		</>
	);
}

export default App;
