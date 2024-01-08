import React from 'react';
import profile_avatar from '../../assets/images/profile_avatar.jpg'
const Profile = () => {
    
    return (
        <div className='container  mb-20 mt-6'>
            <div className="flex justify-center px-3">
              <div className="pl-20 w-1/3 justify-center drop-shadow-lg bg-white">
                <section className='ml-16'>
                    <div>
                    <img src={profile_avatar} className='rounded-full w-32' alt="" />
                    </div>
                </section>
                <section className=''>
                      <div className='mt-2 ml-3'>
                        <h4 className='font-bold text-2xl'><span>Name:</span>  Nazrul Islam</h4>
                        <p><span className='font-semibold'> Email:</span> nazrulislam@gmail.com</p>
                        <p><span className='font-semibold'>Phone: </span> 01816249784</p>
                        <p><span className='font-semibold'> Gender:</span> Male</p>
                        <p><span className='font-semibold'>BirthDate: </span> 10-10-1998</p>
                        <p><span className='font-semibold'>Address: </span> Chattogram, Bangladesh</p>

                        <button type="button" className="text-white mt-12 ml-16  bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Update Profile</button>
                      </div>
                </section>

                
              </div>

              <div className="order-part w-2/3 ml-9">
                <h1 className="text-center text-2xl font-semibold">Orders</h1>
                <div className="">
                   <h2 className='text-3xl font-bold text-blue-600 mt-5 mb-4'>Successful Payments</h2>


<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
<table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
            <th scope="col" class="px-6 py-3">
                Product name
            </th>
            <th scope="col" class="px-6 py-3">
                Color
            </th>
            <th scope="col" class="px-6 py-3">
                Category
            </th>
            <th scope="col" class="px-6 py-3">
                Price
            </th>
            <th scope="col" class="px-6 py-3">
                Action
            </th>
        </tr>
    </thead>
    <tbody>
        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Apple MacBook Pro 17"
            </th>
            <td class="px-6 py-4">
                Silver
            </td>
            <td class="px-6 py-4">
                Laptop
            </td>
            <td class="px-6 py-4">
                $2999
            </td>
            <td class="px-6 py-4">
                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
            </td>
        </tr>
        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Microsoft Surface Pro
            </th>
            <td class="px-6 py-4">
                White
            </td>
            <td class="px-6 py-4">
                Laptop PC
            </td>
            <td class="px-6 py-4">
                $1999
            </td>
            <td class="px-6 py-4">
                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
            </td>
        </tr>
        
    </tbody>
</table>
</div>

                </div>
                <div className="">
                   <h2 className='text-3xl font-bold text-red-500 mt-5 mb-4'>Pending Orders</h2>

                   <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
<table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
            <th scope="col" className="px-6 py-3">
                Product name
            </th>
            <th scope="col" className="px-6 py-3">
                Color
            </th>
            <th scope="col" className="px-6 py-3">
                Category
            </th>
            <th scope="col" className="px-6 py-3">
                Price
            </th>
            <th scope="col" className="px-6 py-3">
                Action
            </th>
        </tr>
    </thead>
    <tbody>
        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Apple MacBook Pro 17"
            </th>
            <td className="px-6 py-4">
                Silver
            </td>
            <td className="px-6 py-4">
                Laptop
            </td>
            <td className="px-6 py-4">
                $2999
            </td>
            <td className="px-6 py-4">
                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
            </td>
        </tr>
        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Microsoft Surface Pro
            </th>
            <td className="px-6 py-4">
                White
            </td>
            <td className="px-6 py-4">
                Laptop PC
            </td>
            <td className="px-6 py-4">
                $1999
            </td>
            <td className="px-6 py-4">
                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
            </td>
        </tr>
        
    </tbody>
</table>
</div>
                </div>
              </div>
            </div>
        </div>
    );
};

export default Profile;