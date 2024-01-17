import React, { useEffect, useState } from 'react';

const User = () => {


    const [users, setUsers] = useState([])
    const getUser = () => {
        fetch("http://localhost:3000/allUsers")
            .then(res => res.json())
            .then(data => setUsers(data))
    }
    console.log(users)



useEffect(() => {
    getUser()
}, []);



return (
    <div className='bg-ash  w-full '>
        <div className="stats shadow-xl w-full p-10 m-10  item-center ">
            <div className="stat ">
                <div className="stat-figure text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                </div>
                <div className="stat-title">Total User</div>
                <div className="stat-value text-primary">{users.length + 2543} </div>
                <div className="stat-desc">21% Join more than last month</div>
            </div>

            <div className="stat">
                <div className="stat-figure text-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                </div>
                <div className="stat-title">New User</div>
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
                <div className="stat-value">86</div>
                <div className="stat-title">Active User</div>
                <div className="stat-desc text-secondary">31 User Online</div>
            </div>

        </div>
        {/* <h2 className='m-4 text-5xl text-center '>User List </h2> */}
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
                        <th>Name</th>
                        <th>Addess</th>
                        <th>Type</th>
                        <th> <button className='btn-ghost'>  </button>
                            {/* You can open the modal using document.getElementById('ID').showModal() method */}
                            <button className="btn btn-outline text-white" onClick={() => document.getElementById('my_modal_3').showModal()}>Add User</button>
                            <dialog id="my_modal_3" className="modal">
                                <div className="modal-box">
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn btn-sm btn-circle btn-error absolute right-2 top-2">✕</button>
                                    </form>
                                    <div className="max-w-lg mx-auto bg-white p-8 rounded-md shadow-md">
                                        <h2 className="text-2xl font-semibold mb-4">Add New User</h2>
                                        <form>
                                            <div className="mb-4">
                                                <label htmlFor="fullName" className="block text-gray-700 font-semibold mb-2">Full Name</label>
                                                <input type="text" id="fullName" name="fullName" className="w-full border-2 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" placeholder="Enter full name" />
                                            </div>
                                            <div className="mb-4">
                                                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                                                <input type="email" id="email" name="email" className="w-full border-2 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" placeholder="Enter email address" />
                                            </div>
                                            <div className="mb-4">
                                                <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password</label>
                                                <input type="password" id="password" name="password" className="w-full border-2 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" placeholder="Enter password" />
                                            </div>
                                            <div className="mb-4">
                                                <label htmlFor="userType" className="block text-gray-700 font-semibold mb-2">User Type</label>
                                                <select id="userType" name="userType" className="w-full border-2 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 text-black text-1xl">
                                                    <option value="regular">Regular User</option>
                                                    <option value="admin">Admin</option>
                                                    <option value="superAdmin">Super Admin</option>
                                                </select>
                                            </div>
                                            <div className="mb-4">
                                                <label htmlFor="userImage" className="block text-gray-700 font-semibold mb-2">User Image</label>
                                                <input type="file" id="userImage" name="userImage" className="w-full border-2 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" />
                                            </div>
                                            <div className="flex justify-between mb-4">
                                                <button type="button" className="px-6 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition duration-300 ease-in-out">Save as Draft</button>
                                                <button type="submit" className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 ease-in-out">Add User</button>
                                            </div>
                                        </form>
                                    </div>

                                </div>
                            </dialog>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        users.map( user => 
                            <tr key={user._id}>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <td>
                            <div className="flex items-center gap-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={user.image} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">{user.firstName} {user.lastName}</div>
                                    <div className="text-sm opacity-50">{user.gender}</div>
                                    <div className="text-sm opacity-50">{user.birthDate}</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            {user.address}
                            <br />
                            <span className="badge badge-ghost badge-sm">{user.phone}</span>
                            <span className="badge badge-ghost badge-sm">{user.email}</span>
                        </td>
                        <td>Admin</td>
                        <th>
                            <button className="btn btn-accent  p-2 m-2">details</button>
                            <button className="btn btn-neutral px-4  py-2">Edit</button>
                            <button className="btn btn-secondary  p2 m-2">Delete</button>
                        </th>
                    </tr>
                            )
                    }
                    
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

export default User;