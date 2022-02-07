import React from 'react';
import Hero from '../components/Hero';
import Collections from '../components/Collections';
import Products from './Products';
import Blog from '../components/Blog';

import Auth from '../utils/auth';


const Home = () => {

    // const { loading, data } = useQuery(QUERY_THOUGHTS);
    // const { data: userData } = useQuery(QUERY_ME_BASIC);
    // const thoughts = data?.thoughts || [];
  
    // const loggedIn = Auth.loggedIn();
  

    return (
        <div>
            <Hero />
            {/* <Collections /> */}
            <Products />
            {/* <Blog /> */}
        </div>
    )
}

export default Home;