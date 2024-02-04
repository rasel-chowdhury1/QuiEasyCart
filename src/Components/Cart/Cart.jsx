import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../CustomHook/useCart';
import Swal from 'sweetalert2';
import SingleCartItem from './SingleCartItem';
import axios from 'axios';

const Cart = () => {
   const [cart,refetch,total,tax,Shipping,grandTotal] = useCart();
  //  console.log('this data from cart component - ',cart)
  //  console.log('this total from cart component - ',total)
  //  console.log('this tax from cart component - ',tax)
  //  console.log('this shipping from cart component ', Shipping)
  //  console.log('this grandTotal from cart component ', grandTotal)
  //  let total = 0;
  //  let tax = 0;
  //  let Shipping = 0;


   const updateCartQuantity = async (cartItemId, ItemId, newQuantity) => {
    try {
      await fetch(`http://localhost:3000/carts/${cartItemId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ quantity: newQuantity,menuItemId: ItemId  }),
      })
      .then(res => res.json())
      .then(data => {
        if(data.error){
          Swal.fire({
            title: "Out Of Stock!!!",
            text: "not available this quantity! please click decrese button",
            icon: "error"
          });
        }
      })
    } catch (error) {
      console.error('Error updating cart quantity:', error);
      // Handle error as needed
    }
  };

  const handleDeleteCartItem = id =>{
    console.log('clicked delete button.id is - ',id)
   
    fetch(`http://localhost:3000/carts/${id}`,{
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

  //  const calculateTotalPrice = (cart) => {
  //   console.log('calculateTotalPrice data - ', cart)
  //   let totalPrice = 0;
  //   let totalShipping = 0
  
  //   cart.forEach((item) => {
  //     totalPrice += item.price * item.quantity;
  //     totalShipping += item.quantity;
  //   });
  //   total= totalPrice
  //   tax = totalPrice*(5/100)
  //   Shipping = totalShipping
  
  //   return totalPrice;
  // };

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
                  {cart.map(singleCart => <SingleCartItem 
                     key={singleCart._id} 
                     ct={singleCart}
                     re={refetch}
                     cart={cart}
                     updateCart={updateCartQuantity}
                    //  calculateTotal={calculateTotalPrice}
                     deleteCart = {handleDeleteCartItem}
                     ></SingleCartItem>)}

                  
                </tbody>
                
              </table>
            </div>
            
          {/*Order Summery Section */}
          <div className='flex flex-col mx-auto text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl px-5'>
            <h4 className='text-center text-2xl py-3'>Order Summary</h4>
            <p className='py-1 flex flex-row justify-between'><span >Selected Items:</span> <span className='font-bold'>{cart.length}</span></p>
            <p className='py-1 flex flex-row justify-between'><span>Total Price:</span> <span className='font-bold'>${total}</span> </p>
            <p className='py-1 flex flex-row justify-between'><span>Total Shipping:</span> <span className='font-bold'>{Shipping}</span></p>
            <p className='py-1 pb-5 flex flex-row justify-between'><span >Tax:</span> <span className='font-bold'>${tax.toFixed(2)}</span> </p>            
            <h4 className='py-5 text-xl border-t-4 border-white-500 font-bold'><div className='flex justify-between'><p>Grand Total: </p><p>${(grandTotal).toFixed(2)}</p></div></h4>
            <Link to='/checkout '  className='mx-auto'><button className="btn  px-20 text-white font-bold bg-gradient-to-b from-purple-500 to-cyan-500 hover:bg-gradient-to-bl">CheckOut</button></Link>
          </div>
        </div>
    </div>
)};

export default Cart;