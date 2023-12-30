import React from 'react';
import Footer from '../Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';
import TopNavbar from './../Shared/Navbar/TopNavbar';

const Main = () => {
    return (
        <div>
            <TopNavbar></TopNavbar>
             <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;