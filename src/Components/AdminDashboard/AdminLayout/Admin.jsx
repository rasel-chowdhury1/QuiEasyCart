import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import TopNavbar from '../../../Shared/Navbar/topNavbar';

const Admin = () => {

    const menuItems = [
        { id: 1, label: 'Dashboard', link: 'admin/dashboard' },
        { id: 2, label: 'Stats', link: 'admin/stats' },
        { id: 3, label: 'User', link: 'admin/user' },
        { id: 4, label: 'Product', link: 'admin/product' },
        { id: 5, label: 'Orders', link: 'admin/orders' },
        { id: 6, label: 'Reviews', link: 'admin/reviews' },
        { id: 7, label: 'Payments', link: 'admin/payments' },
        { id: 8, label: 'Hot Offers', link: 'admin/hotoffers' },
        { id: 9, label: 'Appearance', link: 'admin/appearance' },
        { id: 10, label: 'Settings', link: 'admin/settings' },
        { id: 11, label: 'Help', link: 'admin/help' },
        // Add more menu items as needed
    ];
    return (
        <div>
            <TopNavbar></TopNavbar>
        <div className="admin-dashboard flex">
            {/* Sidebar */}
            <div className="sidebar  text-white mx-2 bg-black opacity-80 text-8xl w-60 min-h-screen rounded-md">
                <ul className="menu ">
                    <a href="/"> <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className=" w-20 h-20 rounded-lg shadow-2xl p-2" /></a>
                    {menuItems.map((item) => (
                        <Link to={item.link} className='text-2xl btn btn-ghost ' key={item.id}>{item.label}</Link>
                    ))}
                </ul>
            </div>

            <Outlet></Outlet>

        </div>
        </div>




    );
};

export default Admin;