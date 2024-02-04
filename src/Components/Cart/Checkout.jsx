import React, { useContext, useEffect, useState } from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Providers/AuthProvider';
import useCart from '../../CustomHook/useCart';
const Checkout = () => {
  const {user,loading} = useContext(AuthContext);
  const [cart,refetch,total,tax,Shipping,grandTotal] = useCart();
    

  const userId = localStorage.getItem('userId')

  console.log("User ID :", userId)
  const data = useLocation()

  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const navigate = useNavigate()
  const today = new Date()
  
  // console.log(today.toLocaleDateString("en-US"))
  const onSubmit = (formData) => {
    console.log('this is form data ', formData)
    const order = {
      user_email: user?.email,
      userId: userId,
      firstName: formData.firstName,
      lsatName: formData.lastName,
      address: formData.address,
      currency: formData.currency,
      mobile: formData.mobile,
      amount: formData.amount,
      products: cart
    }  
    console.log('order data', order)

    fetch(`http://localhost:3000/order`, {
      method: "POST",
      headers: {
        "content-type": 'application/json'
      },
      body: JSON.stringify(order)
    })
      .then(res => res.json())
      .then(result => {
        console.log('result', result)
        window.location.replace(result.url)
      })

  }

  const [userData, setUserData] = useState({});
  const {firstName, lastName, phone, address} = userData;
  console.log(firstName, lastName, phone, address)
  // console.log("User Data : ", userData)

  const getUser = () => {
    fetch(`http://localhost:3000/user/${userId}`)
        .then(res => res.json())
        .then(result => {
            console.log(result);
            setUserData(result)
        })
}
  
   
useEffect( () => {
  getUser()
} , [])


  return (
    <div>
      <div className="max-w-5xl mx-auto mt-8 p-4 flex ">
         {/* Right Section - Order Items */}
         <div className="w-1/2 pl-4">
                <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
                <div className="w-4/6 ">
              <table className="table">
                {/* head */}
                <thead >
                  <tr>
                    <th className='text-base font-bold'>Product Details</th>
                    <th className='text-base font-bold'></th>
                    <th className='text-base font-bold'>Price</th>
                    
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  
                  {
                    cart.map(dt => <tr key={dt._id}>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img src={dt.images[0]} alt="Avatar Tailwind CSS Component" />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">{dt.name}</div>
                            <div className="text-sm opacity-50">{dt.category}</div>
                          </div>
                        </div>
                      </td>
                      <td></td>
                      <td>
                        ${dt.price}
                      </td>
                    </tr>)
                  }
                </tbody>
              </table>
              <div>
              <div className="divider divider-accent w-[400px]"></div>
              <h4 className='py-3 text-xl font-bold'><div className='flex justify-between'><p>Grand Total: </p><p>${grandTotal.toFixed(2)}</p></div></h4>
              </div>
              
            </div>
            </div>

            {/* Left Section - User Information */}
        <div className="sm:w-full lg:w-1/2 pr-4  mb-6">
          <div className="max-w-md mx-auto mt-8 p-4 border rounded shadow-md">
            <h2 className="text-2xl font-bold mb-4">Checkout</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Shipping Information */}
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">Shipping Information</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      defaultValue={firstName?firstName:""}
                      className="mt-1 p-2 w-full border rounded focus:outline-none focus:border-blue-500"
                      {...register("firstName", { required: true })}
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      defaultValue={lastName?lastName:""}
                      className="mt-1 p-2 w-full border rounded focus:outline-none focus:border-blue-500"
                      {...register("lastName", { required: true })}
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    defaultValue={address?address:""}
                    className="mt-1 p-2 w-full border rounded focus:outline-none focus:border-blue-500"
                    {...register("address", { required: true })}
                  />
                </div>
                {/* Add more shipping fields as needed */}
              </div>

              {/* Payment Information */}
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">Payment Information</h3>
                <div>
                  <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">
                    Currency
                  </label>
                  <select {...register("currency", { required: true })}
                    className="select select-bordered mt-1 p-2 w-full border rounded focus:outline-none focus:border-blue-500">
                    <option value="BDT">BDT</option>
                    <option value="USD">USD</option>
                    <option value="RMB">RMB</option>
                    <option value="EURO">EURO</option>
                  </select>
                </div>
                <div className="mt-4">
                  <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700">
                    Mobile
                  </label>
                  <input
                    type="text"
                    id="mobile"
                    name="mobile"
                    defaultValue={phone?phone:""}
                    className="mt-1 p-2 w-full border rounded focus:outline-none focus:border-blue-500"
                    {...register("mobile", { required: true })}
                  />
                </div>
                <div className="mt-4">
                  <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">
                    Amount
                  </label>
                  <input
                    type="text"
                    id="amount"
                    name="amount"
                    value={grandTotal.toFixed(2)}
                    className="mt-1 p-2 w-full border rounded focus:outline-none focus:border-blue-500"
                    {...register("amount", { required: true })}
                  />
                </div>
              </div>

              {/* Place Order Button */}
              <div className="mt-6">
                <input
                  type="submit"
                  value='Place Order'
                  className="w-full bg-blue-500 text-white p-2 rounded focus:outline-none hover:bg-blue-700"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;