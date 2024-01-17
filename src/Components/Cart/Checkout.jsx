import React from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useLocation } from 'react-router-dom';

const Checkout = () => {
    
  const data = useLocation()
    console.log(data)
    console.log('this data of checkout ',data.state.cart)
    console.log('this totalPrice of checkout ',data.state.total)
    return (
        <div>
             <div className="max-w-3xl mx-auto mt-8 p-4 flex">
            {/* Left Section - User Information */}
            <div className="w-2/3 pr-4">
            <div className="max-w-md mx-auto mt-8 p-4 border rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      <form>
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
                className="mt-1 p-2 w-full border rounded focus:outline-none focus:border-blue-500"
                required
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
                className="mt-1 p-2 w-full border rounded focus:outline-none focus:border-blue-500"
                required
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
              className="mt-1 p-2 w-full border rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          {/* Add more shipping fields as needed */}
        </div>

        {/* Payment Information */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Payment Information</h3>
          <div>
            <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">
              Card Number
            </label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              className="mt-1 p-2 w-full border rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mt-4">
            <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700">
              Expiry Date
            </label>
            <input
              type="text"
              id="expiryDate"
              name="expiryDate"
              className="mt-1 p-2 w-full border rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mt-4">
            <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">
              CVV
            </label>
            <input
              type="text"
              id="cvv"
              name="cvv"
              className="mt-1 p-2 w-full border rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>
        </div>

        {/* Place Order Button */}
        <div className="mt-6">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded focus:outline-none hover:bg-blue-700"
          >
            Place Order
          </button>
        </div>
      </form>
    </div>
            </div>

            {/* Right Section - Order Items */}
            <div className="w-1/2 pl-4">
                <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
                <div className="w-4/6 ">
              <table className="table">
                {/* head */}
                <thead >
                  <tr>
                    <th className='text-base font-bold'>Product Details</th>
                    <th className='text-base font-bold'>Price</th>
                    <th className='text-base font-bold'>Quantity</th>
                    <th className='text-base font-bold'></th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  
                  {
                    data.state.cart.map(dt => <tr>
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
                      <td>
                        ${dt.price}
                      </td>
                      <th>
                        <button className="btn btn-ghost btn-xs">{dt.quantity}</button>
                      </th>
                    </tr>)
                  }
                </tbody>
              </table>
              <div>
              <div className="divider divider-accent w-[400px]"></div>
              <h4 className='py-3 text-xl font-bold'>Grand Total: ${data.state.total.toFixed(2)}</h4>
              </div>
              
            </div>
            </div>
            </div>
        </div>
    );
};

export default Checkout;