import React from 'react';
import img1 from '../../../assets/images/img-1.jpg'
import img2 from '../../../assets/images/img-2.jpg'
import img3 from '../../../assets/images/img-3.jpg'
import img4 from '../../../assets/images/img-4.jpg'
import Slider from "react-slick";
import avatar from '../../../assets/images/profile_avatar.jpg'

import img5 from '../../../assets/images/img-5.jpg'
import img6 from '../../../assets/images/img-6.jpg'
import img7 from '../../../assets/images/img-7.jpg'
import img8 from '../../../assets/images/img-8.jpg'


const settings = {
    autoplay: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
}

const relatedSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
};



const Help_details = () => {
    return (
        <div className="blog-page mx-20 flex p-2 gap-4">


            <div className="blog-sidebar m-2 shadow-xl p-6 w-1/5">


                <ul className="menu menu-horizontal bg-base-200 rounded-box mt-6 w-full mb-4 align-center">
                    <li>
                        <a className="tooltip" data-tip="Home">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                        </a>
                    </li>
                    <li>
                        <a className="tooltip" data-tip="Details">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        </a>
                    </li>
                    <li>
                        <a className="tooltip" data-tip="Stats">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                        </a>
                    </li>
                </ul>


                <select className="select select-success w-full max-w-xs">
                    <option disabled selected>Pick your favorite anime</option>
                    <option>One Piece</option>
                    <option>Naruto</option>
                    <option>Death Note</option>
                    <option>Attack on Titan</option>
                    <option>Bleach</option>
                    <option>Fullmetal Alchemist</option>
                    <option>Jojos Bizarre Adventure</option>
                </select>

                <div className="stats stats-vertical shadow">

                    <div className="stat">
                        <div className="stat-title">Downloads</div>
                        <div className="stat-value">31K</div>
                        <div className="stat-desc">Jan 1st - Feb 1st</div>
                    </div>

                    <div className="stat">
                        <div className="stat-title">New Users</div>
                        <div className="stat-value">4,200</div>
                        <div className="stat-desc">↗︎ 400 (22%)</div>
                    </div>

                    <div className="stat">
                        <div className="stat-title">New Registers</div>
                        <div className="stat-value">1,200</div>
                        <div className="stat-desc">↘︎ 90 (14%)</div>
                    </div>

                </div>


                <div className="blog-sidebar">



                    <div className="grid grid-flow-col gap-2 my-6 text-center auto-cols-max">
                        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                            <span className="countdown font-mono text-3xl">
                                <span style={{ "--value": 15 }}></span>
                            </span>
                            days
                        </div>
                        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                            <span className="countdown font-mono text-3xl">
                                <span style={{ "--value": 10 }}></span>
                            </span>
                            hours
                        </div>
                        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                            <span className="countdown font-mono text-3xl">
                                <span style={{ "--value": 24 }}></span>
                            </span>
                            min
                        </div>
                        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                            <span className="countdown font-mono text-3xl">
                                <span style={{ "--value": 54 }}></span>
                            </span>
                            sec
                        </div>
                    </div>


                    <div className="sidebar-section">
                        <h3 className='text-2xl pt-4'>Category</h3>
                        <hr />
                        {/* Display blog categories */}
                        <ul>
                            <li className='py-1'>Technology</li>
                            <li className='py-1'>Fashion</li>
                            <li className='py-1'>Electronics</li>
                            <li className='py-1'>Medicine</li>
                            <li className='py-1'>Grocery</li>
                            {/* Add more categories */}
                        </ul>
                    </div>


                    <div className="sidebar-section">
                        <h3 className='text-2xl pt-4'>Keyword</h3>
                        <hr />
                        {/* Display blog keywords */}
                        <ul>
                            <li className='py-1'>Mobile</li>
                            <li className='py-1'>Apple Mobile</li>
                            <li className='py-1'>Tablet</li>
                            <li className='py-1'>Baby Food</li>
                            <li className='py-1'>Men's T-Shirt</li>
                            <li className='py-1'>React</li>
                            <li className='py-1'>Design</li>
                            {/* Add more keywords */}
                        </ul>
                    </div>
                </div>



                <div className="sidebar-section">
                    <h3 className='text-2xl pt-4'>Archive</h3>
                    <hr />
                    {/* Display blog archive */}
                    <ul>
                        <li className='py-1'>January 2023</li>
                        <li className='py-1'>February 2023</li>
                        <li className='py-1'>March 2023</li>
                        <li className='py-1'>April 2023</li>
                        <li className='py-1'>May 2023</li>
                        <li className='py-1'>June 2023</li>
                        <li className='py-1'>July 2023</li>
                        <li className='py-1'>August 2023</li>
                        <li className='py-1'>September 2023</li>
                        <li className='py-1'>October 2023</li>
                        <li className='py-1'>November 2023</li>
                        <li className='py-1'>December 2023</li>
                        <li className='py-1'>January 2024</li>
                        {/* Add more months */}
                    </ul>
                </div>



            </div>

            {/* main blog section  */}
            <div className="blog-main  w-4/5 m-2">
                {/* <h1 className='text-3xl p-2'>Blog Page</h1> */}
                <div className="blog-posts ">
                    {/* Display each blog post */}


                    <div className="hero h-30vh rounded" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 p-20 text-5xl font-bold">Hello there</h1>

                            </div>
                        </div>
                    </div>
                    <div>
                        <h1>10 Healthy Snacks for Busy Developers</h1>
                        <p>
                            In the fast-paced world of coding, it's essential to stay energized and focused.
                            Here are 10 delicious and nutritious snacks that are perfect for busy developers.
                        </p>
                        <p>
                            <strong>1. Mixed Nuts</strong><br />
                            A handful of mixed nuts provides protein, healthy fats, and essential nutrients.
                        </p>
                        <p>
                            <strong>2. Greek Yogurt with Berries</strong><br />
                            Greek yogurt topped with fresh berries is a refreshing and protein-packed snack.
                        </p>
                        <p>
                            <strong>3. Hummus and Veggies</strong><br />
                            Dip assorted veggies like carrots, cucumbers, and bell peppers in hummus for a tasty treat.
                        </p>
                        <p>
                            <strong>4. Avocado Toast</strong><br />
                            Whole-grain toast with creamy avocado slices makes a satisfying snack loaded with healthy fats.
                        </p>
                        <p>
                            <strong>5. Apple Slices with Almond Butter</strong><br />
                            Apples paired with almond butter create a delicious blend of sweetness and protein.
                        </p>
                        <p>
                            <strong>6. Rice Cakes with Peanut Butter</strong><br />
                            Spread peanut butter over rice cakes for a quick and energizing snack.
                        </p>
                        <p>
                            <strong>7. Trail Mix</strong><br />
                            A homemade trail mix with nuts, dried fruits, and dark chocolate chips is a convenient on-the-go snack.
                        </p>
                        <p>
                            <strong>8. Cottage Cheese with Pineapple</strong><br />
                            Enjoy a serving of cottage cheese topped with pineapple chunks for a protein-rich snack.
                        </p>
                        <p>
                            <strong>9. Popcorn</strong><br />
                            Air-popped popcorn is a low-calorie snack that's perfect for satisfying cravings.
                        </p>
                        <p>
                            <strong>10. Granola Bars</strong><br />
                            Choose granola bars made with whole grains, nuts, and seeds for a healthy snack option.
                        </p>
                        <p>
                            Incorporating these nutritious snacks into your routine can help keep your energy levels up
                            and enhance focus during long coding sessions.
                        </p>
                    </div>


                    <div className="stats shadow">

                        <div className="stat">
                            <div className="stat-figure text-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                            </div>
                            <div className="stat-title">Total Likes</div>
                            <div className="stat-value text-primary">25.6K</div>
                            <div className="stat-desc">21% more than last month</div>
                        </div>

                        <div className="stat">
                            <div className="stat-figure text-secondary">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                            </div>
                            <div className="stat-title">Page Views</div>
                            <div className="stat-value text-secondary">2.6M</div>
                            <div className="stat-desc">21% more than last month</div>
                        </div>

                        <div className="stat">
                            <div className="stat-figure text-secondary">
                                <div className="avatar online">
                                    <div className="w-16 rounded-full">
                                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                            </div>
                            <div className="stat-value">86%</div>
                            <div className="stat-title">Tasks done</div>
                            <div className="stat-desc text-secondary">31 tasks remaining</div>
                        </div>

                    </div>


                </div>
                {/* Releted blog post here */}
                <section className='relative-product h-auto px-12 mb-12'>
                    <h2 className="text-center font-semibold text-2xl">Relative Blogs</h2>
                    <div className="flex justify-center">
                        <Slider {...relatedSettings} className=" w-10/12  mt-8">
                            <div className='relative cart-body ml-6'>
                                <div className='img-body relative'>
                                    <p className='uppercase absolute ml-52 font-semibold mt-9'>sale</p>
                                    <img src={img1} className='w-60 ' alt="" />
                                </div>

                                <div className='mt-5'>

                                    <h4 className='text-center text-gray-400 text-lg font-semibold'>Oil-in-Serum</h4>
                                    <div className="flex justify-center">
                                        <p className='text-2xl font-semibold leading-10'>$500.00</p>
                                        <span className='line-through ml-2 text-gray-400 mt-3'>$700.00</span>
                                    </div>
                                </div>


                            </div>
                            <div className='ml-6 relative cart-body '>
                                <div className='img-body relative'>
                                    <p className='uppercase absolute ml-52 font-semibold mt-9'>sale</p>
                                    <img src={img2} className='w-60 ' alt="" />
                                </div>

                                <div className='mt-5'>

                                    <h4 className='text-center text-gray-400 text-lg font-semibold'>Oil-in-Serum</h4>
                                    <div className="flex justify-center">
                                        <p className='text-2xl font-semibold leading-10'>$500.00</p>
                                        <span className='line-through ml-2 text-gray-400 mt-3'>$700.00</span>
                                    </div>
                                </div>


                            </div>
                            <div className='ml-6 relative cart-body'>
                                <div className='img-body relative'>
                                    <button className='uppercase bg-rose-600 absolute ml-3 rounded-r-lg text-white p-1 font-bold mt-3'>sale</button>
                                    <img src={img3} className='w-60 ' alt="" />
                                </div>

                                <div className='mt-5 relative cart-body'>

                                    <h4 className='text-center text-gray-400 text-lg font-semibold'>Oil-in-Serum</h4>
                                    <div className="flex justify-center">
                                        <p className='text-2xl font-semibold leading-10'>$500.00</p>
                                        <span className='line-through ml-2 text-gray-400 mt-3'>$700.00</span>
                                    </div>
                                </div>


                            </div>
                            <div className='ml-6 relative cart-body'>
                                <div className='img-body relative'>
                                    <p className='uppercase absolute ml-52 font-semibold mt-9'>sale</p>
                                    <img src={img4} className='w-60 ' alt="" />
                                </div>

                                <div className='mt-5'>

                                    <h4 className='text-center text-gray-400 text-lg font-semibold'>Oil-in-Serum</h4>
                                    <div className="flex justify-center">
                                        <p className='text-2xl font-semibold leading-10'>$500.00</p>
                                        <span className='line-through ml-2 text-gray-400 mt-3'>$700.00</span>
                                    </div>
                                </div>

                            </div>
                            <div className='ml-6 relative cart-body'>
                                <div className='img-body relative'>
                                    <p className='uppercase absolute ml-52 font-semibold mt-9'>sale</p>
                                    <img src={img5} className='w-60 ' alt="" />
                                </div>

                                <div className='mt-5'>

                                    <h4 className='text-center text-gray-400 text-lg font-semibold'>Oil-in-Serum</h4>
                                    <div className="flex justify-center">
                                        <p className='text-2xl font-semibold leading-10'>$500.00</p>
                                        <span className='line-through ml-2 text-gray-400 mt-3'>$700.00</span>
                                    </div>
                                </div>

                            </div>
                            <div className='ml-6 relative cart-body'>
                                <div className='img-body relative'>
                                    <p className='uppercase absolute ml-52 font-semibold mt-9'>sale</p>
                                    <img src={img6} className='w-60 ' alt="" />
                                </div>

                                <div className='mt-5'>

                                    <h4 className='text-center text-gray-400 text-lg font-semibold'>Oil-in-Serum</h4>
                                    <div className="flex justify-center">
                                        <p className='text-2xl font-semibold leading-10'>$500.00</p>
                                        <span className='line-through ml-2 text-gray-400 mt-3'>$700.00</span>
                                    </div>
                                </div>

                            </div>
                        </Slider>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Help_details;