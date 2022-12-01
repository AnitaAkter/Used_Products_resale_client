import React from 'react';
import Advertise from './Advertise';
import Banner from './Banner';
import Category from './Category';
import ContactUs from './ContactUs';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Advertise></Advertise>
            <ContactUs></ContactUs>
            <hr />
        </div>
    );
};

export default Home;