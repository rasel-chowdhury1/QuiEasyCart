import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faCog, faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { TiShoppingCart } from "react-icons/ti";
import useCart from '../../CustomHook/useCart';


const TopNavbar = () => {
    const { user, loading, logout } = useContext(AuthContext)
    const isAdmin = true;
    const [cart] = useCart();

    return (
        <div className='shadow-xl py-2 '>

            {/* Top Navbar */}
            <div className="navbar text-lg  bg-black bg-opacity-10 px-10 lg:px-20 ">
                <div className="navbar-start ">
                    <p className=''>Announce something here</p>
                    <FontAwesomeIcon icon={faPhone} className='px-3 hidden sm:inline-block' />
                    <p className='hidden sm:inline-block'> CALL US: 123-456-7890</p>
                </div>



                <div className="navbar-end ">
                    <a href="/" ><p className='me-3'>❤️Wishlist</p></a>


                </div>
            </div>


            {/* Main Navbar */}
            <div className="navbar bg-base-100 text-lg  lg:px-20 ">


                <div className="navbar-start">
                    {/* menu for small devices */}
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a href="/">Home</a></li>
                            <li>
                                <a>Shop</a>
                                <ul className="p-2">
                                    <li><a>Men Items</a></li>
                                    <li><a>Women Items</a></li>
                                </ul>
                            </li>
                            <li>
                                <Link to='/products'>Product</Link>
                                <ul className="p-2">
                                    <li><a>Men Items</a></li>
                                    <li><a>Women Items</a></li>
                                </ul>
                            </li>
                            <li>
                                <a>Features</a>
                                <ul className="p-2">
                                    <li><a>Exclusive Features</a></li>
                                    <li><a>New Features</a></li>
                                    <li><a>Product Features</a></li>
                                    <li><a>Advance Features</a></li>
                                    <li><a>Women Items</a></li>
                                </ul>
                            </li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                            <li><Link to="/faq">FAQ</Link></li>
                            <li ><a href="/blog" >Blog</a></li>
                            <li><a href="/help">Help</a></li>
                        </ul>
                    </div>

                    <a href="/">
                        <img className="h-20 w-100 hidden sm:inline-block" src="/src/assets/logo/QuiEasyCart2.png" alt="Logo" />
                    </a>
                </div>

                <div className="navbar-center hidden lg:flex ml-52">
                    <ul className="menu menu-horizontal px-1">
                        <li><a href="/">Home</a></li>

                        <li>
                            {/* <details>
                                <summary>Product</summary>
                                <ul className="p-2">
                                    <li><a>Men Items</a></li>
                                    <li><a>Women Items</a></li>
                                </ul>
                            </details> */}
                            <Link to="/products"><summary>Product</summary></Link>
                        </li>
                        <li>
                            <details>
                                <summary>Features</summary>
                                <ul className="p-2">
                                    <li><a>Exclusive Features</a></li>
                                    <li><a>New Features</a></li>
                                    <li><a>Product Features</a></li>
                                    <li><a>Advance Features</a></li>
                                    <li><a>Women Items</a></li>
                                </ul>
                            </details>
                        </li>

                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                        <li><Link to="/faq">FAQ</Link></li>
                        <li><Link to="/wishlist">Wishlist</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/help">Help</Link></li>
                    </ul>
                </div>
                <div className="navbar-end mx-2 px-4">
                    
                    {/* <Link to='/cart'>
                        <button className="btn">
                            <TiShoppingCart/>
                            <div className="badge badge-secondary">+{cart?.length || 0}</div>
                        </button>
                    </Link> */}

                    <Link to='/cart'  className="indicator mr-4">
                        <span className="indicator-item badge badge-secondary">+{cart?.length || 0}</span> 
                        <button className="btn"><TiShoppingCart className='text-2xl'/></button>
                    </Link>
           

                    {/* Profile section on main navbar */}
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">


                            {user ? (
                                <>
                                    <li>
                                        <Link to='/profile' className="justify-between">
                                            Profile
                                            <span className="badge">New</span>
                                        </Link>
                                    </li>
                                    <li>{isAdmin ? <><Link to='/admin'>Admin</Link></> : <><Link>Setting</Link></>}</li>
                                    <li><Link to='/cart'>Order</Link></li>

                                    <li onClick={logout}><a>Log Out</a></li>
                                </>
                            ) : (
                                <>
                                    <li><a href="/login">Login</a></li>
                                    <li><a href="/register">Register</a></li>
                                </>
                            )}

                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default TopNavbar;