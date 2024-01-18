import React from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const EditBlog = () => {

    const data = useLoaderData()
    console.log(data)
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()


    const img_hosting_token = "622e0d92c5c1dfc5ba8cf9cab3a6e860";

    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`


    const onSubmit = (editdata) => {
        console.log(data)
        const formData = new FormData()
        if(editdata.image.length == 0){
            const url = data.image
            console.log("this is image url", url)
            const { title, content, keyword } = editdata
            const newBlog = { title, content, image: url, keyword }
            console.log(newBlog)
            console.log("blogId ", data._id)
            fetch(`https://quieasycarts.onrender.com/editblog/${data._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newBlog)
            })
                .then(res => res.json())
                .then(data => {
                    console.log("this is loaded after fetch", data)
                    if (data.matchedCount) {
                        reset()
                        Swal.fire({
                            title: "Good job!",
                            text: "Blog updated Successfully!",
                            icon: "success"
                        });
                      
                     
                    }
                })
        }
        else{
            console.log(data.image.length)
            formData.append('image', data.image[0])
            fetch(img_hosting_url, {
                method: 'POST',
                body: formData
            })
                .then(res => res.json())
                .then(image => {
                    if (image.success) {
                        console.log(data)
                        const blogImageUrl = image.data.url
                        const { title, content, keyword } = data
                        const newBlog = { title, content, image: blogImageUrl, keyword }
                        console.log(newBlog)
                        console.log("blogId ", data._id)
                        fetch(`https://quieasycarts.onrender.com/editblog/${data._id}`, {
                            method: 'PUT',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(newBlog)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.matchedCount) {
                                    reset()
                                    Swal.fire({
                                        title: "Good job!",
                                        text: "Blog updated Successfully!",
                                        icon: "success"
                                    });
    
                                }
                            })
                    }
    
                })
        }

    }



    return (
        <div>
            <div className="max-w-lg mx-auto bg-white p-8 rounded-md shadow-xl">
                <h2 className="text-2xl font-semibold mb-4">Create New Article</h2>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">Title</label>
                        <input type="text" defaultValue={data.title} {...register("title", { required: true })} className="w-full border-2 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" placeholder="Enter article title" />
                        {errors.title && <span className='text-red-400'>Title is required</span>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="content" className="block text-gray-700 font-semibold mb-2">Content</label>
                        <textarea defaultValue={data.content}  {...register("content", { required: true })} className="w-full border-2 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" placeholder="Enter article content"></textarea>
                        {errors.content && <span className='text-red-400'>Write your content here. Its cant be blank</span>}
                    </div>
                    <div className="mb-4">
                        <img src={data.image} alt="" />
                        <label htmlFor="image" className="block text-gray-700 font-semibold mb-2">Upload Image</label>
                        <input type="file" {...register("image", )} className="w-full border-2 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" />
                        
                    </div>
                    <div className="mb-4">
                        <label htmlFor="keywords" className="block text-gray-700 font-semibold mb-2">Keywords</label>
                        <input type="text" defaultValue={data.keyword}  {...register("keyword",)} className="w-full border-2 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" placeholder="Enter keywords (separated by commas)" />
                        {errors.keyword && <span className='text-red-400'>Keyword is required</span>}
                    </div>
                    <div className="flex justify-between mb-4">

                        <input type="submit" value="Update" className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 ease-in-out" />
                    </div>

                </form>
            </div>
        </div>
    );
};

export default EditBlog;