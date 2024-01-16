import React, { useEffect, useState } from 'react';
import profileAvatar from '../../../../assets/images/profile_avatar.jpg';

import { AiOutlineLeft, AiOutlineRight, AiFillStar,
  AiOutlineSearch, AiOutlineShopping, AiFillHeart, AiOutlineSync } 
from "react-icons/ai";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const UserReview = () => {
    const [reviews, setReviews] = useState([])
    console.log(reviews)
    const getReviews = () =>{
        fetch('http://localhost:3000/getReview')
        .then(res => res.json())
        .then(result => {
            setReviews(result)
        })
    }

    useEffect(() =>{
        getReviews();
    })
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
        <div className="container mt-9 ml-12">
            <h1 className="text-center exclusive-title text-2xl font-bold exclusive-sub-title">Customer Reviews</h1>
        <div>
        <div className="flex justify-center px-6">
        <Slider {...settings} className=" w-10/12  mt-8">
         {
            reviews.map((review) => (
            <div key={review._id} className="p-2">
            <div  className="w-full mt-3 h-56 p-3 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-col items-center pb-10">
                <img className="w-16 h-16 mb-3 rounded-full shadow-lg" src={review.image !== null ? review.image : profileAvatar} alt="Bonnie image"/>
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{review.userName}</h5>
                <span className="text-sm text-center text-gray-500 dark:text-gray-400">{review.content}</span>
                
            </div>
            </div>
            </div>   
            ))
         }
       </Slider>
   
        </div>
      </div>
      </div>
    );
};

export default UserReview;