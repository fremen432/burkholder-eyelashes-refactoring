import React from 'react';
import Hero from '../components/Hero';
import Collections from '../components/Collections';
import Products from './Products';

const Home = () => {
    return (
        <div>
            <Hero />
            <Products />
        </div>
    )
}

export default Home;