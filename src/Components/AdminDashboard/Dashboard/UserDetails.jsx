import React from 'react';
import { useLocation } from 'react-router-dom';

const UserDetails = () => {
  const location = useLocation();
  const { firstName, lastName, gender, address, birthDate, phone, email, image } = location.state;

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105 max-w-md w-full">
        <div className="flex items-center justify-center mb-6">
          <img src={image} alt="User" className="rounded-full w-24 h-24 object-cover" />
        </div>

        <div className="text-gray-800 text-center">
          <div className="mb-4">
            <strong className="text-4xl font-extrabold text-gray-900">User Profile</strong>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="text-left text-gray-600">First Name:</div>
            <div className="text-left text-gray-800 font-semibold">{firstName}</div>
            <div className="text-left text-gray-600">Last Name:</div>
            <div className="text-left text-gray-800 font-semibold">{lastName}</div>
            <div className="text-left text-gray-600">Gender:</div>
            <div className="text-left text-gray-800 font-semibold">{gender}</div>
            <div className="text-left text-gray-600">Address:</div>
            <div className="text-left text-gray-800 font-semibold">{address}</div>
            <div className="text-left text-gray-600">Birth Date:</div>
            <div className="text-left text-gray-800 font-semibold">{birthDate}</div>
            <div className="text-left text-gray-600">Phone:</div>
            <div className="text-left text-gray-800 font-semibold">{phone}</div>
            <div className="text-left text-gray-600">Email:</div>
            <div className="text-left text-gray-800 font-semibold">{email}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
