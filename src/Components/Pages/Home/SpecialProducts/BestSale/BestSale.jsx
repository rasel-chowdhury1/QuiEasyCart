import React, { useEffect, useState } from 'react';
import '../../SpecialProducts/TopRated/TopRated.css';
import { AiFillStar,AiFillHeart, AiOutlineSync, AiOutlineSearch , AiOutlineShopping, AiFillShop} from "react-icons/ai";
const BestSale = () => {
    const [bestSaleProducts,setBestSaleProducts] = useState([]);
    // const {product} = bestSaleProducts.slice(8,16);
    // const {products} = product;
    console.log('best',bestSaleProducts)

    const getOrder = () =>{
      fetch('http://localhost:3000/allOrder')
      .then(res => res.json())
      .then(result => setBestSaleProducts(result))
    }
    useEffect(()=>{
      getOrder();
    },[])
    return (
        <div className='container mx-auto'>
            <section className='h-min-screen px-6'>

            <div className="flex flex-wrap md:flex-wrap flex-row justify-center px-9 sm:px-28 md:px-9  mt-12"> 
            {
              bestSaleProducts.slice(58,60).map((product) => (
                product.product.products.map((saleProduct) => (
                  <div key={saleProduct.id} className='ml-6 relative basis-1/4 mt-3  md:basis-1/5 cart-body'>
                  <div className='img-body relative'>
                     <button className='uppercase bg-rose-600 absolute ml-3 rounded-r-lg text-white p-1 font-bold mt-3'>sale</button>
                    <img src={saleProduct.images[0]} className='w-60 h-60' alt="" />
                  </div>

                 <div className='mt-5 relative cart-body'>
                     <div className='flex justify-center'>
                     <AiFillStar className="text-yellow-400 text-xl" />
                     <AiFillStar className="text-yellow-400 text-xl" />
                     <AiFillStar className="text-yellow-400 text-xl" />
                     <AiFillStar className="text-yellow-400 text-xl" />
                     <AiFillStar className="text-gray-400 text-xl" />
                     </div>
                     <h4 className='text-center text-gray-400 text-lg font-semibold'>{saleProduct.name}</h4>
                     <div className="flex justify-center">
                         <p className='text-2xl font-semibold leading-10'>${parseInt(saleProduct.price).toFixed(2)}</p>
                         <span className='line-through ml-2 text-gray-400 mt-3'>${parseInt(saleProduct.price+490).toFixed(2)}</span>
                     </div>
                 </div>

                 <div className='flex overlay absolute top-0 left-0 w-full min-h-60 justify-center items-center bg-transparent' style={{backgroundColor:"rgba(0,0,0,.2)"}}>
                 <div className='bg-white rounded-full p-3 '>
                   <AiOutlineShopping className="text-2xl hover:text-orange-400"/>
                 </div>
                 <div className='bg-white ml-2 rounded-full p-3 '>
                   <AiFillHeart className="text-2xl hover:text-orange-400"/>
                 </div>
                 <div className='bg-white rounded-full p-3 ml-2'>
                    <AiOutlineSync className="text-2xl hover:text-orange-400"/>
                 </div>
                 <div className='bg-white rounded-full p-3 ml-2'>
                  <AiOutlineSearch className="text-2xl hover:text-orange-400"/>
                 </div>
               </div>
             </div>
                ))
              ))
            }
              </div>
            </section>
        </div>
    );
};

export default BestSale;