import React from 'react';
import './CategoryLogo.css';

const CategoryLogo = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-5 gap-4 w-4/5 justify-center mx-auto my-8 '>

            <div className='category grid justify-items-center'>
                <div className="category-image ">
                    <img src='https://ps-beautyshop.myshopify.com/cdn/shop/files/Beauty_icon_4_60x.png?v=1613681483%22%20class=%22img-fluid%20lazyloaded' className=" border-2 border-solid-400 p-4 my-5"></img>
                </div>
                <h2 className='uppercase '>manicure</h2>
            </div>

            <div className='category grid justify-items-center '>
                <div className="category-image ">
                    <img src='https://ps-beautyshop.myshopify.com/cdn/shop/files/Beauty_icon_5_60x.png?v=1613681483' className=" border-2 border-solid-400 p-4 my-5"></img>
                </div>
                <h2 className='uppercase '>manicure</h2>
            </div>

            <div className='category grid justify-items-center '>
                <div className="category-image ">
                    <img src='https://ps-beautyshop.myshopify.com/cdn/shop/files/icon_8_60x.png?v=1613681497' className=" border-2 border-solid-400 p-4 my-5"></img>
                </div>
                <h2 className='uppercase '>manicure</h2>
            </div>

            <div className='category grid justify-items-center '>
                <div className="category-image ">
                    <img src='https://ps-beautyshop.myshopify.com/cdn/shop/files/Beauty_icon_3_60x.png?v=1613681483' className=" border-2 border-solid-400 p-4 my-5"></img>
                </div>
                <h2 className='uppercase '>manicure</h2>
            </div>

            <div className='category grid justify-items-center '>
                <div className="category-image ">
                    <img src='https://ps-beautyshop.myshopify.com/cdn/shop/files/icon_12_60x.png?v=1613681497' className=" border-2 border-solid-400 p-4 my-5"></img>
                </div>
                <h2 className='uppercase '>manicure</h2>
            </div>

        </div>
    );
};

export default CategoryLogo;