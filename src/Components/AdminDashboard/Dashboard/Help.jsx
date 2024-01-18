import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
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

        fetch('https://quieasycarts.onrender.com/addHelp', {
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

    const [allhelp, setAllhelp] = useState([])



    useEffect(() => {
        fetch("https://quieasycarts.onrender.com/allHelp")
            .then(res => res.json())
            .then(data => setAllhelp(data))
    }, [])


    return (
        <div>
            <div className="max-w-full mx-auto p-6">
                <h1 className="text-3xl font-semibold mb-6">Admin Help Page</h1>
              
            </div>

            <div role="tablist" className="tabs tabs-bordered">
                <input type="radio" name="my_tabs_1" role="tab" className="tab mx-2" aria-label="All Helps" checked />
                <div className="overflow-x-auto shadow-xl rounded w-full m-4">
                            <table className="table">
                                {/* head */}
                                <thead className='bg-black text-white text-2xl'>
                                    <tr>
                                        <th>
                                            <label>
                                                <input type="checkbox" className="checkbox" />
                                            </label>
                                        </th>
                                        <th>Title</th>
                                        <th>Keyword</th>
                                        <th>Author</th>
                                        <th>  </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row 1 */}
                                    {
                                        allhelp.map(help => <tr key={help._id}>
                                            <th>
                                                <label>
                                                    <input type="checkbox" className="checkbox" />
                                                </label>
                                            </th>
                                            <td>
                                                <div className="flex items-center gap-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle w-12 h-12">
                                                            <img src={help.image} alt="Avatar Tailwind CSS Component" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold">{help.title}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                {help.content}
                                                <br />
                                                <span className="badge badge-ghost badge-sm">{help.keyword}</span>
                                            </td>
                                            <td>Admin</td>
                                            <th>
                                                <Link to={`/helpdetails/${help._id}`} className="btn btn-accent  p-2 m-2" >View help</Link>
                                                <Link to={`/updatehelp/${help._id}`} className="btn btn-neutral px-4  py-2" >Edit</Link>
                                                <button onClick={() => handlehelpDelete(blog._id)} className="btn btn-secondary  p2 m-2">Delete</button>
                                            </th>
                                        </tr>)
                                    }
                                </tbody>
                                {/* foot */}
                                <tfoot>
                                    <tr >
                                        <th></th>
                                        <th>Title</th>
                                        <th>Keyword</th>
                                        <th>Author</th>
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

                <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Draft"  />
                <div role="tabpanel" className="tab-content p-10"><h2>Draft blogs will be render here</h2></div>

                <input type="radio" name="my_tabs_1" role="tab" className="tab mx-2" aria-label="Create" />
                <div role="tabpanel" className="tab-content p-10">
                    {/* Add Help Content */}
                
                </div>
            </div>
            

        </div>
    );
};

export default Help;    