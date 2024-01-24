import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import { sendEmailVerification, updateProfile } from 'firebase/auth';
import Swal from 'sweetalert2';

const Register = () => {
  const navigate = useNavigate();
  
  const [error,setError] = useState('');

  const {createUser} = useContext(AuthContext);


  const handleSignUpButton = (event) => {
    event.preventDefault();
    const form = event.target
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirm.value;
    console.log(firstName,lastName,email,password,confirmPassword);
    setError('');

   
    
    const handleUserProfile = (id) =>{
      const userProfile = {
        userId: id,
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: null,
        gender: null,
        birthDate: null,
        image: null,
        address: null
      }
      fetch("https://quieasycarts.onrender.com/addUser", {
                 method: "POST",
                 headers: {
                    "content-type": 'application/json'
                 },
                 body: JSON.stringify(userProfile)
              })
      }

    if(!/(?=.*[a-zA-Z])/.test(password)){
        setError('must added alpha charecter in password field');
        return;
    }
    else if(!/(?=.*[!@#$%&?"])/.test(password)){
        setError('must added special charecter in password field.example: !#@%&');
        return;
    }
    else if(!/(?=.*[0-9])/.test(password)){
        setError('must added number in password field');
        return;
    }
    else if(password.length > 8){
      setError('Password is short.add maximum 8 characters')
    }
    else if (password !== confirmPassword) {
      setError('Passwords do not match with confirm password');
      return;
    }

    createUser(email,password)
    .then(result =>{
      console.log(result.user);
      Swal.fire({
        icon: "success",
        title: "Successfully created account",
        showConfirmButton: false,
        timer: 1400
      });
      updateUserData(result.user,firstName);
      sendVerificationEmail(result.user);
      handleUserProfile(result.user.uid);
      localStorage.setItem('userId',result.user.uid)
      form.reset()
      navigate('/')
    })
    .catch(error =>{
      setError(error.message)
    })
  };

  const sendVerificationEmail = (user) =>{
    sendEmailVerification(user)
    .then(result =>{
        console.log(result.user);
        alert("Please verify your email address")
      })
  }

  const updateUserData = (user,name) =>{
    updateProfile(user, {
        displayName: name
    })
    .then(()=>{
        console.log('user name updated')
    })
    .catch( error =>{
       console.log(error.message)
        setError(error.message);
    })
}



  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
        <img src="/src/assets/logo/QuiEasyCart2.png" alt="Image"  className="w-260 h-120 animate-bounce rounded-lg m-2 center" />
          <h1 className="text-5xl font-bold">Sign Up Now!</h1>
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi..</p>
          <div className="flex justify-center lg:justify-start space-x-4">
          <div className="flex justify-center lg:justify-start space-x-4">
            <Link className="flex items-center bg-blue-600 text-white rounded-lg px-4 py-2">
              <i className="fab fa-facebook-square mr-2"></i>
              <span>Facebook</span>
            </Link>
            <Link className="flex items-center bg-red-600 text-white rounded-lg px-4 py-2">
              <i className="fab fa-google mr-2"></i>
              <span>Google</span>
            </Link>
          </div>
          </div>
          <p className="mt-4">
            Already have an account? <Link to="/login" className="text-blue-500">Login</Link>
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleSignUpButton}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">First Name</span>
              </label>
              <input type="text" name="firstName" placeholder="First Name" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Last Name</span>
              </label>
              <input type="text" name="lastName" placeholder="Last Name" className="input input-bordered" required />
            </div>
            {/* Email field with validation */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name="email" placeholder="Email" className="input input-bordered" required  />
            </div>
            {/* Password fields with validation */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name="password" placeholder="Password" className="input input-bordered" required minLength="8"/>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input type="password" name='confirm' placeholder="Confirm Password" className="input input-bordered" required minLength="8" />
            </div>
            <p className='text-center text-primary'>{error}</p>
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
