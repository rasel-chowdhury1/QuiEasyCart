import React, { useEffect, useState } from 'react';

const Reviews = () => {
    const [reviews,setReviews] = useState([])

      const getReview = () => {
        fetch("http://localhost:3000/getReview")
            .then(res => res.json())
            .then(data => setReviews(data))
    }

    useEffect(() => {
      getReview()
  }, []);
    return (
        <div className="container mx-auto py-8">
            <div className='flex flex-col md:flex-row lg:flex-row gap-4'>

<div className='flex-grow'>
              <h5 className='text-center text-2xl uppercase my-2 text-orange-500'>Reviews</h5>
              <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead  className='bg-black text-white text-2xl'>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Product Details</th>
        <th>User Name</th>
        <th>Content</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {reviews.map(review => <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={review.product.images} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{review.product.name}</div>
              <div className="text-sm opacity-50">{review.product.category}</div>
            </div>
          </div>
        </td>
        <td>
          {review.userName}
        </td>
        <td>{review.content}</td>
        <td></td>
      </tr>)}
    </tbody>
    {/* foot */}
    <tfoot>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </tfoot>
    
  </table>
</div>
          </div>

</div>
        </div>

    );
};

export default Reviews;