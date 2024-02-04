import React,{useState,useEffect } from 'react';
import { Link } from 'react-router-dom';

const AdminContact = () => {
  const [messages, setMessages] = useState([])
  const [currentPage, setCurrentPage] = useState(0)
  const [itemsPerPage,setItemsPerPage] = useState(20)
  const [totalMessages, setTotalMessages] = useState(0)

  const totalPages = Math.ceil(totalMessages/itemsPerPage); 
  const pageNumber = [];
  for(let i=1; i<= totalPages; i++)
  {
    pageNumber.push(i)
  }
  console.log('pageNumber',pageNumber,totalPages)

  useEffect( ()=>{
    async function fetchData() {
      const response = await fetch(`http://localhost:3000/allContact?&page=${currentPage}&limit=${itemsPerPage}`)

      const data = await response.json();
      console.log("loaded data",data)
      console.log('loaded data length is ', data.len)
      console.log('loaded data result is ', data.result)
      setTotalMessages(data.len);
      setMessages(data.result);
  }
  fetchData();
  },[currentPage,itemsPerPage])

    return (
        <div>
        <div className='flex shadow-xl rounded-md'>
          <div className="card w-96 bg-base-100 shadow-xl image-full m-4 ">
            <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className=" text-3xl text-center">Total Contacts</h2>
              <hr className='' />
              <p className=" text-5xl text-center">{messages.length}</p>
              <div className="card-actions justify-center py-4 m-2">
                <button className="btn btn-primary ">View Details</button>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl image-full m-4">
            <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className=" text-3xl text-center">New Contacts</h2>
              <hr className='' />
              <p className=" text-5xl text-center">130</p>
              <div className="card-actions justify-center py-4 m-2">
                <button className="btn btn-primary ">View Details</button>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl image-full m-4">
            <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className=" text-3xl text-center">Pending Contacts</h2>
              <hr className='' />
              <p className=" text-5xl text-center">65</p>
              <div className="card-actions justify-center py-4 m-2">
                <button className="btn btn-primary ">View Details</button>
              </div>
            </div>
          </div>
  
  
        </div>
  
        <div className="overflow-x-auto m-4 shadow-xl">
          <table className="table table-xs">
            <thead>
              <tr className='bg-gradient-to-r w-full from-cyan-500 to-blue-500'>
                <th>SN.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Message</th>
              </tr>
            </thead>
            <tbody>
             {
              messages.map((message,index) =>(
                <tr key={message._id}>
                <th>{index+1}</th>
                <td>{message.userName}</td>
                <td>{message.email}</td>
                <td>{message.message}</td>
              </tr>
              ))
             }
            </tbody>
            <tfoot>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Message</th>
              </tr>
            </tfoot>
          </table>
        </div>
  
  
        {/* Pagination */}
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
                    pageNumber.map(page => <li key={page}>
                      <Link onClick={() => setCurrentPage(page-1)} className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{page}</Link>
                    </li>)
                  }
                <li>
                {
                    currentPage+1 === totalMessages 
                    ? <Link  className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</Link>
                    : <Link onClick={() => setCurrentPage(currentPage+1)} className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</Link>
                  }
                </li>
              </ul>
            </nav>
      </div>
    );
};

export default AdminContact;