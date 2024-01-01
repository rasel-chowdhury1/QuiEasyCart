import React from 'react';

const Brand = () => {
    return (
        <div className='flex flex-col md:flex-row w-3/4 mx-auto my-10'>
            <img src="https://ps-beautyshop.myshopify.com/cdn/shop/files/beauty_trand_1_a42f410a-0900-4e5f-9ea7-b05be96f5d9b_570x.png?v=1613681498" alt="brand-images" />
            <div className='my-auto'>
                <h3 className='text-3xl pb-5'>BEAUTY TRANDS</h3>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
            </div>
        </div>
    );
};

export default Brand;