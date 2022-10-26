import React from 'react';
import Courses from '../components/Courses';
import Faq from '../components/Faq';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Hero></Hero>
            <Courses></Courses>
            <Faq></Faq>
        </div>
    );
};

export default Home;