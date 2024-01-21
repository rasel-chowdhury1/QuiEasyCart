import React, { useEffect, useState } from 'react';

const useProduct = () => {
    const [products,setProduct] = useState([]);
    
    useEffect(()=>{
        fetch("https://quieasycarts.onrender.com/allProducts")
        .then(res => res.json())
        .then(data => {
            setProduct(data);
        })
    },[])

    return [products];
};

export default useProduct;