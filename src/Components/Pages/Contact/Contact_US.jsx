import React from 'react';

const Contact_US = () => {
    return (
        <div>
            <div className="container mx-auto my-8 p-8 bg-white shadow-lg rounded-lg">
                {/* Contact Heading */}
                <h1 className="text-4xl font-bold text-purple-700 mb-6">Contact Us</h1>

                {/* Contact Form */}
                <form className="mb-8">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-600">Your Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="John Doe"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-purple-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-600">Your Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="john@example.com"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-purple-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="message" className="block text-sm font-semibold text-gray-600">Your Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            placeholder="Write your message here..."
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-purple-500"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="bg-purple-700 text-white px-6 py-2 rounded-md hover:bg-purple-800 focus:outline-none"
                    >
                        Send Message
                    </button>
                </form>

                {/* Contact Information Section */}
                <div>
                    <h2 className="text-2xl font-bold text-purple-700 mb-4">Our Contact Information</h2>
                    <p className="text-gray-600 mb-2">Feel free to reach out to us for any inquiries or collaborations:</p>
                    <p className="text-blue-500">Email: info@ourcompany.com</p>
                    <p className="text-blue-500">Phone: +1 (123) 456-7890</p>
                </div>
            </div>



            
        </div>
    );
};

export default Contact_US;