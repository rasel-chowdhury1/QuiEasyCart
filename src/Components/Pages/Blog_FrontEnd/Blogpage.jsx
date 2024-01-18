import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Assuming you have Axios for making API requests
import { Link } from 'react-router-dom';


const Blogpage = () => {
    const [blogs, setBlogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5); // Number of posts per page

    // Function to fetch blogs from the backend
    const fetchBlogs = async () => {
        try {
            const response = await axios.get('/allBlogs'); // Replace with your backend endpoint
            setBlogs(response.data);
        } catch (error) {
            console.error('Error fetching blogs:', error);
        }
    };

    useEffect(() => {
        fetch("https://quieasycarts.onrender.com/allBlogs")
            .then(res => res.json())
            .then(data => setBlogs(data))

    }, []);


    // // Pagination logic
    // const indexOfLastPost = currentPage * postsPerPage;
    // const indexOfFirstPost = indexOfLastPost - postsPerPage;
    // const currentPosts = blogs.slice(indexOfFirstPost, indexOfLastPost);

    // // Function to change page
    // const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="blog-page mx-20 flex p-2 gap-4">


            <div className="blog-sidebar hidden sm:block m-2 shadow-xl p-6 w-1/5">


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
            <div className="blog-main w-full m-1">
                <h1 className='text-3xl p-2'>Blog Page</h1>
                <div className="blog-posts  ">
                    {/* Display each blog post */}
                    {blogs.map(blog => (
                        <div key={blog._id} className="card card-side w-full bg-base-100 shadow-xl  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 m-4 p-4 gap-4">
                            <figure>
                                <img className='rounded-xl' src={blog.image} alt="Movie" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{blog.title}</h2>
                                <p>{blog.content}</p>
                                <div className="card-actions justify-end">
                                    <Link to={`/blogdetails/${blog._id}`} className="btn btn-accent p-2 m-2">View Blog</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="pagination p-2 m-2">
                    {Array.from({ length: Math.ceil(blogs.length / postsPerPage) }, (_, index) => (
                        <button className='btn btn-ghost' key={index} onClick={() => paginate(index + 1)}>
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>

        </div>
    );
};
export default Blogpage;