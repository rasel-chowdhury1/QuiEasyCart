import React, { useEffect, useState } from 'react';
import {AiOutlineCaretDown } from "react-icons/ai";
import productBanner from '../../../assets/images/product-banner.jpg'
import { Link} from 'react-router-dom';
import './Products.css'
import SingleProduct from '../SingleProduct/SingleProduct';

const Products = () => {
  const [showingCategoryList, setShowingCategoryList] = useState(true)
  const [showingPriceList, setShowingPriceList] = useState(true)
  const [showingBrandList, setShowingBrandList] = useState(true)
  const [showingSizeList, setShowingSizeList] = useState(true)
  const [products, setProducts] = useState([]);

  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemPerPage] = useState(8);
  const [categoryList, setCategoryList] = useState([])
  // const [totalProducts,loading] = useTotalProuduct();
  const [searchInput, setSearchInput] = useState('');
    const [results, setResults] = useState([]);
    const [error, setError] = useState(null);

  const [totalProducts,setTotalProducts] = useState(0)
  const [category, setCategory] = useState('');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(Infinity);
    //const itemsPerPage = 10; //TODO: make it dynamic
    const totalPages = Math.ceil(totalProducts/itemsPerPage)
    
    console.log(currentPage)
    console.log(totalPages)
    const pageNumbers = [];
    for(let i=1; i<=totalPages; i++){
        pageNumbers.push(i);
    }


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

    useEffect( ()=>{
      async function fetchData() {
          const response = await fetch(`http://localhost:3000/products?&category=${category}&min=${minPrice}&max=${maxPrice}&page=${currentPage}&limit=${itemsPerPage}`)

          const data = await response.json();
          console.log("loaded data",data)
          console.log('loaded data length is ', data.len)
          console.log('loaded data result is ', data.result)
          setTotalProducts(data.len)
          setProducts(data.result);
      }
      fetchData();
  },[category,minPrice,maxPrice,currentPage,itemsPerPage])

  useEffect(() =>{
    fetch('http://localhost:3000/allCategories')
    .then(res => res.json())
    .then(data => setCategoryList(data))
  },[])

  console.log('category list is - ',categoryList)

  const search = async () => {
    try {
      setProducts([])
      const response = await fetch(`http://localhost:3000/api/search?query=${encodeURIComponent(searchInput)}`);
      const data = await response.json();

      setProducts(data);
      setError(null);
    } catch (error) {
      console.error('Error fetching data:', error);
      setResults([]);
      setError('Error fetching data.');
    }
  };



  return (
    <div className='container mx-auto pro'>
      <div className="flex justify-center w-screen px-16 mt-6">

        <aside className="w-1/5 ...">
          
          <div className="category-card w-full px-6 py-9 max-w-sm bg-white border border-gray-200 rounded shadow">
            <div className="flex justify-between">
              <h1 className='font-semibold'>CATEGORY</h1>
              <AiOutlineCaretDown onClick={handleCategoryList} className="cursor-pointer" />
            </div>

            <div className="mt-6" id="category-list">
              
              <ul>
                <li onClick={() => {setCategory('');setMinPrice(0);setMaxPrice(Infinity);}} className='mt-2'>All Products</li>
                {
                  categoryList.map(cat => <li onClick={() => setCategory(cat.category)} className='mt-2'>{cat.category}</li>)
                }
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
                      <p onClick={() => {setMinPrice(0);setMaxPrice(500)}} className='ml-3'>Below $500</p>
                    </div>
                  </li>
                  <li className='mt-2'>
                    <div className="flex">
                      <input id="checkbox-item-1" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-50 mt-1" />
                      <p onClick={() => {setMinPrice(500);setMaxPrice(2000)}} className='ml-3'>$500 - $2000</p>
                    </div>
                  </li>
                  <li className='mt-2'>
                    <div className="flex">
                      <input id="checkbox-item-1" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-50 mt-1" />
                      <p onClick={() => {setMinPrice(2001);setMaxPrice(5000)}} className='ml-3'>$2001 - $5000</p>
                    </div>
                  </li>
                  <li className='mt-2'>
                    <div className="flex">
                      <input id="checkbox-item-1" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-50 mt-1" />
                      <p onClick={() => {setMinPrice(5001);setMaxPrice(10000)}} className='ml-3'>$5001 - $10000</p>
                    </div>
                  </li>
                  <li className='mt-2'>
                    <div className="flex">
                      <input id="checkbox-item-1" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-50 mt-1" />
                      <p onClick={() => {setMinPrice(10001);setMaxPrice(Infinity)}}className='ml-3'>Above $10001</p>
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
          {/** searchbar section */}
          <div className="flex w-3/4 my-4 mx-auto">
                      <div>
                          <div>
                          <input type='text' value={searchInput} onChange={(e) => setSearchInput(e.target.value)} className="input input-bordered  w-[600px]" placeholder="Search product "/>
          
                          </div>
                      </div>
                      <div>
                          <button onClick={search} className="btn w-[200px] ">Search</button>
                      </div>
          </div>
          
          
          {/* Product banner section  */}
          <div className="product-banner px-16 ">
            <img src={productBanner} className='w-' alt="" />
          </div>

          <div className="all-product mt-9">
            <h1 className='text-center text-3xl p-2 m-2 mt-4 font-semibold shadow'>Showing Products {(currentPage*itemsPerPage)+1} to {(currentPage*itemsPerPage) + itemsPerPage} from {totalProducts} Results</h1>



            <div className="flex flex-wrap mt-12 px-12 ">
              
              {products.map(pro=> <SingleProduct key={pro._id} product={pro}></SingleProduct>)}

            </div>





            {/* Product Pagination Section   */}

            <nav aria-label="Page  navigation example">
              <ul className="inline-flex mt-6 ml-9 -space-x-px text-sm">
                <li>
                  {
                    currentPage === 0 
                    ? <Link  className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</Link>
                    : <Link onClick={() => setCurrentPage(currentPage-1)} className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</Link>
                  }
                  
                </li>
                  {
                    pageNumbers.map(page => <li key={page}>
                      <Link onClick={() => setCurrentPage(page-1)} className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{page}</Link>
                    </li>)
                  }
                <li>
                {
                    currentPage+1 === totalPages 
                    ? <Link  className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</Link>
                    : <Link onClick={() => setCurrentPage(currentPage+1)} className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</Link>
                  }
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