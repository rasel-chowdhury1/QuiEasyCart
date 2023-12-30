import React from 'react';
import Footer from '../Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';
import TopNavbar from '../Shared/Navbar/topNavbar';
import MainNavbar from '../Shared/Navbar/mainNavbar';

const Main = () => {
    return (
        <div>
            <TopNavbar></TopNavbar>
            <MainNavbar></MainNavbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;