import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillStar,AiFillHeart, AiOutlineSync, AiOutlineSearch, AiOutlineShopping, AiFillShop } from "react-icons/ai";

const SingleProduct = ({product}) => {
    return (
        <div key={product._id} className='relative cart-body mx-2 shadow-xl gap-4 m-2 rounded-xl p-2'>
                <Link to='/products/productDetails' state={product} className='img-body relative'>
                  <p className='uppercase absolute ml-52 font-semibold mt-9'>sale</p>
                  <img  src={product.images[0]} className='w-60 h-60' alt="" />
                </Link>

                <div className='mt-5'>
                  <div className='flex justify-center'>
                    <AiFillStar className="text-yellow-400 text-xl" />
                    <AiFillStar className="text-yellow-400 text-xl" />
                    <AiFillStar className="text-yellow-400 text-xl" />
                    <AiFillStar className="text-yellow-400 text-xl" />
                    <AiFillStar className="text-gray-400 text-xl" />
                  </div>

                  <h4 className='text-center text-gray-400 text-lg w-60 font-semibold'>{product.name}</h4>
                  <div className="flex justify-center">
                    <p className='text-2xl font-semibold text-yellow-400 leading-10'>${product.price}</p>
                    <span className='line-through ml-2 text-red-700 text-gray-400 mt-3'>${product.price + 499}</span>
                  </div>
                </div>

                <div className='flex overlay absolute -mt-36 left-0 w-full min-h-70 justify-center items-center bg-transparent' style={{ backgroundColor: "rgba(0,0,0,.2)" }}>
                  <div className='bg-white rounded-full p-2 '>
                    <AiOutlineShopping className="text-2xl hover:text-orange-400" />
                  </div>
                  <div className='bg-white ml-2 rounded-full p-2 '>
                    <AiFillHeart className="text-2xl hover:text-orange-400" />
                  </div>
                  <div className='bg-white rounded-full p-2 ml-2'>
                    <AiOutlineSync className="text-2xl hover:text-orange-400" />
                  </div>
                  <div className='bg-white rounded-full p-2 ml-2'>
                    <AiOutlineSearch className="text-2xl hover:text-orange-400" />
                  </div>
                </div>
              </div>
    );
};

export default SingleProduct;