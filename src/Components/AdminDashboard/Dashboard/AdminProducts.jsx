import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useTotalProuduct from '../../../CustomHook/useTotalProuduct';





const AdminProducts = () => {
    
    const [products, setProducts] = useState([]);

    const [currentPage, setCurrentPage] = useState(0);
      const [itemsPerPage, setItemPerPage] = useState(8);
      const [totalProducts] = useTotalProuduct()

  
      //const itemsPerPage = 10; //TODO: make it dynamic
      const totalPages = Math.ceil(totalProducts/itemsPerPage)
    
      
      const pageNumbers = [];
      for(let i=1; i<=totalPages; i++){
          pageNumbers.push(i);
      }

      useEffect( ()=>{
        async function fetchData() {
            const response = await fetch(`http://localhost:3000/products?page=${currentPage}&limit=${itemsPerPage}`)
  
            const data = await response.json();
            setProducts(data);
        }
        fetchData();
    },[currentPage,totalPages])

    console.log("current page - ",currentPage);
    console.log("total page - ",totalPages);

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
                    <tbody className='mb-4'>
                        {/* row 1 */}
                        {
                            products.map(product => <tr key={product._id}>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={product.images[0]} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{product.name}</div>
                                            <div className="text-sm opacity-50">{product.brand}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="font-bold">
                                    {product.category}
                                </td>
                                <td>{product.price}</td>
                                <th>
                                    <button className="btn btn-accent  p-2 m-2">details</button>
                                    <button className="btn btn-neutral px-4  py-2">Edit</button>
                                    <button className="btn btn-secondary  p2 m-2">Delete</button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                    {/* foot */}
                    

                </table>
            </div>



            {/* Pagination */}
            <div className="join justify-items-center mx-10">
                {currentPage === 0 ? <input className="join-item btn btn-square" type="radio" name="options" aria-label="<< "/>
                : <input onClick={() => setCurrentPage(currentPage-1)} className="join-item btn btn-square" type="radio" name="options" aria-label="<< " /> }
                {
                 pageNumbers.map(page => <input onClick={() => setCurrentPage(page-1)} key={page} className="join-item btn btn-square" type="radio" name="options" aria-label={page} />)
                }
                {currentPage+1 == totalPages 
                ? <input className="join-item btn btn-square" type="radio" name="options" aria-label=" >>" />
                : <input onClick={() => setCurrentPage(currentPage+1)}className="join-item btn btn-square" type="radio" name="options" aria-label=" >>" />}
                
            </div>







        </div>
    );
};

export default AdminProducts;