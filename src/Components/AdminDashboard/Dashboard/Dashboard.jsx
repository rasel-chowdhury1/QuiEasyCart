import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const [products, setProducts] = useState([]);

    const [currentPage, setCurrentPage] = useState(0);
      const [itemsPerPage, setItemPerPage] = useState(8);
      const [totalProducts, setTotalProducts] = useState(0)
    //   const [totalProducts] = useTotalProuduct()

        const [totalProuduct, setTotalProduct] = useState(0)
  
      //const itemsPerPage = 10; //TODO: make it dynamic
      const totalPages = Math.ceil(totalProuduct/itemsPerPage)
    
      
      const pageNumbers = [];
      for(let i=1; i<=totalPages; i++){git 
          pageNumbers.push(i);
      }

      useEffect( ()=>{
        async function fetchData() {
            const response = await fetch(`http://localhost:3000/adminproducts?page=${currentPage}&limit=${itemsPerPage}`)
  
            const data = await response.json();
            // console.log(data)
            // console.log(data.productlen)
            setProducts(data.result);
            setTotalProducts(data.productlen)
            console.log(totalProducts)
        }
        fetchData();
    },[currentPage,totalPages])
    // console.log(products)
    // console.log("current page - ",currentPage);
    // console.log("total page - ",totalPages);

    const [users, setUsers] = useState([])
    const [orders, setOrders] = useState([])
    const [stats,setStats] = useState({});
    const [payments,setPayments] = useState(0)

    const [num,setnum] = useState(0)
    const getUser = () => {
        fetch("http://localhost:3000/allUsers")
            .then(res => res.json())
            .then(data => setUsers(data))
    }
    const getOrder = () => {
        fetch("http://localhost:3000/allOrder")
            .then(res => res.json())
            .then(data => setOrders(data))
    }
    
    const calculatePayment = () =>{
        orders.map(order => {
            console.log(order.product.amount)
            let amount = parseInt(order.product.amount)
            setPayments(payments + amount)
        })
    }
    // console.log(users)
useEffect(() => {
    getOrder()
    getUser()
    calculatePayment()
}, []);

console.log('orders data 1 ',orders.length)

    return (
        <div>

            {/* Dashboard Top Card */}
            <div>
                <div className='flex flex-col md:flex-row  lg:flex-row gap-4 shadow-xl rounded-md '>

                    <div className="card md:basis-1/4 bg-secondary shadow-xl image-full m-4 ">
                        {/* <figure><img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" alt="Shoes" /></figure> */}
                        <div className="card-body">
                            <h2 className=" text-3xl text-center">Total User</h2>
                            <hr className='' />
                            <p className=" text-5xl text-center">{users.length}</p>
                            <div className="card-actions justify-center py-4 m-2">
                                <Link to="/admin/admin/user" className="btn btn-primary ">View Details</Link>
                            </div>
                        </div>
                    </div>

                    <div className="card md:basis-1/4 bg-secondary shadow-xl image-full m-4 ">
                        {/* <figure><img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" alt="Shoes" /></figure> */}
                        <div className="card-body">
                            <h2 className=" text-3xl text-center">Total Product</h2>
                            <hr className='' />
                            <p className=" text-5xl text-center">{totalProducts}</p>
                            <div className="card-actions justify-center py-4 m-2">
                                <Link to="/admin/admin/product" className="btn btn-primary ">View Details </Link>
                            </div>
                        </div>
                    </div>

                    <div className="card md:basis-1/4 bg-info shadow-xl image-full m-4">
                        {/* <figure><img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" alt="Shoes" /></figure> */}
                        <div className="card-body">
                            <h2 className=" text-3xl text-center">Total Order</h2>
                            <hr className='' />
                            <p className=" text-5xl text-center">{orders.length}</p>
                            <div className="card-actions justify-center py-4 m-2">
                                <button className="btn btn-primary ">View Details</button>
                            </div>
                        </div>
                    </div>

                    <div className="card md:basis-1/4 bg-primary shadow-xl image-full m-4">
                        {/* <figure><img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" alt="Shoes" /></figure> */}
                        <div className="card-body">
                            <h2 className=" text-3xl text-center">Total Payment</h2>
                            <hr className='' />
                            <p className=" text-5xl text-center">${payments}</p>
                            <div className="card-actions justify-center py-4 m-2">
                                <button className="btn btn-primary ">View Details</button>
                            </div>
                        </div>
                    </div>


                </div>
            </div>


            {/* slider section  */}
            <div className=''>
                {/* <div className="carousel w-60% m-4 ">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div> */}
            </div>


            <div className='flex flex-col md:flex-row lg:flex-row gap-4'>


                <div className='flex-grow'>
                    <h5 className='text-center text-2xl uppercase my-2 text-orange-500'>Order History</h5>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead className='bg-black text-white text-2xl'>
                            <tr>
                                <th>Name</th>
                                <th>Status</th>
                                <th>transactionId</th>
                            </tr>
                            </thead>
                            <tbody>
                            {/* row 1 */}
                              {
                                orders.map(order => <tr>
                                    <td>{order.product.firstName}</td>
                                    <td>{order.paidStatus?'Success':'InCompleted'}</td>
                                    <td>{order.transactionId}</td>
                                </tr>)
                              }
                            </tbody>
                        </table>
                    </div>
                </div>


                <div className='flex-grow'>
                <h5 className='text-center text-2xl uppercase my-2 text-orange-500'>User List</h5>
                <table className="table">
                {/* head */}
                <thead className='bg-black text-white text-2xl'>
                    <tr>
                        <th>Name</th>
                        <th>Addess</th>
                        <th>Type</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        users.map( user => 
                            <tr key={user._id}>
                        <td>
                            <div className="flex items-center gap-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={user.image} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">{user.firstName} {user.lastName}</div>
                                    <div className="text-sm opacity-50">{user.gender}</div>
                                    <div className="text-sm opacity-50">{user.birthDate}</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            {user.address}
                            <br />
                            <span className="badge badge-ghost badge-sm">{user.phone}</span>
                            <span className="badge badge-ghost badge-sm">{user.email}</span>
                        </td>
                        <td>{user.roll === 'admin' ? <button onClick={() => handleMakeUser(user)} className="btn btn-ghost bg-red-600 text-white ">Admin</button> 
                                : <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost bg-red-600 text-white ">User</button>}</td>
                        
                    </tr>
                            )
                    }
                    
                </tbody>
                {/* foot */}
                <tfoot>
                    <tr >
                        <th></th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Type</th>
                        <th>Action</th>
                    </tr>
                </tfoot>

            </table>
                </div>

            </div>
            
            <div></div>
            <div></div>
        </div>
    );
};

export default Dashboard;