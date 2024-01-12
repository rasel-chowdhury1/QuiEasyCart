import React, { useState } from 'react';
import img1 from '../../../assets/images/img-1.jpg'
import img2 from '../../../assets/images/img-2.jpg'
import img3 from '../../../assets/images/img-3.jpg'
import img4 from '../../../assets/images/img-4.jpg'
import Slider from "react-slick";
import avatar from '../../../assets/images/profile_avatar.jpg'

import img5 from '../../../assets/images/img-5.jpg'
import img6 from '../../../assets/images/img-6.jpg'
import img7 from '../../../assets/images/img-7.jpg'
import img8 from '../../../assets/images/img-8.jpg'
import { AiFillStar, AiFillHeart, AiOutlineSync, AiOutlineSearch, AiOutlineShopping, AiFillShop } from "react-icons/ai";
const ProductDetails = () => {
  const [showingReviewForm, setShowingReviewForm] = useState(false)

  const handleShowingReviewForm = () => {
    const id = document.getElementById('review-form');
    if (showingReviewForm === false) {
      setShowingReviewForm(true)
    } else {
      setShowingReviewForm(false)
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
    <div className="container mx-auto">
      <div className="flex justify-center px-24">
        <section className="w-1/2">
          <div className="mb-3">
            <img src={img1} className="w-full" style={{ height: '500px' }} alt="" />
          </div>

          <Slider {...settings}>
            <div className='p-2'>
              <img src={img1} className='' alt="" />
            </div>
            <div className='p-2'>
              <img src={img2} alt="" />
            </div>
            <div className='p-2'>
              <img src={img3} alt="" />
            </div>
            <div className='p-2'>
              <img src={img4} alt="" />
            </div>
          </Slider>
        </section>
        <section className="w-1/2 ml-9">
          <div>
            <h1 className='text-2xl font-semibold'>Something Primer</h1>
            <div className="flex mt-6">
              <span className='line-through text-gray-400 '>$33.00</span>
              <p className='text-red-400 ml-4 font-semibold'>-5% off</p>
            </div>
            <h4 className='text-2xl mt-1'>$320.00</h4>
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
                <button className='border border-gray-400 px-4 py-1'>-</button>
                <button className='border border-gray-400 px-6 py-1'>1</button>
                <button className='border border-gray-400 px-4 py-1'>+</button>
              </div>
            </div>

            <div className="flex mt-9">
              <button type="button" className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-semibold text-sm px-5 py-2.5 text-center me-2 mb-2">ADD TO CART</button>
              <button type="button" className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-semibold text-sm px-5 py-2.5 text-center me-2 mb-2">BUY IT NOW</button>
            </div>

            <div className='mt-3'>
              <p className='font-bold'>Product Details</p>
              <article className='mt-4 text-gray-500 text-sm'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, minima recusandae quas ipsam beatae blanditiis pariatur at alias ad sed, amet impedit cumque quo iusto tenetur deserunt obcaecati suscipit repellat natus, ipsa nam nemo reiciendis veritatis. Harum aspernatur voluptas.
              </article>
            </div>
          </div>
        </section>
      </div>

      <section className="review-part px-24 mb-6">
        <h2 className='text-center text-2xl font-semibold'>Review</h2>
        <div className="flex justify-between">
          <div>
            <h2 className='text-2xl font-medium'>Customer Comments</h2>

            <div className="flex mt-6">
              <img src={avatar} className="w-12 rounded-full" alt="" />
              <div className="ml-5">
                <p className='font-semibold text-1xl'>Nazrul Islam</p>
                <p>It's best product</p>
              </div>
            </div>

            <div className="flex mt-4">
              <img src={avatar} className="w-12 rounded-full" alt="" />
              <div className="ml-5">
                <p className='font-semibold text-1xl'>Rahim</p>
                <p>It's best product</p>
              </div>
            </div>
          </div>
          <div>
            <button onClick={handleShowingReviewForm} className='font-semibold border p-2 '>Write Comment</button>

            {
              showingReviewForm === true ? <div className='mt-6' id="review-form">
                <form action="">
                  <textarea name="" id="" placeholder="write comment" cols="30" rows="3"></textarea><br />
                  <button type='submit' className='px-3 py-1 mt-2 bg-red-400'>Submit</button>
                </form>
              </div> : ''
            }
          </div>
        </div>
      </section>

      <section className='relative-product h-auto px-12 mb-12'>
        <h2 className="text-center font-semibold text-2xl">Relative Products</h2>
        <div className="flex justify-center">
          <Slider {...relatedSettings} className=" w-10/12  mt-8">
            <div className='relative cart-body ml-6'>
              <div className='img-body relative'>
                <p className='uppercase absolute ml-52 font-semibold mt-9'>sale</p>
                <img src={img1} className='w-60 ' alt="" />
              </div>

              <div className='mt-5'>
                <div className='flex justify-center'>
                  <AiFillStar className="text-yellow-400 text-xl" />
                  <AiFillStar className="text-yellow-400 text-xl" />
                  <AiFillStar className="text-yellow-400 text-xl" />
                  <AiFillStar className="text-yellow-400 text-xl" />
                  <AiFillStar className="text-gray-400 text-xl" />
                </div>
                <h4 className='text-center text-gray-400 text-lg font-semibold'>Oil-in-Serum</h4>
                <div className="flex justify-center">
                  <p className='text-2xl font-semibold leading-10'>$500.00</p>
                  <span className='line-through ml-2 text-gray-400 mt-3'>$700.00</span>
                </div>
              </div>

              <div className='flex overlay absolute top-0 left-0 w-60 min-h-80 justify-center items-center bg-transparent' style={{ backgroundColor: "rgba(0,0,0,.2)" }}>
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
            <div className='ml-6 relative cart-body '>
              <div className='img-body relative'>
                <p className='uppercase absolute ml-52 font-semibold mt-9'>sale</p>
                <img src={img2} className='w-60 ' alt="" />
              </div>

              <div className='mt-5'>
                <div className='flex justify-center'>
                  <AiFillStar className="text-yellow-400 text-xl" />
                  <AiFillStar className="text-yellow-400 text-xl" />
                  <AiFillStar className="text-yellow-400 text-xl" />
                  <AiFillStar className="text-yellow-400 text-xl" />
                  <AiFillStar className="text-gray-400 text-xl" />
                </div>
                <h4 className='text-center text-gray-400 text-lg font-semibold'>Oil-in-Serum</h4>
                <div className="flex justify-center">
                  <p className='text-2xl font-semibold leading-10'>$500.00</p>
                  <span className='line-through ml-2 text-gray-400 mt-3'>$700.00</span>
                </div>
              </div>

              <div className='flex overlay absolute top-0 left-0 w-60 min-h-80 justify-center items-center bg-transparent' style={{ backgroundColor: "rgba(0,0,0,.2)" }}>
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
            <div className='ml-6 relative cart-body'>
              <div className='img-body relative'>
                <button className='uppercase bg-rose-600 absolute ml-3 rounded-r-lg text-white p-1 font-bold mt-3'>sale</button>
                <img src={img3} className='w-60 ' alt="" />
              </div>

              <div className='mt-5 relative cart-body'>
                <div className='flex justify-center'>
                  <AiFillStar className="text-yellow-400 text-xl" />
                  <AiFillStar className="text-yellow-400 text-xl" />
                  <AiFillStar className="text-yellow-400 text-xl" />
                  <AiFillStar className="text-yellow-400 text-xl" />
                  <AiFillStar className="text-gray-400 text-xl" />
                </div>
                <h4 className='text-center text-gray-400 text-lg font-semibold'>Oil-in-Serum</h4>
                <div className="flex justify-center">
                  <p className='text-2xl font-semibold leading-10'>$500.00</p>
                  <span className='line-through ml-2 text-gray-400 mt-3'>$700.00</span>
                </div>
              </div>

              <div className='flex overlay absolute top-0 left-0 w-60 min-h-80 justify-center items-center bg-transparent' style={{ backgroundColor: "rgba(0,0,0,.2)" }}>
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
            <div className='ml-6 relative cart-body'>
              <div className='img-body relative'>
                <p className='uppercase absolute ml-52 font-semibold mt-9'>sale</p>
                <img src={img4} className='w-60 ' alt="" />
              </div>

              <div className='mt-5'>
                <div className='flex justify-center'>
                  <AiFillStar className="text-yellow-400 text-xl" />
                  <AiFillStar className="text-yellow-400 text-xl" />
                  <AiFillStar className="text-yellow-400 text-xl" />
                  <AiFillStar className="text-yellow-400 text-xl" />
                  <AiFillStar className="text-gray-400 text-xl" />
                </div>
                <h4 className='text-center text-gray-400 text-lg font-semibold'>Oil-in-Serum</h4>
                <div className="flex justify-center">
                  <p className='text-2xl font-semibold leading-10'>$500.00</p>
                  <span className='line-through ml-2 text-gray-400 mt-3'>$700.00</span>
                </div>
              </div>
              <div className='flex overlay absolute top-0 left-0 w-60 min-h-80 justify-center items-center bg-transparent' style={{ backgroundColor: "rgba(0,0,0,.2)" }}>
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
            <div className='ml-6 relative cart-body'>
              <div className='img-body relative'>
                <p className='uppercase absolute ml-52 font-semibold mt-9'>sale</p>
                <img src={img5} className='w-60 ' alt="" />
              </div>

              <div className='mt-5'>
                <div className='flex justify-center'>
                  <AiFillStar className="text-yellow-400 text-xl" />
                  <AiFillStar className="text-yellow-400 text-xl" />
                  <AiFillStar className="text-yellow-400 text-xl" />
                  <AiFillStar className="text-yellow-400 text-xl" />
                  <AiFillStar className="text-gray-400 text-xl" />
                </div>
                <h4 className='text-center text-gray-400 text-lg font-semibold'>Oil-in-Serum</h4>
                <div className="flex justify-center">
                  <p className='text-2xl font-semibold leading-10'>$500.00</p>
                  <span className='line-through ml-2 text-gray-400 mt-3'>$700.00</span>
                </div>
              </div>
              <div className='flex overlay absolute top-0 left-0 w-60 min-h-80 justify-center items-center bg-transparent' style={{ backgroundColor: "rgba(0,0,0,.2)" }}>
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
            <div className='ml-6 relative cart-body'>
              <div className='img-body relative'>
                <p className='uppercase absolute ml-52 font-semibold mt-9'>sale</p>
                <img src={img6} className='w-60 ' alt="" />
              </div>

              <div className='mt-5'>
                <div className='flex justify-center'>
                  <AiFillStar className="text-yellow-400 text-xl" />
                  <AiFillStar className="text-yellow-400 text-xl" />
                  <AiFillStar className="text-yellow-400 text-xl" />
                  <AiFillStar className="text-yellow-400 text-xl" />
                  <AiFillStar className="text-gray-400 text-xl" />
                </div>
                <h4 className='text-center text-gray-400 text-lg font-semibold'>Oil-in-Serum</h4>
                <div className="flex justify-center">
                  <p className='text-2xl font-semibold leading-10'>$500.00</p>
                  <span className='line-through ml-2 text-gray-400 mt-3'>$700.00</span>
                </div>
              </div>
              <div className='flex overlay absolute top-0 left-0 w-60 min-h-80 justify-center items-center bg-transparent' style={{ backgroundColor: "rgba(0,0,0,.2)" }}>
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
          </Slider>
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;