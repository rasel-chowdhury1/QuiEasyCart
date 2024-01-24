import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { RiDeleteBin6Line } from "react-icons/ri";

const SingleCartItem = ({ct,re,cart,updateCart,deleteCart,calculateTotal}) => {

  const [quantity, setQuantity] = useState(ct.quantity);
  console.log('singleCartItem data cart - ',cart)

  const handleDecrease = async () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      await updateCart(ct._id,ct.menuItemId, quantity - 1);
      re()
    //   calculateTotal(cart)
    }
  };

  const handleIncrease = async () => {
    setQuantity(quantity + 1);
    await updateCart(ct._id, ct.menuItemId, quantity + 1);
    re()
    // calculateTotal(cart)
  };





    

    return (
        <tr key={ct._id}>
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
                    <td className='text-lg font-semibold'>
                      ${ct.price}
                    </td>
                    <td>
                    <div className="flex items-center md:w-1/4">
                      <button onClick={handleDecrease}
                        className="btn btn-ghost font-bold text-red-500 mr-2 focus:outline-none"
                      >
                        -
                      </button>
                      <span className="text-lg">{quantity}</span>
                      <button onClick={handleIncrease}
                        className="font-bold btn btn-ghost text-orange-500 ml-2 focus:outline-none"
                      >
                        +
                      </button>
                      </div>
                    </td>
                    <th>
                      <button className="texl-xl">${ct.price * quantity}</button>
                    </th>
                    <th>
                      <button onClick={()=>deleteCart(ct._id)} className="btn btn-ghost btn-xs"><RiDeleteBin6Line className='text-2xl text-red-400' /></button>
                    </th>
                  </tr>
    );
};

export default SingleCartItem;