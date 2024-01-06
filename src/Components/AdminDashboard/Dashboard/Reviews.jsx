import React from 'react';

const Reviews = () => {
    return (
        <div className="container mx-auto py-8">
            <h2 className="m-4 text-5xl text-center shadow-xl p-4 m-2">Product Reviews</h2>
            <table className="table w-full m-4 bg-white shadow-md rounded-lg overflow-hidden">
                <thead className="bg-gray-200 text-gray-700">
                    <tr>
                        <th className="px-4 py-2">Product Name</th>
                        <th className="px-4 py-2">Average Reviews</th>
                        <th className="px-4 py-2">Reviews Quantity</th>
                        <th className="px-4 py-2">View Products</th>
                    </tr>
                </thead>
                <tbody className="text-gray-600">
                    <tr className="bg-gray-100">
                        <td className="border px-4 py-2">Product 1</td>
                        <td className="border px-4 py-2">4.5</td>
                        <td className="border px-4 py-2">50</td>
                        <td className="border px-4 py-2"><a href="/products/1" target="_blank" className="text-blue-500">View Product</a></td>
                    </tr>
                    <tr className="bg-gray-100">
                        <td className="border px-4 py-2">Product 2</td>
                        <td className="border px-4 py-2">3.8</td>
                        <td className="border px-4 py-2">30</td>
                        <td className="border px-4 py-2"><a href="/products/2" target="_blank" className="text-blue-500">View Product</a></td>
                    </tr>
                    <tr className="bg-gray-100">
                        <td className="border px-4 py-2">Product 3</td>
                        <td className="border px-4 py-2">4.2</td>
                        <td className="border px-4 py-2">42</td>
                        <td className="border px-4 py-2"><a href="/products/3" target="_blank" className="text-blue-500">View Product</a></td>
                    </tr>
                    {/* Add more rows */}
                    <tr className="bg-gray-100">
                        <td className="border px-4 py-2">Product 4</td>
                        <td className="border px-4 py-2">4.9</td>
                        <td className="border px-4 py-2">28</td>
                        <td className="border px-4 py-2"><a href="/products/4" target="_blank" className="text-blue-500">View Product</a></td>
                    </tr>
                </tbody>
            </table>
        </div>

    );
};

export default Reviews;