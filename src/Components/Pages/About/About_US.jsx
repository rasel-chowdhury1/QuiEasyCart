import React from 'react';

const About_US = () => {
    return (
        <div>
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 font-sans">


                <nav className="bg-white p-4 shadow-md">
                    <div className="container mx-auto">
                        <a href="#" className="text-2xl font-bold text-blue-500">Our Company</a>

                    </div>
                </nav>


                <div className="container mx-auto my-8 p-8 bg-white shadow-lg rounded-lg">


                    <h1 className="text-4xl font-bold text-purple-700 mb-6">About Our Company</h1>


                    <p className="text-gray-800 leading-relaxed mb-8">
                        Welcome to the world of innovation and creativity! Our company is dedicated to pushing the boundaries of what's possible in the digital realm.
                    </p>


                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">


                        <div className="bg-blue-100 p-6 rounded-lg text-center">
                            <img src="path/to/member1.jpg" alt="Team Member 1" className="w-24 h-24 mx-auto mb-4 rounded-full" />
                            <h3 className="text-xl font-semibold text-blue-700">John Doe</h3>
                            <p className="text-gray-600">Web Developer</p>
                        </div>



                    </div>


                    <div className="mt-12">
                        <h2 className="text-2xl font-bold text-purple-700 mb-4">Our Achievements</h2>


                        <div className="bg-yellow-200 p-6 rounded-lg mb-4">
                            <h3 className="text-lg font-semibold text-yellow-800">Award for Innovation</h3>
                            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>



                    </div>


                    <div className="mt-12">
                        <h2 className="text-2xl font-bold text-purple-700 mb-4">Contact Us</h2>
                        <p className="text-gray-600">Feel free to reach out to us for any inquiries or collaborations:</p>
                        <p className="text-blue-500">Email: info@ourcompany.com</p>
                        <p className="text-blue-500">Phone: +1 (123) 456-7890</p>
                    </div>

                </div>


                <footer className="bg-gray-800 text-white p-4 text-center">
                    <p>&copy; 2024 Our Company. All rights reserved.</p>
                </footer>
            </div>
        </div>
    );
};

export default About_US;