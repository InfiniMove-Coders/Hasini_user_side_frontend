import React from 'react';
import Category1 from '../components/Categories/Category1';
import Category2 from '../components/Categories/Category2';
import Category3 from '../components/Categories/Category3';
import Category4 from '../components/Categories/Category4';
import Footer from '../components/footer/footer';

const Home = () => {
	return (
		<div>
			<Category1 />
			<Category2/>
			<Category3/>
			<Category4/>
			<Footer/>
		</div>
	)
}

export default Home