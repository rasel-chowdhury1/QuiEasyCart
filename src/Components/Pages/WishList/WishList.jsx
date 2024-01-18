import React,{useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
const WishList = () => {
  const [reacts, setReacts] = useState([])
  const [currentPage, setCurrentPage] = useState(0)
  const [itemsPerPage,setItemsPerPage] = useState(20)
  const [totalReacts, setTotalReacts] = useState(0)

  const totalPages = Math.ceil(totalReacts/itemsPerPage); 
  const pageNumber = [];
  for(let i=1; i<= totalPages; i++)
  {
    pageNumber.push(i)
  }
  console.log('pageNumber',pageNumber,totalPages)

  const getReact =async () =>{
    const response = await fetch(`http://localhost:3000/reacts?&page=${currentPage}&limit=${itemsPerPage}`)
      const data = await response.json();
      console.log("loaded data",data)
      console.log('loaded data length is ', data.len)
      console.log('loaded data result is ', data.result)
      setTotalReacts(data.len);
      setReacts(data.result);
  }

  const deleteReact =async (id) =>{
    await axios.delete(`http://localhost:3000/deleteReact/${id}`)
        .then(res => {
          getReact();
          Swal.fire({
            title: "Good job!",
            text: "Deleted Successfully!",
            icon: "success"
        });
        });
  }

  useEffect( ()=>{
    getReact();
  },[currentPage,itemsPerPage])
   
  const userId = localStorage.getItem('userId')
  const userWiseReacts = reacts.filter((user) => user.userId === userId)
  console.log(userWiseReacts)
    return (
        <div className="container mx-auto mb-6">
        <div className="overflow-x-auto m-4 shadow-xl">
        <table className="table table-xs">
          <thead>
            <tr className='bg-gradient-to-r w-full h-9 from-cyan-500 to-blue-500'>
              <th className='text-white text-center'>SN.</th>
              <th className='text-white text-center'>Product Name</th>
              <th className='text-white text-center'>Stocks</th>
              <th className='text-white text-center'>Brand</th>
              <th className='text-white text-center'>Category</th>
              <th className='text-white text-center'>Price</th>
              <th className='text-white text-center'>Action</th>
            </tr>
          </thead>
          <tbody>
           {
            userWiseReacts.map((react,index) =>(
              <tr key={react._id}>
              <th className='text-center'>{index+1}</th>
              <td className=' text-center'>{react.product.name}</td>
              <td className=' text-center'>{react.product.quantity}</td>
              <td className=' text-center'>{react.product.brand}</td>
              <td className=' text-center'>{react.product.category}</td>
              <td className=' text-center'>{react.product.price}</td>
              <td className=' text-center ml-40'>
              <Link to='/products/productDetails' state={react.product} type="button" className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mb-2">View Product</Link>
              <button onClick={()=> deleteReact(react._id)} type="button" className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mb-2">Delete Product</button>
              </td>
            </tr>
            ))
           }
          </tbody>
        
        </table>
      </div>


      {/* Pagination */}
      <nav aria-label="Page  navigation example mb-6">
            <ul className="inline-flex mt-6 ml-9 -space-x-px text-sm">
              <li>
                {
                  currentPage === 0 
                  ? <Link  className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</Link>
                  : <Link onClick={() => setCurrentPage(currentPage-1)} className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</Link>
                }
              </li>
                {
                  pageNumber.map(page => <li key={page}>
                    <Link onClick={() => setCurrentPage(page-1)} className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{page}</Link>
                  </li>)
                }
              <li>
              {
                  currentPage+1 === totalReacts 
                  ? <Link  className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</Link>
                  : <Link onClick={() => setCurrentPage(currentPage+1)} className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</Link>
                }
              </li>
            </ul>
          </nav>
        </div>
    );
};

export default WishList;