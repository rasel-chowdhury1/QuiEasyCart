import React from 'react';

const Settings = () => {
    return (
        <div>
           <div className="max-w-3xl mx-auto p-6">
  <h1 className="text-3xl font-semibold mb-6">Settings</h1>

  <div className="bg-white rounded-lg shadow-md p-6 mb-6">
    <h2 className="text-xl font-semibold mb-4">Account Settings</h2>
    <div className="flex flex-col md:flex-row gap-4">
      <div className="w-full md:w-1/2">
        <label htmlFor="fullName" className="block text-gray-700 font-semibold mb-2">Full Name</label>
        <input type="text" id="fullName" name="fullName" className="w-full border-2 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 mb-4" placeholder="Enter full name" />

        <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
        <input type="email" id="email" name="email" className="w-full border-2 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 mb-4" placeholder="Enter email address" />

        <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password</label>
        <input type="password" id="password" name="password" className="w-full border-2 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 mb-4" placeholder="Enter password" />
      </div>
      <div className="w-full md:w-1/2">
        <label htmlFor="address" className="block text-gray-700 font-semibold mb-2">Address</label>
        <textarea id="address" name="address" className="w-full border-2 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 h-40 resize-none mb-4" placeholder="Enter address"></textarea>
      </div>
    </div>
    <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out">Save Changes</button>
  </div>

  <div className="bg-white rounded-lg shadow-md p-6">
    <h2 className="text-xl font-semibold mb-4">Notifications</h2>
    <div>
      <label className="flex items-center mb-4">
        <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-500 rounded-md" />
        <span className="ml-2 text-gray-700">Enable Email Notifications</span>
      </label>
      <label className="flex items-center mb-4">
        <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-500 rounded-md" />
        <span className="ml-2 text-gray-700">Enable SMS Notifications</span>
      </label>
    </div>
    <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out">Save Changes</button>
  </div>
</div>

        </div>
    );
};

export default Settings;