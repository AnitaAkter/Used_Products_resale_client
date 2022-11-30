import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer';
import Navbar from '../Navbar';

const Main = () => {
    return (
        <div className='mx mx-36'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;