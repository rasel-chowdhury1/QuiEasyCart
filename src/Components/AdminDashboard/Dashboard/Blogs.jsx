import React from 'react';

const Blogs = () => {
    return (
        <div className='w-full'>
            <div>
                <div className="stats shadow-xl w-full m-4">

                    <div className="stat place-items-center">
                        <div className="stat-title">Blog Read</div>
                        <div className="stat-value">31K</div>
                        <div className="stat-desc">From January 1st to February 1st</div>
                    </div>

                    <div className="stat place-items-center">
                        <div className="stat-title">Users</div>
                        <div className="stat-value text-secondary">4,200</div>
                        <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
                    </div>

                    <div className="stat place-items-center">
                        <div className="stat-title">Total Blog</div>
                        <div className="stat-value">1,200</div>
                        <div className="stat-desc">↘︎ 90 (14%)</div>
                    </div>

                </div>
            </div>





            <div>
                <div role="tablist" className="tabs tabs-lifted">


                    <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="All Blogs" checked />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">

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
                                            <button className="btn btn-accent  p-2 m-2">View Blog</button>
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
                                            <button className="btn btn-accent  p-2 m-2">View Blog</button>
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
                                            <button className="btn btn-accent  p-2 m-2">View Blog</button>
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
                                            <button className="btn btn-accent  p-2 m-2">View Blog</button>
                                            <button className="btn btn-neutral px-4  py-2">Edit</button>
                                            <button className="btn btn-secondary  p2 m-2">Delete</button>
                                        </th>
                                    </tr>
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

                    </div>





                    <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Draft" />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
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
                                        <th> <button className='btn-ghost'>  </button> <button className='btn btn-outline btn-accent'> Add New User</button></th>
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
                                            <button className="btn btn-accent  p-2 m-2">Archive</button>
                                            <button className="btn btn-neutral px-4  py-2">Edit</button>
                                            <button className="btn btn-secondary  p2 m-2">Publish</button>
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
                                            <button className="btn btn-accent  p-2 m-2">Archive</button>
                                            <button className="btn btn-neutral px-4  py-2">Edit</button>
                                            <button className="btn btn-secondary  p2 m-2">Publish</button>
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




                    <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Archive" />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
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
                                        <th> <button className='btn-ghost'>  </button> <button className='btn btn-outline btn-accent'> Add New User</button></th>
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
                                            <button className="btn btn-accent  p-2 m-2">Archive</button>
                                            <button className="btn btn-neutral px-4  py-2">Edit</button>
                                            <button className="btn btn-secondary  p2 m-2">Publish</button>
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
                                            <button className="btn btn-accent  p-2 m-2">Archive</button>
                                            <button className="btn btn-neutral px-4  py-2">Edit</button>
                                            <button className="btn btn-secondary  p2 m-2">Publish</button>
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


                    <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Create" />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                        <div className="max-w-lg mx-auto bg-white p-8 rounded-md shadow-xl">
                            <h2 className="text-2xl font-semibold mb-4">Create New Article</h2>
                            <form>
                                <div className="mb-4">
                                    <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">Title</label>
                                    <input type="text" id="title" name="title" className="w-full border-2 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" placeholder="Enter article title" />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="content" className="block text-gray-700 font-semibold mb-2">Content</label>
                                    <textarea id="content" name="content" className="w-full border-2 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" placeholder="Enter article content"></textarea>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="image" className="block text-gray-700 font-semibold mb-2">Upload Image</label>
                                    <input type="file" id="image" name="image" className="w-full border-2 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="keywords" className="block text-gray-700 font-semibold mb-2">Keywords</label>
                                    <input type="text" id="keywords" name="keywords" className="w-full border-2 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" placeholder="Enter keywords (separated by commas)" />
                                </div>
                                <div className="flex justify-between mb-4">
                                    <button type="button" className="px-6 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition duration-300 ease-in-out">Draft</button>
                                    <button type="submit" className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 ease-in-out">Publish</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    );
};

export default Blogs;