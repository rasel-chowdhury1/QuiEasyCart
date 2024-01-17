import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
const Contact_US = () => {
    const { register,reset, handleSubmit, formState: { errors } } = useForm();
   
    const onSubmit = (data) =>{
        const contact = {
            userName: data.name,
            email: data.email,
            message: data.message
        }

        fetch('http://localhost:3000/addContact',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(contact)
        })
        .then(res => res.json())
        .then(result => {
            reset()
            Swal.fire({
                title: "Good job!",
                text: "Message sent Successfully!",
                icon: "success"
            });
        })
    }
    return (
        <div>
            <div className="container mx-auto">
                <div className="flex justify-center">
                <div className='w-2/4 my-8 p-8 bg-white shadow-lg rounded-lg'>
                {/* Contact Heading */}
                <h1 className="text-4xl text-center font-bold text-purple-700 mb-6">Contact Us</h1>

                {/* Contact Form */}
                <form onSubmit={handleSubmit(onSubmit)} className="mb-8">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-600">Your Name</label>
                        <input
                            type="text"
                            id="name"
                            {...register("name", {required: true, maxLength: 120})}
                            name="name"
                            placeholder="Enter Your Name"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-purple-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-600">Your Email</label>
                        <input
                            type="email"
                            id="email"
                            {...register("email", {required: true, maxLength: 120})}
                            name="email"
                            placeholder="Enter Email"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-purple-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="message" className="block text-sm font-semibold text-gray-600">Your Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            {...register("message", {required: true, maxLength: 120})}
                            placeholder="Write your message here..."
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-purple-500"
                        ></textarea>

                        <input 
                        type="submit"
                        className="bg-purple-700 mt-3 cursor-pointer text-white px-6 py-2 rounded-md hover:bg-purple-800 focus:outline-none"
                        value="Send Message"
                        />
                    </div>

                </form>
             </div> 
          </div>

                {/* Contact Information Section */}
                <div className="flex justify-center mb-6">
                <div className='w-2/4 shadow p-6'>
                <h2 className="text-2xl font-bold text-purple-700 mb-4">Our Contact Information</h2>
                <p className="text-gray-600 mb-2">Feel free to reach out to us for any inquiries or collaborations:</p>
                <p className="text-blue-500">Email: info@ourcompany.com</p>
                <p className="text-blue-500">Phone: +88 01816249784</p>
           </div>
                </div>
            </div>



            
        </div>
    );
};

export default Contact_US;