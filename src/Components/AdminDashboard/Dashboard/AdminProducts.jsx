import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';





const AdminProducts = () => {

    




    // const onSubmit = async (data) => {
    //     console.log(data.image.length);

    //       const formData = new FormData();

    //       // Append each image to formData
    //     //   data.image.fileList.forEach((image, index) => {
    //     //     formData.append(`image${index}`, image[0]);
    //     //   });

    //       for (let index = 0; index < data.image.length; index++) {
    //         // const image = fileList[index];
    //         console.log(data.image[index])
    //         formData.append(`image${index}`, data.image[index]);


    //     }



    //         // Process the response and handle it accordingly
    //         if (imgResponse.success) {
    //           const imageUrls = imgResponse.data.image.map((img) => img.display_url);
    //           const {name,category,size,price,brand,details} = data;
    //           const newItem = {name,category,size,price: parseFloat(price),brand,details,image:imageUrls}
    //           console.log(newItem)
    //         }
    //       } 
    //   };


    // const onSubmit = data => {
    //     console.log(data)
    //     const formData = new FormData()

    //     formData.append('image', data.image[0])

    //     fetch(img_hosting_url, {
    //         method: 'POST',
    //         body: formData
    //     })
    //     .then(res => res.json())
    //     .then(imgResponse => {
    //         if(imgResponse.success){
    //             const imgURL = imgResponse.data.display_url;
    //             const {name,category,size,price,brand,details,image} = data;
    //             const newItem = {name,category,size,price: parseFloat(price),brand,details,image:imgURL}
    //             console.log(newItem)
    //         }
    //     })
    // };

    // const onSubmit = data => {
    //     console.log(data)
    //     const formData = new FormData()
    //     formData.append('image', data.image[0])

    //     fetch(img_hosting_url, {
    //         method: 'POST',
    //         body: formData
    //     })
    //     .then(res => res.json())
    //     .then(imgResponse => {
    //         if(imgResponse.success){
    //             const imgURL = imgResponse.data.display_url;
    //             const {name,category,recipe,price} = data;
    //             const newItem = {name,price: parseFloat(price),category,recipe,image:imgURL}
    //             console.log(newItem)
    //         }
    //     })
    // };

    return (
        <div className=' w-full '>
            <div className="stats shadow-xl w-full p-10 m-10  item-center">

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <div className="stat-title">Total Products</div>
                    <div className="stat-value">31K</div>
                    <div className="stat-desc">Jan 1st - Feb 1st</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                    </div>
                    <div className="stat-title">Total Category</div>
                    <div className="stat-value">4,200</div>
                    <div className="stat-desc">↗︎ 400 (22%)</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                    </div>
                    <div className="stat-title">Total Sales</div>
                    <div className="stat-value">1,200</div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>

            </div>

            <h2 className='m-4 text-5xl text-center shadow-xl p-4 m-2'>Product List </h2>

            <div className="navbar bg-base-100 shadow">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>All Products</a></li>
                            <li><a>Category</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Products</a>
                </div>
                <div className="navbar-center hidden lg:flex text-2xl">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>All Products</a></li>
                        <li><a>Category</a></li>
                    </ul>
                </div>
                <div className="navbar-end">

                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <Link to='admin/addProduct' className="btn" >Add New Product</Link>
                
                </div>
            </div>

            <div className="overflow-x-auto shadow-xl rounded w-full m-4">
                <table className="table ">
                    {/* head */}
                    <thead className=' text-2xl'>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Product</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th> <button className='btn-ghost'>Action</button></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="https://daisyui.com//tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Hart Hagerty</div>
                                        <div className="text-sm opacity-50">United States</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Zemlak, Daniel and Leannon
                                <br />
                                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                            </td>
                            <td>Admin</td>
                            <th>
                                <button className="btn btn-accent  p-2 m-2">details</button>
                                <button className="btn btn-neutral px-4  py-2">Edit</button>
                                <button className="btn btn-secondary  p2 m-2">Delete</button>
                            </th>
                        </tr>
                        {/* row 2 */}
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="https://daisyui.com//tailwind-css-component-profile-3@56w.png" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Brice Swyre</div>
                                        <div className="text-sm opacity-50">China</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Carroll Group
                                <br />
                                <span className="badge badge-ghost badge-sm">Tax Accountant</span>
                            </td>
                            <td>User</td>
                            <th>
                                <button className="btn btn-accent  p-2 m-2">details</button>
                                <button className="btn btn-neutral px-4  py-2">Edit</button>
                                <button className="btn btn-secondary  p2 m-2">Delete</button>
                            </th>
                        </tr>
                        {/* row 3 */}
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="https://daisyui.com//tailwind-css-component-profile-4@56w.png" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Marjy Ferencz</div>
                                        <div className="text-sm opacity-50">Russia</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Rowe-Schoen
                                <br />
                                <span className="badge badge-ghost badge-sm">Office Assistant I</span>
                            </td>
                            <td>User</td>
                            <th>
                                <button className="btn btn-accent  p-2 m-2">details</button>
                                <button className="btn btn-neutral px-4  py-2">Edit</button>
                                <button className="btn btn-secondary  p2 m-2">Delete</button>
                            </th>
                        </tr>
                        {/* row 4 */}
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="https://daisyui.com//tailwind-css-component-profile-5@56w.png" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Yancy Tear</div>
                                        <div className="text-sm opacity-50">Brazil</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Wyman-Ledner
                                <br />
                                <span className="badge badge-ghost badge-sm">Community Outreach Specialist</span>
                            </td>
                            <td>Admin</td>
                            <th>
                                <button className="btn btn-accent  p-2 m-2">details</button>
                                <button className="btn btn-neutral px-4  py-2">Edit</button>
                                <button className="btn btn-secondary  p2 m-2">Delete</button>
                            </th>
                        </tr>
                    </tbody>
                    {/* foot */}
                    <tfoot>
                        <tr >
                            <th></th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Type</th>
                            <th>Action</th>
                        </tr>
                    </tfoot>

                </table>
            </div>



            {/* Pagination */}
            <div className="join justify-items-center mx-10">
                <input className="join-item btn btn-square" type="radio" name="options" aria-label="<< " />
                <input className="join-item btn btn-square" type="radio" name="options" aria-label="1" checked />
                <input className="join-item btn btn-square" type="radio" name="options" aria-label="2" />
                <input className="join-item btn btn-square" type="radio" name="options" aria-label="3" />
                <input className="join-item btn btn-square" type="radio" name="options" aria-label="4" />
                <input className="join-item btn btn-square" type="radio" name="options" aria-label="5" />
                <input className="join-item btn btn-square" type="radio" name="options" aria-label="6" />
                <input className="join-item btn btn-square" type="radio" name="options" aria-label="7" />
                <input className="join-item btn btn-square" type="radio" name="options" aria-label="8" />
                <input className="join-item btn btn-square" type="radio" name="options" aria-label=" >>" />
            </div>







        </div>
    );
};

export default AdminProducts;