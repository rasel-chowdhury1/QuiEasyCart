import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';


const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;
// console.log(img_hosting_token);

const AdminProducts = () => {


    const productCategory = [
        { id: 1, label: 'Grocery' },
        { id: 2, label: 'Medicine' },
        { id: 3, label: 'Mens T-Shirt' },
        { id: 4, label: 'Womens T-Shirt' },
        { id: 5, label: 'Ornament' },
        { id: 6, label: 'Mens Wear' },
        { id: 7, label: 'Womens Wear' },
        { id: 8, label: 'Electronics' },
        { id: 9, label: 'Mobiles' },
    ];


    const { register, handleSubmit, formState: { errors } } = useForm();
    const [uploadedImages, setUploadedImages] = useState([])
    // console.log("first run uploaded image:",uploadedImages);
    
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`


    const onSubmit = async (data) => {
        console.log(data);



        let formData = new FormData();

        for (let index = 0; index < data.image.length; index++) {
            // const image = fileList[index];
            formData.append("image", data.image[index]);

            const response = await axios.post(img_hosting_url, formData);
            console.log(response.data);

                uploadedImages.push(response.data.data.url);
                setUploadedImages(uploadedImages);


            formData = new FormData();
        }

        if (uploadedImages) {
            const { name, category, size, price, brand, quantity, details } = data;
            const newItem = { name, category, size, price: parseFloat(price), brand, details, quantity: parseInt(quantity), images: uploadedImages }

            console.log(newItem)
            fetch("http://localhost:3000/addProduct", {
                method: "POST",
                headers: {
                    "content-type": 'application/json'
                 },
                 body: JSON.stringify(newItem)
              })
              .then(res => res.json())
              .then(data => {
                console.log(data)
                if(data.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Successfully added product",
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
              })
            }
      
          setUploadedImages([]);
        
      };
     

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
                    <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>Add New Product</button>
                    <dialog id="my_modal_1" className="modal">
                        <div className="modal-box">
                            <div className="max-w-lg mx-auto bg-white p-8 rounded-md shadow-md">
                                <h2 className="text-3xl font-semibold mb-4 text-center">Add New Product</h2>

                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <label className="form-control w-full my-4">
                                        <div className="label">
                                            <span className="label-text font-semibold">Product name*</span>
                                        </div>
                                        <input type="text" placeholder="Product name"
                                            {...register("name", { required: true, maxLength: 120 })}
                                            className="input input-bordered w-full " />
                                    </label>

                                    <div className='flex my-4'>
                                        <label className="form-control w-full mr-5 ">
                                            <div className="label">
                                                <span className="label-text font-semibold">Category*</span>
                                            </div>

                                            <select defaultValue="Pick One"{...register("category", { required: true })}
                                                className="select select-bordered">
                                                <option disabled >Pick One</option>
                                                {
                                                    productCategory.map(pro => <option key={pro.id}>{pro.label}</option>)
                                                }
                                            </select>
                                        </label>

                                        <label className="form-control w-full mr-5 ">
                                            <div className="label">
                                                <span className="label-text font-semibold">Size*</span>
                                            </div>

                                            <select defaultValue="Pick One"{...register("size", { required: true })}
                                                className="select select-bordered">
                                                <option id="sizeSelect" disabled >Pick One</option>
                                                  <option>1kg</option>
                                                  <option>5kg</option>
                                                  <option>1</option>
                                                  <option>S</option>
                                                  <option>M</option>
                                                  <option>L</option>
                                                  <option>XL</option>
                                            </select>
                                        </label>

                                    </div>

                                    <div className='flex my-4'>
                                        <label className="form-control w-full mr-5">
                                            <div className="label">
                                                <span className="label-text font-semibold">Quantity*</span>
                                            </div>
                                            <input type="num" placeholder="Quantity"
                                                {...register("quantity", { required: true })}
                                                className="input input-bordered w-full " />
                                        </label>

                                        <label className="form-control w-full mr-5">
                                            <div className="label">
                                                <span className="label-text font-semibold">Price*</span>
                                            </div>
                                            <input type="num" placeholder="Price"
                                                {...register("price", { required: true })}
                                                className="input input-bordered w-full " />
                                        </label>

                                    </div>

                                    <label className="form-control w-full ">
                                        <div className="label">
                                            <span className="label-text font-semibold">Brand*</span>
                                        </div>
                                        <input type="num" placeholder="Brand Name"
                                            {...register("brand", { required: true })}
                                            className="input input-bordered w-full " />
                                    </label>

                                    <label className="form-control my-4">
                                        <div className="label">
                                            <span className="label-text">Product Details*</span>
                                        </div>
                                        <textarea {...register("details", { required: true })} className="textarea textarea-bordered h-24" placeholder="Recipe Details"></textarea>
                                    </label>

                                    <label className="form-control w-full max-w-xs my-4">
                                        <div className="label">
                                            <span className="label-text">Item Image</span>
                                        </div>
                                        <input multiple {...register('image', { required: 'At least one image is required.' })}
                                            type="file" className="file-input file-input-bordered w-full max-w-xs" />
                                        {errors.image && <p>{errors.image.message}</p>}
                                    </label>

                                    <input type="submit" value="Add Item" className='btn btn-sm mt-4' />

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