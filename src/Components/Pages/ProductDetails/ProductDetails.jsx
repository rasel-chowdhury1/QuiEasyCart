import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import avatar from '../../../assets/images/profile_avatar.jpg'
import { AiFillStar, AiFillHeart, AiOutlineSync, AiOutlineSearch, AiOutlineShopping, AiFillShop } from "react-icons/ai";
import { useLocation } from 'react-router-dom';


const ProductDetails = () => {
  
  
  const location = useLocation();
  const {_id,brand,category,details,images,name,price,quantity,size,subCategory} = location.state;
  let [productQuantity, setProductQuantity] = useState(1)
  const [relativeProducts,setRelativeProducts] = useState([])
 


  const getRelativeProducts =async ()=> {
     await fetch(`http://localhost:3000/products/${subCategory}`)
     .then(res => res.json())
     .then(result => setRelativeProducts(result))
  }

  useEffect(()=>{
    getRelativeProducts()
  },[])

  const handleProductQuantity = (type) =>{
    console.log('hello')
       if(type === 'increase'){
        productQuantity++;
        setProductQuantity(productQuantity)
       }else if(type === 'decrease' && productQuantity >= 1){
        productQuantity--;
        setProductQuantity(productQuantity)
       } 
  }

  const settings = {
    autoplay: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
  }

  const relatedSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
  };
  return (
    <div className="container mx-auto mt-12">
      <div className="flex justify-center px-24">
        <section className="w-1/2 mt-12">
          <div className="mb-3 ">
            <img src={images[0]} className="w-2/3 border border-gray-200 shadow ml-12" style={{ height: '400px' }} alt="" />
          </div>

          <Slider {...settings}>
          
          {
            images.map(img =><div key={_id} className='p-2'>
            <img src={img} className='h-36 mt-6' alt="" />
          </div>)
          }
      
          
          

          </Slider>
        </section>
        <section className="w-1/2 ml-9 mt-9">
          <div>
            <h1 className='text-2xl font-semibold'>{name}</h1>
            <div className="flex mt-6">
              <span className='line-through text-gray-400 '>${price + 499}</span>
              <p className='text-red-400 ml-4 font-semibold'>-5% off</p>
            </div>
            <h4 className='text-2xl mt-1'>${price}</h4>
            <div className="flex mt-2">
              <div className="flex">
                <h1 className="text-bold text-2xl">Brand: </h1> <h3 className="ml-2 text-bold text-xl">{brand}</h3>
              </div>
              <div className="flex ml-6">
              <h1 className="text-bold text-2xl">Stock: </h1> <h3 className="ml-2 text-bold mt-1 text-xl">{quantity}</h3>
              </div>
            </div>
            <div className='mt-9'>
              <p className='text-xl font-semibold'>Select Size</p>
              <div className="flex mt-1">
                <button className='border border-gray-400 px-4 py-1'>S</button>
                <button className='border border-gray-400 px-4 py-1'>M</button>
                <button className='border border-gray-400 px-4 py-1'>X</button>
                <button className='border border-gray-400 px-4 py-1'>L</button>
                <button className='border border-gray-400 px-4 py-1'>XL</button>
              </div>
            </div>
            <div>
              <h4 className=' font-semibold mt-2'>Quantity</h4>
              <div className="flex mt-1">
                <button onClick={()=>handleProductQuantity('decrease')} className='border border-gray-400 px-4 py-1'>-</button>
                <button className='border border-gray-400 px-6 py-1'>{productQuantity}</button>
                <button onClick={()=>handleProductQuantity('increase')} className='border border-gray-400 px-4 py-1'>+</button>
              </div>
            </div>

            <div className="flex mt-9">
              <button type="button" className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-semibold text-sm px-5 py-2.5 text-center me-2 mb-2">ADD TO CART</button>
              <button type="button" className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-semibold text-sm px-5 py-2.5 text-center me-2 mb-2">BUY IT NOW</button>
            </div>

            <div className='mt-3'>
              <p className='font-bold'>Product Details</p>
              <article className='mt-4 text-gray-500 text-sm'>
                {details}
              </article>
            </div>
          </div>
        </section>
      </div>

      <section className='relative-product mt-12 ml-12 h-auto px-12 mb-20'>
        <h2 className="text-center font-semibold text-2xl">Relative Products</h2>
        <div className="flex justify-center">
          <Slider {...relatedSettings} className=" w-10/12  mt-8">
            {
              relativeProducts.map((product) => (
                <div key={product._id} className='relative mt-6 cart-body ml-6'>
              <div className='img-body relative'>
                <p className='uppercase absolute ml-52 font-semibold mt-9'>sale</p>
                <img src={product.images[0]} className='w-60 h-56' alt="" />
              </div>

              <div className='mt-5'>
                <div className='flex justify-center'>
                  <AiFillStar className="text-yellow-400 text-xl" />
                  <AiFillStar className="text-yellow-400 text-xl" />
                  <AiFillStar className="text-yellow-400 text-xl" />
                  <AiFillStar className="text-yellow-400 text-xl" />
                  <AiFillStar className="text-gray-400 text-xl" />
                </div>
                <h4 className='text-center text-gray-400 text-lg font-semibold'>{product.name}</h4>
                <div className="flex justify-center">
                  <p className='text-2xl font-semibold leading-10'>${product.price}</p>
                  <span className='line-through ml-2 text-gray-400 mt-3'>${product.price + 490}</span>
                </div>
              </div>

              <div className='flex overlay absolute top-0 left-0 w-60 min-h-60 justify-center items-center bg-transparent' style={{ backgroundColor: "rgba(0,0,0,.2)" }}>
                <div className='bg-white rounded-full p-3 '>
                  <AiOutlineShopping className="text-2xl hover:text-orange-400" />
                </div>
                <div className='bg-white ml-2 rounded-full p-3 '>
                  <AiFillHeart className="text-2xl hover:text-orange-400" />
                </div>
                <div className='bg-white rounded-full p-3 ml-2'>
                  <AiOutlineSync className="text-2xl hover:text-orange-400" />
                </div>
                <div className='bg-white rounded-full p-3 ml-2'>
                  <AiOutlineSearch className="text-2xl hover:text-orange-400" />
                </div>
              </div>
             </div>
              ))
            }
            
          </Slider>
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;