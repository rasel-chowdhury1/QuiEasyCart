import React, { useEffect, useState } from 'react';

const useTotalProuduct = () => {
    const [totalProducts,setTotalProducts] = useState(0)
    const [loading,setLoading] = useState(false)
    useEffect(() =>{
        fetch("http://localhost:3000/totalProducts")
        .then(res => res.json())
        .then(data => {
            setTotalProducts(data.totalProducts);
            setLoading(true)
        })
    },[])

    return [totalProducts,loading];
};

export default useTotalProuduct;