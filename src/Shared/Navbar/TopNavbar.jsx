import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faCog, faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link } from 'react-router-dom';



const TopNavbar = () => {
    const {user,loading,logout} = useContext(AuthContext)
    

    return (
        <div>
            <div className="navbar text-lg  bg-black bg-opacity-10 px-20 lg:px-40">
                <div className="navbar-start">
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
                                <a>Product</a>
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
                            <li>
                                <a>Pages</a>
                                <ul className="p-2">
                                    <li><a>About Us</a></li>
                                    <li><a>Contact Us</a></li>
                                    <li><a>FAQ</a></li>
                                    <li><a>Portfolio</a></li>
                                    <li><a>Wishlist</a></li>
                                    <li><a>LookBook</a></li>
                                </ul>
                            </li>
                            <li><a>Blog</a></li>
                        </ul>
                    </div>
                    <p className='me-3'>Announce something here</p>
                    <FontAwesomeIcon icon={faPhone} className='px-3' />
                    <p> CALL US: 123-456-7890</p>
                </div>
                <div className="navbar-center hidden lg:flex">

                </div>

                <div className="navbar-end ">
                    <p className='me-3'>Wishlist</p>
                    <ul>
                        <li>
                            <details>
                                <summary> My Account</summary>
                                <ul className="p-2">
                                    {user ? (
                                        <>
                                            <li><a>Account</a></li>
                                            
                                            <li onClick={logout}><a>Log Out</a></li>
                                        </>
                                    ) : (
                                        <>
                                            <li><a href="/login">Login</a></li>
                                            <li><a href="/register">Register</a></li>
                                        </>
                                    )}
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="navbar bg-base-100 text-lg px-20 lg:px-40 ">
                <div className="navbar-start">
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
                                <a>Product</a>
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
                            <li>
                                <a>Pages</a>
                                <ul className="p-2">
                                    <li><a>About Us</a></li>
                                    <li><a>Contact Us</a></li>
                                    <li><a>FAQ</a></li>
                                    <li><a>Portfolio</a></li>
                                    <li><a>Wishlist</a></li>
                                    <li><a>LookBook</a></li>
                                </ul>
                            </li>
                            <li><a>Blog</a></li>
                        </ul>
                    </div>
                    <a href="/">
                        <img className="h-20 w-100" src="/src/assets/logo/QuiEasyCart2.png" alt="Logo" />
                    </a>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a href="/">Home</a></li>
                        <li>
                            <details>
                                <summary>Shop</summary>
                                <ul className="p-2">
                                    <li><a>Men Items</a></li>
                                    <li><a>Women Items</a></li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <details>
                                <summary>Product</summary>
                                <ul className="p-2">
                                    <li><a>Men Items</a></li>
                                    <li><a>Women Items</a></li>
                                </ul>
                            </details>
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
                        <li>
                            <details>
                                <summary>Parent</summary>
                                <ul className="p-2">
                                    <li><a>About Us</a></li>
                                    <li><a>Contact Us</a></li>
                                    <li><a>FAQ</a></li>
                                    <li><a>Portfolio</a></li>
                                    <li><a>Wishlist</a></li>
                                    <li><a>LookBook</a></li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <details>
                                <summary>Pages</summary>
                                <ul className="p-2">
                                    <li><a>About Us</a></li>
                                    <li><a>Contact Us</a></li>
                                    <li><a>FAQ</a></li>
                                    <li><a>Portfolio</a></li>
                                    <li><a>Wishlist</a></li>
                                    <li><a>LookBook</a></li>
                                </ul>
                            </details>
                        </li>
                        <li><a>BLOG</a></li>
                    </ul>
                </div>
                <div className="navbar-end mx-2 px-4">
                    <FontAwesomeIcon icon={faCog} className='px-3' />
                    <FontAwesomeIcon icon={faSearch} className='px-3' />
                    <Link to='/cart'><FontAwesomeIcon icon={faShoppingCart} className='px-3' /></Link>
                </div>
            </div>
        </div>
    );
};

export default TopNavbar;