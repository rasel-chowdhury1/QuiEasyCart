import React from 'react';

const Register = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const firstName = event.target.elements.firstName.value;
    const lastName = event.target.elements.lastName.value;
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;
    const confirmPassword = event.target.elements.confirmPassword.value;
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
        <img src="/src/assets/logo/QuiEasyCart2.png" alt="Image"  className="w-260 h-120 animate-bounce rounded-lg m-2 center" />
          <h1 className="text-5xl font-bold">Sign Up Now!</h1>
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi..</p>
          <div className="flex justify-center lg:justify-start space-x-4">
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
          </div>
          <p className="mt-4">
            Already have an account? <a href="/login" className="text-blue-500">Login</a>
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">First Name</span>
              </label>
              <input type="text" placeholder="First Name" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Last Name</span>
              </label>
              <input type="text" placeholder="Last Name" className="input input-bordered" required />
            </div>
            {/* Email field with validation */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="Email" className="input input-bordered" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" />
            </div>
            {/* Password fields with validation */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" placeholder="Password" className="input input-bordered" required minLength="6" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input type="password" placeholder="Confirm Password" className="input input-bordered" required minLength="6" />
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
