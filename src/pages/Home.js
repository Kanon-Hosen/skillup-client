import React from 'react';
import Courses from '../components/Courses';
import Faq from '../components/Faq';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Courses></Courses>
            <Faq></Faq>
            <Footer></Footer>
        </div>
    );
};

export default Home;