import React, { useEffect,useState } from 'react';
import profile_avatar from '../../assets/images/profile_avatar.jpg'
import { useForm } from 'react-hook-form';
import AddReview from './AddReview';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';



const Profile = () => {
    // console.log(profile_avatar)
    const { register,reset, handleSubmit, formState: { errors } } = useForm();
    const [userProfile, setUserProfile] = useState({})
    const [updatedImage, setUpdatedImage] = useState('')
    const [allOrder, setAllOrder] = useState([]);
    const {firstName,lastName,phone,email,birthDate,image,gender,address,_id} = userProfile;
    
    const userId = localStorage.getItem('userId')

    const navigate = useNavigate();

    const userWiseOrder = allOrder.filter((order) => order.product.userId === userId)
    const successfulOrder = userWiseOrder && userWiseOrder.filter((order) => order.paidStatus === true)
    const pendingOrder = userWiseOrder && userWiseOrder.filter((order) => order.paidStatus === false)
    console.log('successful order',successfulOrder, 'pendingOrder',pendingOrder)
    const getUser = () =>{
        fetch(`https://quieasycarts.onrender.com/user/${userId}`)
        .then(res => res.json())
        .then(result => {
            console.log(result);
            setUserProfile(result)
        })
    }

    const getOrder = () =>{
        fetch('https://quieasycarts.onrender.com/allOrder')
        .then(res => res.json())
        .then(result => setAllOrder(result))
    }

    const handleDeleteOrder = id =>{
        fetch(`https://quieasycarts.onrender.com/deleteOrder/${id}`,{
          method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
          if(data.deletedCount === 1){
            getOrder();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your item deleted",
              showConfirmButton: false,
              timer: 1500
            });
          }
        })
       }
    useEffect(()=>{
        getUser();
        getOrder();
    },[])

    console.log('user data is ',userProfile)
    
    const handleImage = () =>{
        const fileInput = document.querySelector('.file-input')
        fileInput.click()
        fileInput.onchange = ({target}) => {
        const file = target.files[0]
        const formData = new FormData();
        formData.append("image", file);

        fetch(
          "https://api.imgbb.com/1/upload?key=212e3038d6bf0bd9d01b3aa24708a377",
          {
            method: "POST",
            body: formData,
          }
        )
        .then(res=> res.json())
        .then(result => {
            console.log(result)
            setUpdatedImage(result.data.url)
        })
    }
}
    const onSubmit = async (data) => {
        console.log('hello')
        const userProfile = {
            userId: userId,
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            phone: data.phone,
            gender: data.gender,
            birthDate: data.birthDate,
            image: updatedImage ? updatedImage : image,
            address: data.address
          }
        //   console.log('from frontend',userProfile)
         await fetch(`https://quieasycarts.onrender.com/updateProfile/${_id}`, {
                     method: "PATCH",
                     headers: {
                        "content-type": 'application/json'
                     },
                     body: JSON.stringify(userProfile)
            })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                if(result.modifiedCount){
                    Swal.fire({
                        title: "Successfully Update!",
                        text: "Your data successfully added!",
                        icon: "success"
                      });
                      getUser()
                      navigate('/profile')
                }
                
            })
      };

      
    return (
        <div className='container  mb-20 mt-6'>

            <div className="flex flex-col md:flex-row lg:flex-row items-center my-4 mx-auto">
              <div className="w-full md:w-1/3 lg:w-1/4 xl:w-1/5 mb-4 md:mb-0">
                <section className='ml-16'>
                    <div>
                    <img src={image !== null ? image : profile_avatar} className='rounded-full w-32' alt="" />
                    </div>
                </section>
                <section className=''>
                      <div className='mt-2 ml-3'>
                        <h4 className='font-bold uppercase text-2xl'><span>Name:</span>{firstName} {lastName}</h4>
                        <p><span className='font-semibold'> Email:</span> {email}</p>
                        <p><span className='font-semibold'>Phone: </span> {phone ? phone: '---'}</p>
                        <p><span className='font-semibold'> Gender:</span> {gender ? gender : '---'}</p>
                        <p><span className='font-semibold'>BirthDate: </span> {birthDate ? birthDate :'---'}</p>
                        <p><span className='font-semibold'>Address: </span> {address ? address :'---'}</p>

                        <button onClick={() => document.getElementById('profileModal').showModal()} type="button" className="text-white mt-12 ml-16  bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Update Profile</button>
                        <dialog id="profileModal" className="modal">
                        <div className="modal-box">
                            <div className="max-w-lg mx-auto bg-white p-8 rounded-md shadow-md">
                            <div className='flex justify-center cursor-pointer'>
                            <img onClick={handleImage} src={updatedImage !== '' ? updatedImage : image ? image : profile_avatar} className='rounded-full w-40' alt="" />
                            </div>
                                
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <label className="form-control w-full my-4">
                                        <div className="label">
                                            <span className="label-text font-semibold">First Name*</span>
                                        </div>
                                        <input type="text" placeholder="First name" defaultValue={firstName}
                                        {...register("firstName")}
                                        className="input input-bordered w-full " />
                                    </label>

                                    <label className="form-control w-full my-4">
                                        <div className="label">
                                            <span className="label-text font-semibold">Last Name*</span>
                                        </div>
                                        <input type="text" placeholder="Last name" defaultValue={lastName}
                                        {...register("lastName")}
                                        className="input input-bordered w-full " />
                                    </label>

                                    <label className="form-control w-full my-4">
                                        <div className="label">
                                            <span className="label-text font-semibold">Email</span>
                                        </div>
                                        <input type="email" placeholder="Email" defaultValue={email}
                                        {...register("email")}
                                        className="input input-bordered w-full " />
                                    </label>

                                    <label className="form-control w-full my-4">
                                        <div className="label">
                                            <span className="label-text font-semibold">Phone*</span>
                                        </div>
                                        <input type="text" placeholder="phone" defaultValue={phone}
                                        {...register("phone")}
                                        className="input input-bordered w-full " />
                                    </label>

                                    <div className='flex my-4'>
                                        <label className="form-control w-full mr-5 ">
                                            <div className="label">
                                                <span className="label-text font-semibold">Gender*</span>
                                            </div>

                                            <select defaultValue="Pick One"{...register("gender")}
                                            className="select select-bordered">
                                                <option disabled >Pick One</option>
                                                <option>Male</option>
                                                <option>Female</option>
                                            </select>
                                        </label>

                                        <label className="form-control w-full mr-5 ">
                                            <div className="label">
                                                <span className="label-text font-semibold">Birth Date*</span>
                                            </div>

                                            <input type="date" placeholder="Birth Date" defaultValue={birthDate}
                                            {...register("birthDate")}
                                            className="input input-bordered w-full " />
                                        </label>

                                    </div>


                                    <label className="form-control my-4">
                                        <div className="label">
                                            <span className="label-text">Address*</span>
                                        </div>
                                        <input type="text" placeholder="Address" defaultValue={address}
                                            {...register("address", { maxLength: 120})}
                                            className="input input-bordered w-full " />
                                    </label>

                                    <label className="form-control hidden w-full max-w-xs my-4">
                                        <div className="label">
                                            <span className="label-text">Item Image</span>
                                        </div>
                                        <input {...register('image')}
                                        type="file" className="file-input file-input-bordered" />
                                        {errors.image && <p>{errors.image.message}</p>}
                                    </label>

                                    <input type="submit" value="Update Profile" className='btn btn-sm mt-4'/>
                                    
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
                </section>
              </div>

              <div className="w-full md:w-2/3 lg:w-3/4 xl:w-4/5 ml-0 md:ml-4 lg:ml-8 xl:ml-12">
                <div className="flex justify-center">
                <h1 className="text-center text-2xl font-semibold">Orders</h1>
                </div>
                <div className="">
                   <h2 className='text-3xl font-bold text-blue-600 mt-5 mb-4'>Successful Payments</h2>


<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
<table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
    <tr>
    <th scope="col" className="px-2 text-amount py-3">
        Booking ID
    </th>
    <th scope="col" className="px-0 text-center py-3">
        Status
    </th>
    <th scope="col" className="px-2 text-center py-3">
        B. Date
    </th>
    <th scope="col" className="px-2 text-center py-3">
        P. Amount
    </th>
    <th scope="col" className="px-2 text-center py-3">
        Action
    </th>
</tr>
    </thead>
    <tbody>
    {
        successfulOrder && successfulOrder.map((order) =>(
            <tr key={order._id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {order._id}
            </th>
            <td className="px-6 py-4">
                Paid
            </td>
            <td className="px-6 py-4">
               {order.date}
            </td>
            <td className="px-6 py-4">
                ${parseInt(order.product.amount).toFixed(2)}
            </td>
            <td className="px-6 flex py-4">
            <Link to='/orderDetails' state={{order,user:{userProfile:image,firstName,lastName}}} type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-2 py-2.5 text-center me-2 mb-2">view Order</Link>
            <button onClick={()=>handleDeleteOrder(order._id)} type="button" className="text-white ml-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-2 py-2.5 text-center me-2 mb-2">Delete Order</button>
            </td>
            </tr>
        ))
    }  
    </tbody>
</table>
</div>

                </div>
                <div className="">
                   <h2 className='text-3xl font-bold text-red-500 mt-5 mb-4'>Pending Orders</h2>

                   <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
<table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
            <th scope="col" className="px-3 text-sm text-center py-3">
                Booking ID
            </th>
            <th scope="col" className="px-3 text-center py-3">
                Status
            </th>
            <th scope="col" className="px-3 text-center py-3">
                B. Date
            </th>
            <th scope="col" className=" text-center py-3">
                T. Amount
            </th>
            
            <th scope="col" className="px-3 text-center py-3">
                Action
            </th>
        </tr>
    </thead>
    <tbody>
        {
            pendingOrder && pendingOrder.map((order) =>(
                <tr key={order._id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {order._id}
                </th>
                <td className="px-6 py-4">
                    Pending
                </td>
                <td className="px-6 py-4">
                    {order.date}
                </td>
                <td className="px-6 py-4">
                    ${parseInt(order.product.amount).toFixed(2)}
                </td>
                
                <td className="flex py-4">
                <button onClick={()=>handleDeleteOrder(order._id)} type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-2 py-2.5 text-center me-2 mb-2">Cancel booking</button>
                <Link to='/checkout' state={{cart:order.product.products, total: parseInt(order.product.amount)}} type="button" className="text-white ml-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center me-2 mb-2">Go to Payment</Link>
                </td>
            </tr>
            ))
        }
        
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