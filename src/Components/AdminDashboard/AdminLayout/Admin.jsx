import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import TopNavbar from '../../../Shared/Navbar/topNavbar';

const Admin = () => {

    const menuItems = [
        { id: 1, label: '🏢 Dashboard', link: '' },
        { id: 2, label: '📊 Stats', link: 'admin/stats' },
        { id: 3, label: '🚹 User', link: 'admin/user' },
        { id: 4, label: '🛍️ Product', link: 'admin/product' },
        { id: 5, label: '💹 Orders', link: 'admin/orders' },
        { id: 6, label: '☮️ Reviews', link: 'admin/reviews' },
        { id: 7, label: '💸 Payments', link: 'admin/payments' },
        { id: 8, label: '🔥 Hot Offers', link: 'admin/hotoffers' },
        { id: 9, label: '📜 Blogs', link: 'admin/blogs' },
        { id: 10, label: '🏗️ Appearance', link: 'admin/appearance' },
        { id: 11, label: '⚙️ Settings', link: 'admin/settings' },
        { id: 12, label: '🎓 Help', link: 'admin/help' },
        { id: 13, label: '🛍️ FAQ', link: 'admin/faq' },
        { id: 14, label: '🚹 Contact', link: 'admin/contact' },
        // Add more menu items as needed
    ];
    return (
        <div>
            <TopNavbar></TopNavbar>
            <div className="admin-dashboard flex shadow-xl">
                {/* Sidebar */}
                <div className="sidebar  text-white mx-2 bg-gradient-to-r from-purple-950 to-pink-500 text-8xl w-80 min-h-screen rounded-md">
                    <ul className="menu ">
                        <div className=' flex justify-left items-center  '>
                            <a href="/admin">
                                <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="w-40 h-40 rounded-tr-full shadow-2xl p-2 animate-pulse" />
                            </a>
                        </div>

                        {menuItems.map((item) => (
                            <Link to={item.link} className='text-2xl text-left p-2 hover:scale-110' key={item.id}>{item.label}</Link>
                        ))}
                    </ul>
                </div>

                <Outlet></Outlet>

            </div>
        </div>




    );
};

export default Admin;