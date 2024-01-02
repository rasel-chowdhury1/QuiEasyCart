import React from 'react';

const Dashboard = () => {

    const menuItems = [
        { id: 1, label: 'Dashboard', link: '/dashboard' },
        { id: 2, label: 'Stats', link: '/stats' },
        { id: 3, label: 'User', link: '/user' },
        { id: 4, label: 'Product', link: '/product' },
        { id: 5, label: 'Orders', link: '/orders' },
        { id: 6, label: 'Reviews', link: '/reviews' },
        { id: 7, label: 'Payments', link: '/payments' },
        { id: 8, label: 'Hot Offers', link: '/hotoffers' },
        { id: 9, label: 'Appearance', link: '/appearance' },
        { id: 10, label: 'Settings', link: '/settings' },
        { id: 11, label: 'Helps', link: '/helps' },
        // Add more menu items as needed
    ];
    return (
        <div className="admin-dashboard flex">
            {/* Sidebar */}
            <div className="sidebar  text-white mx-2 bg-black opacity-80 text-8xl w-60 min-h-screen rounded-md">
                <ul className="menu ">
                    <a href="/"> <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className=" w-20 h-20 rounded-lg shadow-2xl p-2" /></a>
                    {menuItems.map((item) => (
                        <li className='text-2xl btn btn-ghost ' key={item.id}>
                            <a href={item.link}>{item.label}</a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Main content */}
            <div className="main-content  min-h-screen bg-black  text-black rounded-md">
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row">
                        <div className="logo flex justify-center items-center h-full"> 
                            <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                        </div>

                        <div>
                            <h1 className="text-5xl font-bold">Box Office News!</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>




    );
};

export default Dashboard;