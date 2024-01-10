import React, { useEffect, useState } from 'react';
import { AiFillStar, AiOutlineCaretDown, AiFillHeart, AiOutlineSync, AiOutlineSearch, AiOutlineShopping, AiFillShop } from "react-icons/ai";
import productBanner from '../../../assets/images/product-banner.jpg'
import { Link } from 'react-router-dom';


const Products = () => {
  const [showingCategoryList, setShowingCategoryList] = useState(true)
  const [showingPriceList, setShowingPriceList] = useState(true)
  const [showingBrandList, setShowingBrandList] = useState(true)
  const [showingSizeList, setShowingSizeList] = useState(true)
  const [products, setProducts] = useState([]);


  const handleCategoryList = () => {
    const list = document.getElementById('category-list')
    if (showingCategoryList === true) {
      list.style.display = 'none';
      setShowingCategoryList(false)
    } else {
      list.style.display = 'block';
      setShowingCategoryList(true)
    }
  }

  const handlePriceList = () => {
    const list = document.getElementById('price-list')
    if (showingPriceList === true) {
      list.style.display = 'none';
      setShowingPriceList(false)
    } else {
      list.style.display = 'block';
      setShowingPriceList(true)
    }
  }

  const handleBrandList = () => {
    const list = document.getElementById('brand-list')
    if (showingBrandList === true) {
      list.style.display = 'none';
      setShowingBrandList(false)
    } else {
      list.style.display = 'block';
      setShowingBrandList(true)
    }
  }

  const handleSizeList = () => {
    const list = document.getElementById('size-list')
    if (showingSizeList === true) {
      list.style.display = 'none';
      setShowingSizeList(false)
    } else {
      list.style.display = 'block';
      setShowingSizeList(true)
    }
  }

  useEffect(() => {
    fetch("http://localhost:3000/allProducts")
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  return (
    <div className='container mx-auto'>
      <div className="flex justify-center w-screen px-16 mt-6">

        <aside className="w-1/5 ...">
          <div className="category-card w-full px-6 py-9 max-w-sm bg-white border border-gray-200 rounded shadow">
            <div className="flex justify-between">
              <h1 className='font-semibold'>CATEGORY</h1>
              <AiOutlineCaretDown onClick={handleCategoryList} className="cursor-pointer" />
            </div>

            <div className="mt-6" id="category-list">
              <ul>
                <li className='mt-2'>Best Products</li>
                <li className='mt-2'>Cosmetics</li>
                <li className='mt-2'>Beauty World</li>
                <li className='mt-2'>Offer Collection</li>
                <li className='mt-2'>Mega Collection</li>
              </ul>
            </div>
          </div>

          <div className="filtering-card mb-9 mt-9 w-full px-6 py-9 max-w-sm bg-white border border-gray-200 rounded shadow">
            <div className="price-card">
              <div className="flex justify-between">
                <h1 className='font-semibold'>Price</h1>
                <AiOutlineCaretDown onClick={handlePriceList} className="cursor-pointer" />
              </div>

              <div className="mt-6" id="price-list">
                <ul>
                  <li className='mt-2'>
                    <div className="flex">
                      <input id="checkbox-item-1" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-50 mt-1" />
                      <p className='ml-3'>Below $50</p>
                    </div>
                  </li>
                  <li className='mt-2'>
                    <div className="flex">
                      <input id="checkbox-item-1" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-50 mt-1" />
                      <p className='ml-3'>$51 - $100</p>
                    </div>
                  </li>
                  <li className='mt-2'>
                    <div className="flex">
                      <input id="checkbox-item-1" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-50 mt-1" />
                      <p className='ml-3'>$101 - $200</p>
                    </div>
                  </li>
                  <li className='mt-2'>
                    <div className="flex">
                      <input id="checkbox-item-1" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-50 mt-1" />
                      <p className='ml-3'>$201 - $300</p>
                    </div>
                  </li>
                  <li className='mt-2'>
                    <div className="flex">
                      <input id="checkbox-item-1" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-50 mt-1" />
                      <p className='ml-3'>Above $400</p>
                    </div>
                  </li>
                </ul>
              </div>
              <hr className="h-0.5 mt-6 bg-gray-400"></hr>
            </div>

            <div className="brand-card mt-6">
              <div className="flex justify-between">
                <h1 className='font-semibold'>Brand</h1>
                <AiOutlineCaretDown onClick={handleBrandList} className="cursor-pointer" />
              </div>

              <div className="mt-6" id="brand-list">
                <ul>
                  <li className='mt-2'>
                    <div className="flex">
                      <input id="checkbox-item-1" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-50 mt-1" />
                      <p className='ml-3 uppercase'>simule</p>
                    </div>
                  </li>
                  <li className='mt-2'>
                    <div className="flex">
                      <input id="checkbox-item-1" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-50 mt-1" />
                      <p className='ml-3 uppercase'>misule</p>
                    </div>
                  </li>
                  <li className='mt-2'>
                    <div className="flex">
                      <input id="checkbox-item-1" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-50 mt-1" />
                      <p className='ml-3 uppercase'>life style</p>
                    </div>
                  </li>
                  <li className='mt-2'>
                    <div className="flex">
                      <input id="checkbox-item-1" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-50 mt-1" />
                      <p className='ml-3 uppercase'>nill</p>
                    </div>
                  </li>
                  <li className='mt-2'>
                    <div className="flex">
                      <input id="checkbox-item-1" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-50 mt-1" />
                      <p className='ml-3 uppercase'>zara</p>
                    </div>
                  </li>
                </ul>
              </div>
              <hr className="h-0.5 mt-6 bg-gray-400"></hr>
            </div>

            <div className="size-card mt-6">
              <div className="flex justify-between">
                <h1 className='font-semibold'>Size</h1>
                <AiOutlineCaretDown onClick={handleSizeList} className="cursor-pointer" />
              </div>

              <div className="mt-6" id="size-list">
                <ul>
                  <li className='mt-2'>
                    <div className="flex">
                      <input id="checkbox-item-1" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-50 mt-1" />
                      <p className='ml-3'>S</p>
                    </div>
                  </li>
                  <li className='mt-2'>
                    <div className="flex">
                      <input id="checkbox-item-1" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-50 mt-1" />
                      <p className='ml-3'>M</p>
                    </div>
                  </li>
                  <li className='mt-2'>
                    <div className="flex">
                      <input id="checkbox-item-1" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-50 mt-1" />
                      <p className='ml-3'>L</p>
                    </div>
                  </li>
                  <li className='mt-2'>
                    <div className="flex">
                      <input id="checkbox-item-1" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-50 mt-1" />
                      <p className='ml-3'>XL</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </aside>





        {/* Main product section  */}
        <div className="w-4/5 ...">
          {/* Product banner section  */}
          <div className="product-banner px-16 ">
            <img src={productBanner} className='w-' alt="" />
          </div>

          <div className="all-product mt-9">
            <h1 className='text-center text-3xl p-2 m-2 mt-4 font-semibold shadow'>Showing Products 1 to 12 from {products.length} Results</h1>



            <div className="flex flex-wrap mt-12 px-12 ">

              {products.map(product => <div key={product._id} className='relative cart-body mx-2 shadow-xl gap-4 m-2 rounded-xl p-2'>
                <Link to='/products/productDetails' className='img-body relative'>
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
              </div>)}

            </div>





            {/* Product Pagination Section   */}

            <nav aria-label="Page  navigation example">
              <ul className="inline-flex mt-6 ml-9 -space-x-px text-sm">
                <li>
                  <a href="#" className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
                </li>
                <li>
                  <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                </li>
                <li>
                  <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                </li>
                <li>
                  <a href="#" aria-current="page" className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                </li>
                <li>
                  <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
                </li>
                <li>
                  <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
                </li>
                <li>
                  <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
                </li>
              </ul>
            </nav>
          </div>


        </div>

      </div>
    </div>
  );
};

export default Products;