import React from 'react';
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from 'react-router-dom';
import useCart from '../../CustomHook/useCart';
import Swal from 'sweetalert2';

const Cart = () => {
   const [cart,refetch] = useCart();
   console.log(cart)
   let total = 0;
   let tax = 0;


   const handleDeleteCartItem = id =>{
    console.log('clicked delete button.id is - ',id)
   
    fetch(`https://quieasycarts.onrender.com/carts/${id}`,{
      method: "DELETE"
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.deletedCount === 1){
        refetch()
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

   const calculateTotalPrice = (cart) => {
    let totalPrice = 0;
  
    cart.forEach((item) => {
      totalPrice += item.price * item.quantity;
    });
    total= totalPrice
    tax = totalPrice*(5/100)
  
    return totalPrice;
  };

  // const obj = {cart,total}

    return (
      <div>
        <div className='h-[100px] bg-gray-400'>
            <h1>HOME/Cart</h1>
        </div>
        <div className='md:w-4/6'>
        <h2 className='text-center text-3xl font-bold'>Your Cart[{cart.length} items]</h2>
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
                  {cart.map(ct => <tr key={ct._id}>
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
                    <th>
                      <button onClick={()=>handleDeleteCartItem(ct._id)} className="btn btn-ghost btn-xs"><RiDeleteBin6Line className='text-2xl text-red-400' /></button>
                    </th>
                  </tr>)}

                  
                </tbody>
                
              </table>
            </div>
            
          {/*Order Summery Section */}
          <div className='flex flex-col mx-auto bg-red-400 px-5'>
            <h4 className='text-center text-2xl py-3'>Order Summary</h4>
            <p className='py-1 flex flex-row justify-between'><span className='text-black'>Selected Items:</span> {cart.length}</p>
            <p className='py-1 flex flex-row justify-between'><span className='text-black'>Total Price:</span> ${calculateTotalPrice(cart)}</p>
            <p className='py-1 flex flex-row justify-between'><span className='text-black'>Total Shipping:</span> 4</p>
            <p className='py-1 pb-5 flex flex-row justify-between'><span className='text-black'>Tax:</span> ${tax.toFixed(2)} </p>            
            <h4 className='py-5 text-xl border-t-4 border-gray-500 font-bold'>Grand Total: ${(total+tax).toFixed(2)}</h4>
            <Link to='/checkout ' state={{cart,total:total+tax}} className='mx-auto'><button className="btn btn-success text-white">CheckOut</button></Link>
          </div>
        </div>
    </div>
)};

export default Cart;