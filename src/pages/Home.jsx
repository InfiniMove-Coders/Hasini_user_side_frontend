import React, { useEffect } from 'react';
import Category1 from '../components/Categories/Category1';
import Category2 from '../components/Categories/Category2';
import Category3 from '../components/Categories/Category3';
import Category4 from '../components/Categories/Category4';
import Footer from '../components/footer/footer';
import Carousel from '../components/carousel/Carousel';
import Navbar1 from '../components/navbar/Navbar1';
import Navbar2 from '../components/navbar/Navbar2';
import Navbar3 from '../components/navbar/Navbar3';

const Home = () => {

	useEffect(() => {
		window.scroll(0, 0);
	}, []);

	return (
		<div>
			<div className='w-[100%] h-auto fixed top-[0px] z-[5]'>
				<Navbar1 />
				<Navbar2 />
				<Navbar3 keyStatusState={-1} />
			</div>
			<Carousel />
			<Category1 />
			<Category2 />
			<Category3 />
			<Category4 />
			<Footer />
		</div>
	)
}

export default Home