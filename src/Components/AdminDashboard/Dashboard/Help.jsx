import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';




    const Help = () => {
        const {
            register,
            handleSubmit,
            reset,
            formState: { errors },
        } = useForm();

        const onSubmit = (data) => {
            const formData = new FormData();
            formData.append('image', data.image[0]);

            // Add more fields as needed
            formData.append('title', data.helpTitle);
            formData.append('category', data.helpCategory);
            formData.append('description', data.helpDescription);

            fetch('http://localhost:3000/addHelp', {
                method: 'POST',
                body: formData,
            })
                .then((res) => res.json())
                .then((result) => {
                    if (result.insertedId) {
                        reset();
                        // Show success message or perform other actions
                        Swal.fire({
                            title: "Thank you!",
                            text: "Help added successfully!",
                            icon: "success"
                          });
                        console.log('Help Article Added Successfully!');
                    }
                });
        };



        return (
            <div>
                <div className="max-w-3xl mx-auto p-6">
                    <h1 className="text-3xl font-semibold mb-6">Admin Help Page</h1>

                    {/* Add Help Content */}
                    <div className="max-w-lg mx-auto bg-white p-8 rounded-md shadow-xl">
                        <h2 className="text-2xl font-semibold mb-4">Create New Help Article</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* Add your dynamic form fields here */}
                            <div className="mb-4">
                                <label htmlFor="helpTitle" className="block text-gray-700 font-semibold mb-2">
                                    Title
                                </label>
                                <input
                                    type="text"
                                    {...register('helpTitle', { required: true })}
                                    className="w-full border-2 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 mb-4"
                                    placeholder="Enter help title"
                                />
                                {errors.helpTitle && <span className="text-red-400">Title is required</span>}
                            </div>

                            {/* Add dynamic dropdown for help category */}
                            <div className="mb-4">
                                <label htmlFor="helpCategory" className="block text-gray-700 font-semibold mb-2">
                                    Category
                                </label>
                                <select
                                    {...register('helpCategory', { required: true })}
                                    className="w-full border-2 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 mb-4"
                                >
                                    <option value="Select One">Select One</option>
                                    <option value="Create Account">Create Account</option>
                                    <option value="Cart">Cart</option>
                                    <option value="Payment">Payment</option>
                                    <option value="Rating">Rating</option>
                                    <option value="Comment">Comment</option>
                                </select>
                                {errors.helpCategory && <span className="text-red-400">Category is required</span>}
                            </div>
                            <div className='mb-4'>
                            <label className="form-control">
                            <div className="label">
                                <span className="label-text">Description*</span>
                            </div>
                            <textarea {...register('details', { required: true })} className="textarea textarea-bordered h-24" placeholder="type details here"></textarea>
                            
                            </label>
                            </div>
                            

                            {/* Add dynamic file input for image */}
                            <div className="mb-4">
                                <label htmlFor="image" className="block text-gray-700 font-semibold mb-2">
                                    Upload Image
                                </label>
                                <input
                                    type="file"
                                    {...register('image', { required: true })}
                                    className="w-full border-2 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 mb-4"
                                />
                                {errors.image && <span className="text-red-400">Image is required</span>}
                            </div>

                            {/* Add your dynamic form fields here */}

                            <div className="flex justify-between mb-4">
                            <button type="button" className="px-6 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition duration-300 ease-in-out">Draft</button>
                                    <input  type="submit" value="Publish" className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 ease-in-out" />                                
                            </div>
                        </form>
                    </div>

                    {/* View, Edit, Delete Help Content */}
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-semibold mb-4">Manage Help Content</h2>
                        <div className="mb-4">
                            {/* Replace this section with dynamic content from your database */}
                            <div className="flex justify-between items-center bg-gray-100 p-4 rounded-md mb-2">
                                <div>
                                    <h3 className="font-semibold">Help Title 1</h3>
                                    <p className="text-gray-600">Help Description 1</p>
                                </div>
                                <div className="flex space-x-4">
                                    <button className="bg-blue-500 text-white py-1 px-3 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out">Edit</button>
                                    <button className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600 transition duration-300 ease-in-out">Delete</button>
                                </div>
                            </div>

                            {/* Another help content block */}
                            <div className="flex justify-between items-center bg-gray-100 p-4 rounded-md mb-2">
                                <div>
                                    <h3 className="font-semibold">Help Title 2</h3>
                                    <p className="text-gray-600">Help Description 2</p>
                                </div>
                                <div className="flex space-x-4">
                                    <button className="bg-blue-500 text-white py-1 px-3 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out">Edit</button>
                                    <button className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600 transition duration-300 ease-in-out">Delete</button>
                                </div>
                            </div>

                            {/* Add more help content blocks as needed */}
                        </div>
                    </div>
                </div>

            </div>
        );
    };

    export default Help;    