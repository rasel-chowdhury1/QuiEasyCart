import React, { useEffect, useState } from 'react';

const Orders = () => {
  const [orders, setOrders] = useState([])

      const getOrder = () => {
        fetch("http://localhost:3000/allOrder")
            .then(res => res.json())
            .then(data => setOrders(data))
    }

    useEffect(() => {
      getOrder()
  }, []);

  return (
    <div>
      <div className='flex shadow-xl rounded-md'>
        <div className="card w-96 bg-base-100 shadow-xl image-full m-4 ">
          <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className=" text-3xl text-center">Total Orders</h2>
            <hr className='' />
            <p className=" text-5xl text-center">{orders.length}</p>
            <div className="card-actions justify-center py-4 m-2">
              <button className="btn btn-primary ">View Details</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl image-full m-4">
          <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className=" text-3xl text-center">New Orders</h2>
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
            <h2 className=" text-3xl text-center">Pending Order</h2>
            <hr className='' />
            <p className=" text-5xl text-center">65</p>
            <div className="card-actions justify-center py-4 m-2">
              <button className="btn btn-primary ">View Details</button>
            </div>
          </div>
        </div>


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
                                <th>Address</th>
                                <th>Amount</th>
                                <th>Status</th>
                                <th>transactionId</th>
                            </tr>
                            </thead>
                            <tbody>
                            {/* row 1 */}
                              {
                                orders.map(order => <tr>
                                    <td>{order.product.firstName}</td>
                                    <td>{order.product.address}</td>
                                    <td>{order.product.amount}</td>
                                    <td>{order.paidStatus?'Success':'InCompleted'}</td>
                                    <td>{order.transactionId}</td>
                                </tr>)
                              }
                            </tbody>
                        </table>
                    </div>
                </div>

      </div>


      {/* Pagination */}
      <div className="join justify-items-center mx-10">
        <input className="join-item btn btn-square" type="radio" name="options" aria-label="<< " />
        <input className="join-item btn btn-square" type="radio" name="options" aria-label="1" checked />
        <input className="join-item btn btn-square" type="radio" name="options" aria-label="2" />
        <input className="join-item btn btn-square" type="radio" name="options" aria-label="3" />
        <input className="join-item btn btn-square" type="radio" name="options" aria-label="4" />
        <input className="join-item btn btn-square" type="radio" name="options" aria-label="5" />
        <input className="join-item btn btn-square" type="radio" name="options" aria-label="6" />
        <input className="join-item btn btn-square" type="radio" name="options" aria-label="7" />
        <input className="join-item btn btn-square" type="radio" name="options" aria-label="8" />
        <input className="join-item btn btn-square" type="radio" name="options" aria-label=" >>" />
      </div>
    </div>
  );
};

export default Orders;