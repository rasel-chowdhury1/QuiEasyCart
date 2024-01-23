import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <div className='h-screen grid justify-items-center content-center'><span className="loading loading-bars loading-lg"></span><p>Loading...</p></div>
    }

    if(user){
        return children;
    }
    return (<Navigate to='/login' state={{from: location}} replace></Navigate>
    );
};

export default PrivateRoute;