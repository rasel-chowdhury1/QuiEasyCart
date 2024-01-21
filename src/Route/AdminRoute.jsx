import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../CustomHook/useAdmin';
import { AuthContext } from '../Providers/AuthProvider';



const AdminRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin();
    // console.log(user,loading);
    // console.log(isAdmin, isAdminLoading);

    const location = useLocation();

    if(loading || isAdminLoading){
        return <div className='h-screen grid justify-items-center content-center'><span className="loading loading-bars loading-lg"></span><p>Loading...</p></div>
    }

    if(user && isAdmin){
        return children;
    }
    return (<Navigate to='/login' state={{from: location}} replace></Navigate>
    );
};

export default AdminRoute;