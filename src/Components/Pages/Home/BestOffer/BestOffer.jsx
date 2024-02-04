import React, { useEffect, useState } from 'react';
import '../SpecialProducts/TopRated/TopRated.css';
import img1 from '../../../../assets/images/img-1.jpg';
import img2 from '../../../../assets/images/img-2.jpg';
import img3 from '../../../../assets/images/img-3.jpg';
import img4 from '../../../../assets/images/img-4.jpg';
import img5 from '../../../../assets/images/img-5.jpg';
import img6 from '../../../../assets/images/img-6.jpg';
import { AiOutlineLeft, AiOutlineRight, AiFillStar,
  AiOutlineSearch, AiOutlineShopping, AiFillHeart, AiOutlineSync } 
  from "react-icons/ai";
  import "slick-carousel/slick/slick.css";
  import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const BestOffer = () => {
  const [bestOfferProducts,setBestOfferProducts] = useState([]);

  const getOrder = () =>{
    fetch('http://localhost:3000/allOrder')
    .then(res => res.json())
    .then(result => setBestOfferProducts(result))
  }
  useEffect(()=>{
    getOrder();
  },[])

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
  };

  
    return (
      <div className="container">
      <h4 className='text-center exclusive-title'>Top Collections</h4>
            <h1 className="text-center text-2xl font-bold exclusive-sub-title">BEST OFFERS </h1>
      <div>
      <div className="flex justify-center px-6">
      <Slider {...settings} className=" w-10/12 ml-12 mt-8">
      {
        bestOfferProducts.slice(58,60).map((product) => (
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
    
      
     </Slider>
 
      </div>
    </div>
    </div>
    );
};

export default BestOffer;