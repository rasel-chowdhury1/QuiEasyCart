import React from 'react';
import { CiMobile2 } from 'react-icons/ci';
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';

const OrderDetails = () => {
   const location = useLocation();
   const {_id,date,paidStatus,product,transactionId} = location.state;
   const {firstName, lastName, mobile, address, amount, currency, products} = product;
   console.log('products', products)
   let total = 0;
   let tax = 0;

  
   const calculateTotalPrice = (products) => {
    let totalPrice = 0;
  
    products.forEach((item) => {
      totalPrice += item.price * item.quantity;
    });
    total= totalPrice
    tax = totalPrice*(5/100)
  
    return totalPrice;
  };

  // const obj = {products,total}

    return (
      <div className='container mx-auto'>
     
        <div className='w-full flex justify-center mt-9 mb-9'>   
            <a href="#" className="block w-[1400px] max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

            <h5 className="mb-6 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Order Details</h5>
            <p className="font-semibold text-gray-700 dark:text-gray-400">Customer Name: <span className='text-sm font-normal'>{firstName}</span></p>
            <p className="font-semibold text-gray-700 dark:text-gray-400">Address: <span className='text-sm font-normal'>{address}</span></p>
            <p className="font-semibold text-gray-700 dark:text-gray-400">Mobile: <span className='text-sm font-normal'>{mobile}</span></p>
            <p className="font-semibold text-gray-700 dark:text-gray-400">Date: <span className='text-sm font-normal'>{date}</span></p>
            <p className="font-semibold text-gray-700 dark:text-gray-400">Status: <span className='text-sm font-normal'>{paidStatus? 'Paid' : 'Pending'}</span></p>
            <p className="font-semibold text-gray-700 dark:text-gray-400">Total Amount: <span className='text-sm font-normal'>${parseInt(amount).toFixed(2)}</span></p>
            <p className="font-semibold text-gray-700 dark:text-gray-400">TransactionID: <span className='text-sm font-normal'>{transactionId}</span></p>
            </a>
        </div>
        <div className='md:w-4/6'>
        <h2 className='text-center text-3xl font-bold'>Your products[{products.length} items]</h2>
        </div>
        <div className="md:flex mx-auto mt-8 mb-10">
            {/*Product Section */}
            <div className="w-4/6 ">
              <table className="table">
                {/* head */}
                <thead >
                  <tr>
                    <th className='text-base font-bold'>Product Details</th>
                    <th className='text-base font-bold'>Price</th>
                    <th className='text-base font-bold'>Quantity</th>
                    <th className='text-base font-bold'>Total</th>
                    <th className='text-base font-bold'></th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  {products.map(ct => <tr key={ct._id}>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src={ct.images[0]} alt="Avatar Tailwind CSS Component" />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{ct.name}</div>
                          <div className="text-sm opacity-50">{ct.category}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      ${ct.price}
                    </td>
                    <td>
                    <div className="flex items-center md:w-1/4">
                      <button
                        className="text-gray-500 mr-2 focus:outline-none"
                      >
                        -
                      </button>
                      <span className="text-lg">{ct.quantity}</span>
                      <button
                        className="text-gray-500 ml-2 focus:outline-none"
                      >
                        +
                      </button>
                      </div>
                    </td>
                    <th>
                      <button className="btn btn-ghost btn-xs">${ct.price * ct.quantity}</button>
                    </th>
                  </tr>)}

                  
                </tbody>
                
              </table>
            </div>
            
          {/*Order Summery Section */}
          <div className='flex flex-col mx-auto bg-blue-600 px-5'>
            <h4 className='text-center text-white text-2xl py-3'>Order Summary</h4>
            <p className='py-1 text-white text-white flex flex-row justify-between'><span >Selected Items:</span> {products.length}</p>
            <p className='py-1 text-white flex flex-row justify-between'><span >Total Price:</span> ${calculateTotalPrice(products)}</p>
            <p className='py-1 text-white flex flex-row justify-between'><span >Total Shipping:</span> 4</p>
            <p className='py-1 text-white pb-5 flex flex-row justify-between'><span>Tax:</span> ${tax.toFixed(2)} </p>            
            <h4 className='py-5 text-white text-xl border-t-4 border-gray-500 font-bold'>Grand Total: ${(total+tax).toFixed(2)}</h4>
          </div>
        </div>
    </div>
)};

export default OrderDetails;