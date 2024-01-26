import React, { useContext, useEffect, useState } from 'react';
import Slider from "react-slick";
import avatar from '../../../assets/images/profile_avatar.jpg'
import { AiFillStar, AiFillHeart, AiOutlineSync, AiOutlineSearch, AiOutlineShopping, AiFillShop } from "react-icons/ai";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useCart from '../../../CustomHook/useCart';
import { AuthContext } from '../../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import swal from 'sweetalert';
import UserReview from '../Home/UserReview/UserReview';


const ProductDetails = () => {


  const location = useLocation();
  console.log('this data from location state - ', location)
  const { _id, brand, category, details, images, name, price, quantity, size, subCategory } = location.state;
  const { user } = useContext(AuthContext);
  const [cart, refetch] = useCart();
  const navigate = useNavigate();
  let [productQuantity, setProductQuantity] = useState(1)
  const [relativeProducts, setRelativeProducts] = useState([])



  const getRelativeProducts = async () => {
    await fetch(`https://quieasycarts.onrender.com/products/${subCategory}`)
      .then(res => res.json())
      .then(result => setRelativeProducts(result))
  }

  useEffect(() => {
    getRelativeProducts()
  }, [])

  const handleProductQuantity = (type) => {
    console.log('hello')
    if (type === 'increase') {
      
      if (productQuantity+1 > quantity){
        Swal.fire({
          title: "Out Of Stock",
          text: "You can't add quantity over from stock quantity",
          icon: "error"
        });
      }
      else{
        productQuantity++;
        setProductQuantity(productQuantity)
      }
      
    } else if (type === 'decrease' && productQuantity > 1) {
      productQuantity--;
      setProductQuantity(productQuantity)
    }
  }


  const handleAddToCart = data => {
    console.log(data);
    if (user && user.email) {
      const cartItem = { menuItemId: _id, name, category, subCategory, images, price, quantity: productQuantity, brand, email: user.email }

      console.log('this is cartItem data before fetch - ', cartItem)
      fetch('https://quieasycarts.onrender.com/carts', {
        method: 'POST',
        headers: {
          'content-type': "application/json"
        },
        body: JSON.stringify(cartItem)
      })
        .then(res => res.json())
        .then(data => {
          refetch() //refetch cart to update the number of items in the cart
          if (data.acknowledged) {
            Swal.fire({
              title: `${productQuantity} product added`,
              text: `${name} added in cart`,
              icon: "success"
            });
          }
        })
    }
    else {
      Swal.fire({
        title: "Please Login",
        text: "if add to cart of product",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: "No",
        confirmButtonText: "Yes"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', { state: { from: location, data:location.state } })
        }
      });
    }
  }

  const handleBuyNow = data =>{
    handleAddToCart(data)
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


      <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row justify-center px-4 md:px-8 lg:px-12 mt-12">

        <section className="w-full md:w-1/2">
          <div className="mb-3">
            <img src={images[0]} className="w-full border border-gray-200 shadow-md" style={{ height: '400px' }} alt="" />
          </div>

          <Slider {...settings}>
            {images.map((img, index) => (
              <div key={index} className='p-2'>
                <img src={img} className='h-36 mt-6' alt="" />
              </div>
            ))}
          </Slider>
        </section>

        <section className="w-full md:w-1/2 mt-4 md:mt-0 md:ml-8">
          <div>
            <h1 className='text-xl md:text-2xl lg:text-3xl font-semibold'>{name}</h1>
            <div className="flex mt-4">
              <span className='line-through text-gray-400 '>${price + 499}</span>
              <p className='text-red-400 ml-2 font-semibold'>-5% off</p>
            </div>
            <h4 className='text-xl mt-1'>${price}</h4>
            <div className="flex mt-2">
              <div className="flex">
                <h1 className="text-bold text-2xl">Brand: </h1> <h3 className="ml-2 text-bold text-xl">{brand}</h3>
              </div>
              <div className="flex ml-6">
                {
                  quantity?<span className='flex'><h1 className="text-bold text-2xl">Stock: </h1> <h3 className="ml-2 text-bold mt-1 text-xl">{quantity}</h3></span>
                  : <div className="text-bold text-2xl bg-red-400 text-white p-2 rounded-t-lg">Sold Out</div>
                }
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
                <button onClick={() => handleProductQuantity('decrease')} className='border border-gray-400 px-4 py-1'>-</button>
                <button className='border border-gray-400 px-6 py-1'>{productQuantity}</button>
                <button onClick={() => handleProductQuantity('increase')} className='border border-gray-400 px-4 py-1'>+</button>
              </div>
            </div>

            {
              quantity
              ?<div className="flex mt-9">
              <button onClick={() => handleAddToCart(location.state)} type="button" className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-semibold text-sm px-5 py-2.5 text-center me-2 mb-2">ADD TO CART</button>
              <Link to='/checkout' onClick={() => handleBuyNow(location.state)} className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-semibold text-sm px-5 py-2.5 text-center me-2 mb-2">BUY IT NOW</Link>
              </div>
              : <h1 className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-semibold text-sm px-5 py-2.5 text-center me-2 mb-2 mt-4">Producut is out of stock</h1>
            }

            <div className='mt-3'>
              <p className='font-bold'>Product Details</p>
              <article className='mt-4 text-gray-500 text-sm'>
                {details}
              </article>
            </div>
          </div>
        </section>

      </div>

    <section className="reviews px-12 py-9">
    <div className="container mx-auto">
       <h1 className="font-bold text-2xl">Customer Reviews</h1>
      <div className="reviewCard">
       <UserReview id={_id}></UserReview>
      </div>
    </div>
    </section>

      {/* relative products slider */}
      <section className='relative-product mt-12 mx-4 md:mx-12 lg:mx-24 h-auto'>
        <h2 className="text-center font-semibold text-2xl">Relative Products</h2>
        <div className="flex justify-center">
          <Slider {...relatedSettings} className="w-full md:w-10/12 lg:w-10/12 xl:w-10/12 mt-8">
            {relativeProducts.map((product) => (
              <div key={product._id} className='relative mt-6 cart-body mx-2 md:ml-6'>
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