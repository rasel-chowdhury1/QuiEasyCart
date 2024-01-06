import React from 'react';
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from 'react-router-dom';

const Cart = () => {
    return (
      <div>
        <div className='h-[100px] bg-gray-400'>
            <h1>HOME/Cart</h1>
        </div>
        <div className='md:w-4/6'>
        <h2 className='text-center text-3xl font-bold'>Your Cart[4 items]</h2>
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
                  <tr>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src="https://placekitten.com/100/100" alt="Avatar Tailwind CSS Component" />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">Hart Hagerty</div>
                          <div className="text-sm opacity-50">United States</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      $100
                    </td>
                    <td>
                    <div className="flex items-center md:w-1/4">
                      <button
                        className="text-gray-500 mr-2 focus:outline-none"
                      >
                        -
                      </button>
                      <span className="text-lg">1</span>
                      <button
                        className="text-gray-500 ml-2 focus:outline-none"
                      >
                        +
                      </button>
                      </div>
                    </td>
                    <th>
                      <button className="btn btn-ghost btn-xs">$469.99</button>
                    </th>
                    <th>
                      <button className="btn btn-ghost btn-xs"><RiDeleteBin6Line className='text-2xl text-red-400' /></button>
                    </th>
                  </tr>

                  {/* row 2 */}
                  <tr>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src="https://placekitten.com/100/100" alt="Avatar Tailwind CSS Component" />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">Hart Hagerty</div>
                          <div className="text-sm opacity-50">United States</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      $100
                    </td>
                    <td>
                    <div className="flex items-center md:w-1/4">
                      <button
                        className="text-gray-500 mr-2 focus:outline-none"
                      >
                        -
                      </button>
                      <span className="text-lg">1</span>
                      <button
                        className="text-gray-500 ml-2 focus:outline-none"
                      >
                        +
                      </button>
                      </div>
                    </td>
                    <th>
                      <button className="btn btn-ghost btn-xs">$469.99</button>
                    </th>
                    <th>
                      <button className="btn btn-ghost btn-xs"><RiDeleteBin6Line className='text-2xl text-red-400' /></button>
                    </th>
                  </tr>

                  {/* row 3 */}
                  <tr>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src="https://placekitten.com/100/100" alt="Avatar Tailwind CSS Component" />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">Hart Hagerty</div>
                          <div className="text-sm opacity-50">United States</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      $100
                    </td>
                    <td>
                    <div className="flex items-center md:w-1/4">
                      <button
                        className="text-gray-500 mr-2 focus:outline-none"
                      >
                        -
                      </button>
                      <span className="text-lg">1</span>
                      <button
                        className="text-gray-500 ml-2 focus:outline-none"
                      >
                        +
                      </button>
                      </div>
                    </td>
                    <th>
                      <button className="btn btn-ghost btn-xs">$469.99</button>
                    </th>
                    <th>
                      <button className="btn btn-ghost btn-xs"><RiDeleteBin6Line className='text-2xl text-red-400' /></button>
                    </th>
                  </tr>

                  {/* row 4 */}
                  <tr>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src="https://placekitten.com/100/100" alt="Avatar Tailwind CSS Component" />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">Hart Hagerty</div>
                          <div className="text-sm opacity-50">United States</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      $100
                    </td>
                    <td>
                    <div className="flex items-center md:w-1/4">
                      <button
                        className="text-gray-500 mr-2 focus:outline-none"
                      >
                        -
                      </button>
                      <span className="text-lg">1</span>
                      <button
                        className="text-gray-500 ml-2 focus:outline-none"
                      >
                        +
                      </button>
                      </div>
                    </td>
                    <th>
                      <button className="btn btn-ghost btn-xs">$469.99</button>
                    </th>
                    <th>
                      <button className="btn btn-ghost btn-xs"><RiDeleteBin6Line className='text-2xl text-red-400' /></button>
                    </th>
                  </tr>

                  {/* row 5 */}
                  <tr>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src="https://placekitten.com/100/100" alt="Avatar Tailwind CSS Component" />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">Hart Hagerty</div>
                          <div className="text-sm opacity-50">United States</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      $100
                    </td>
                    <td>
                    <div className="flex items-center md:w-1/4">
                      <button
                        className="text-gray-500 mr-2 focus:outline-none"
                      >
                        -
                      </button>
                      <span className="text-lg">1</span>
                      <button
                        className="text-gray-500 ml-2 focus:outline-none"
                      >
                        +
                      </button>
                      </div>
                    </td>
                    <th>
                      <button className="btn btn-ghost btn-xs">$469.99</button>
                    </th>
                    <th>
                      <button className="btn btn-ghost btn-xs"><RiDeleteBin6Line className='text-2xl text-red-400' /></button>
                    </th>
                  </tr>
                </tbody>
                {/* foot */}
                <tfoot>
                <tr>
                    <th>Product Details</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th></th>
                  </tr>
                </tfoot>
                
              </table>
            </div>
            
          {/*Order Summery Section */}
          <div className='flex flex-col mx-auto bg-red-400 px-5'>
            <h4 className='text-center text-2xl py-3'>Order Summary</h4>
            <p className='py-1 flex flex-row justify-between'><span className='text-black'>Selected Items:</span> 10</p>
            <p className='py-1 flex flex-row justify-between'><span className='text-black'>Total Price:</span> $2000.00</p>
            <p className='py-1 flex flex-row justify-between'><span className='text-black'>Total Shipping:</span> 4</p>
            <p className='py-1 pb-5 flex flex-row justify-between'><span className='text-black'>Tax:</span> $33.00 </p>            <h4 className='py-5 text-xl border-t-4 border-gray-500 font-bold'>Grand Total: $10540</h4>
            <Link to='/checkout ' className='mx-auto'><button className="btn btn-success text-white">CheckOut</button></Link>
          </div>
        </div>
    </div>
)};

export default Cart;