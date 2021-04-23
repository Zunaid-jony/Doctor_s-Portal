import React, { useEffect } from 'react';

import Banner from '../Components/Banner/Banner';




import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';

import Services from '../Components/Services/Services';


const Home = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="heder-content">
			<Header />
			<Banner />
			<Services />
			
			<Footer />
		</div>
	);
};

export default Home;
