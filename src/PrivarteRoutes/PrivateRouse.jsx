import React, { useContext } from 'react';
import { AuthContext } from '../components/Authprovider/Authprovider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRouse = ({children}) => {
    const {user,loading}= useContext(AuthContext);
    const location=useLocation();
    console.log(location.pathname)
    if(loading){

        return <span className="loading loading-ring loading-lg"></span>
    }
if (user){
    return children
}
    return <Navigate state={location.pathname} to='/SignIn'></Navigate>
};

export default PrivateRouse;