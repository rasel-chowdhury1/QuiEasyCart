import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const useCart = () => {
    const {user,loading} = useContext(AuthContext);
    let total = 0;
    let tax = 0;
    let Shipping = 0;
    let grandTotal = 0;

    const calculateTotalPrice = (cart) => {
        console.log('calculateTotalPrice data - ', cart)
        let totalPrice = 0;
        let totalShipping = 0
      
        cart.forEach((item) => {
          totalPrice += item.price * item.quantity;
          totalShipping += item.quantity;
        });
        total= totalPrice
        tax = totalPrice*(5/100)
        Shipping = totalShipping
        grandTotal = total+tax
      
        return totalPrice;
      };

    const {data: cart=[], refetch} = useQuery({
        queryKey: ['cart', user?.email],
        enabled: !loading,
        queryFn: async ()=>{
            const response = await fetch(`https://quieasycarts.onrender.com/carts?email=${user.email}`)
            return response.json()
        }
    })
    calculateTotalPrice(cart);
    return [cart,refetch,total,tax,Shipping,grandTotal];
};

export default useCart;