import React from 'react';
import {useAuthState} from 'react-firebase-hooks/auth'
import { Navigate, useLocation } from 'react-router';
import { auth } from '../Config/Config';
const PrivateRoute = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation()
    console.log("🚀 ~ file: PrivateRoute.js ~ line 8 ~ PrivateRoute ~ location", location)
    if (loading) {
        return <div>
        <div className="flex absolute items-center justify-center z-30 w-full bg-slate-400 h-full bg-opacity-25">
        <div className="w-20 h-20 border-8 border-dashed rounded-full animate-spin border-teal-600 z-20"></div>
    </div>
</div>
    }
    if (user) {
        return children
    }
    return <Navigate to='/login' state={{from: location,}} replace></Navigate>
};

export default PrivateRoute;