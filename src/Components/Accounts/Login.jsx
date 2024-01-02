import React from 'react';

const Login = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left bg-gradient-to-br from-blue-500 to-purple-600 p-8 rounded-lg shadow-xl">
                    <h1 className="text-5xl font-bold text-white">
                        Login now! 🌟
                    </h1>
                    <p className="py-6 text-lg text-white">
                        Welcome back! Explore your world with us. Engage in endless possibilities.
                    </p>
                    <div className="flex justify-center items-center space-x-4">

                        {/* <marquee> */}
                            <img src="/src/assets/logo/QuiEasyCart2.png" alt="Image"  className="w-160 h-120 animate-pulse rounded-lg m-2 " />
                        {/* </marquee> */}

                        
                        {/* Add more captivating elements here */}
                    </div>
                </div>


                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                            <h2 className='text-center p-4 text text-1xl font-bold'>Sign In With</h2>
                            <div className="flex justify-center lg:justify-start space-x-4">
                                <a href="#" className="flex items-center bg-blue-600 text-white rounded-lg px-4 py-2">
                                    <i className="fab fa-facebook-square mr-2"></i>
                                    <span>Facebook</span>
                                </a>
                                <a href="#" className="flex items-center bg-red-600 text-white rounded-lg px-4 py-2">
                                    <i className="fab fa-google mr-2"></i>
                                    <span>Google</span>
                                </a>
                            </div>
                            <p className="mt-4">
                                Do not have an account? <a href="/register" className="text-blue-500">Sign UP</a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;