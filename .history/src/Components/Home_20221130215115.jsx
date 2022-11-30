import React from 'react';
import Banner from './Banner';
import Category from './Category';
import ContactUs from './ContactUs';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <hr />
            <ContactUs></ContactUs>
            <hr />
        </div>
    );
};

export default Home;