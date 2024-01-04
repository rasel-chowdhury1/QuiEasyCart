import React from 'react';

const Help = () => {
    return (
        <div>
            <div className="max-w-3xl mx-auto p-6">
                <h1 className="text-3xl font-semibold mb-6">Admin Help Page</h1>

                {/* Add Help Content */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                    <h2 className="text-xl font-semibold mb-4">Add Help Content</h2>
                    <form>
                        <label htmlFor="helpTitle" className="block text-gray-700 font-semibold mb-2">Title</label>
                        <input type="text" id="helpTitle" name="helpTitle" className="w-full border-2 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 mb-4" placeholder="Enter help title" />

                        <label htmlFor="helpDescription" className="block text-gray-700 font-semibold mb-2">Description</label>
                        <textarea id="helpDescription" name="helpDescription" className="w-full border-2 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 h-40 resize-none mb-4" placeholder="Enter help description"></textarea>

                        <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out">Add Help Content</button>
                    </form>
                </div>

                {/* View, Edit, Delete Help Content */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-semibold mb-4">Manage Help Content</h2>
                    <div className="mb-4">
                        {/* Replace this section with dynamic content from your database */}
                        <div className="flex justify-between items-center bg-gray-100 p-4 rounded-md mb-2">
                            <div>
                                <h3 className="font-semibold">Help Title 1</h3>
                                <p className="text-gray-600">Help Description 1</p>
                            </div>
                            <div className="flex space-x-4">
                                <button className="bg-blue-500 text-white py-1 px-3 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out">Edit</button>
                                <button className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600 transition duration-300 ease-in-out">Delete</button>
                            </div>
                        </div>

                        {/* Another help content block */}
                        <div className="flex justify-between items-center bg-gray-100 p-4 rounded-md mb-2">
                            <div>
                                <h3 className="font-semibold">Help Title 2</h3>
                                <p className="text-gray-600">Help Description 2</p>
                            </div>
                            <div className="flex space-x-4">
                                <button className="bg-blue-500 text-white py-1 px-3 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out">Edit</button>
                                <button className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600 transition duration-300 ease-in-out">Delete</button>
                            </div>
                        </div>

                        {/* Add more help content blocks as needed */}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Help;