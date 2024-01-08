import React from 'react';
import { useForm } from 'react-hook-form';
import useProduct from '../../../Hook/useProduct';

const HotOffer = () => {
    const [products] = useProduct();
    const { register, handleSubmit, formState: { errors } } = useForm();
    return (
        <div>
            <div className='w-full text-center'>
                <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
                    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                        <span className="countdown font-mono text-5xl">
                            <span style={{ "--value": 15 }}></span>
                        </span>
                        days
                    </div>
                    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                        <span className="countdown font-mono text-5xl">
                            <span style={{ "--value": 10 }}></span>
                        </span>
                        hours
                    </div>
                    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                        <span className="countdown font-mono text-5xl">
                            <span style={{ "--value": 24 }}></span>
                        </span>
                        min
                    </div>
                    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                        <span className="countdown font-mono text-5xl">
                            <span style={{ "--value": 55 }}></span>
                        </span>
                        sec
                    </div>
                </div>
            </div>


            <div className=' w-full '>
                <h2 className='m-4 text-5xl text-center shadow-xl p-4 m-2'>Hot Offers </h2>

                {/* Navigation */}
                <div className="navbar bg-base-100 shadow">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a>All Offers</a></li>
                                <li><a>Category</a></li>
                            </ul>
                        </div>
                        <a className="btn btn-ghost text-xl">Offers</a>
                    </div>
                    <div className="navbar-center hidden lg:flex text-2xl">
                        <ul className="menu menu-horizontal px-1">
                            <li><a>All Offers</a></li>
                            <li><a>Category</a></li>
                        </ul>
                    </div>
                    <div className="navbar-end">

                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>Add Hot Offer</button>
                    <dialog id="my_modal_1" className="modal">
                        <div className="modal-box">
                            <div className="max-w-lg mx-auto bg-white p-8 rounded-md shadow-md">
                                <h2 className="text-3xl font-semibold mb-4 text-center">Add Hot Offer</h2>

                                <form >
                                    <label className="form-control w-full mr-5 ">
                                            <div className="label">
                                                <span className="label-text font-semibold">Category*</span>
                                            </div>

                                            <select defaultValue="Pick One"{...register("category", { required: true })}
                                                className="select select-bordered">
                                                <option disabled >Pick One</option>
                                                
                                            </select>
                                        </label>
                                      <label className="form-control w-full mr-5 ">
                                            <div className="label">
                                                <span className="label-text font-semibold">Products*</span>
                                            </div>

                                            <select defaultValue="Pick One"{...register("category", { required: true })}
                                                className="select select-bordered">
                                                <option disabled >Pick One</option>
                                                {
                                                    products.map(pro => <option key={pro.id}>{pro.label}</option>)
                                                }
                                            </select>
                                        </label>

                                    <label className="form-control w-full ">
                                        <div className="label">
                                            <span className="label-text font-semibold">Discount*</span>
                                        </div>
                                        <input type="num" placeholder="Brand Name"
                                            {...register("brand", { required: true })}
                                            className="input input-bordered w-full " />
                                    </label>

                                    <input type="submit" value="Add Offer" className='btn btn-sm mt-4' />

                                </form>

                            </div>
                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn btn-outline">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>


                </div>
                </div>

                {/* Offer List */}
                <div className="overflow-x-auto shadow-xl rounded w-full m-4">
                    <table className="table ">
                        {/* Table Head */}
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
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Replace with dynamic data from the backend */}
                            {/* Offer Rows */}
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
                        </tbody>
                        {/* Table Foot */}
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
                    {/* Pagination buttons */}
                </div>
            </div>



        </div>
    );
};

export default HotOffer;