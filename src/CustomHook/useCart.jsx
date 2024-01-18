import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const useCart = () => {
    const {user,loading} = useContext(AuthContext);
    const {data: cart=[], refetch} = useQuery({
        queryKey: ['cart', user?.email],
        enabled: !loading,
        queryFn: async ()=>{
            const response = await fetch(`https://quieasycarts.onrender.com/carts?email=${user.email}`)
            return response.json()
        }
    })
    return [cart,refetch];
};

export default useCart;