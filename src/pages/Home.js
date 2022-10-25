import React from 'react';
import Courses from '../components/Courses';
import Faq from '../components/Faq';
import Hero from '../components/Hero';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Courses></Courses>
            <Faq></Faq>
        </div>
    );
};

export default Home;