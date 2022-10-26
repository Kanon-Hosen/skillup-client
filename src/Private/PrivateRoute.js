import React from 'react';
import {useAuthState} from 'react-firebase-hooks/auth'
import { Navigate, useLocation } from 'react-router';
const PrivateRoute = ({children}) => {
    const [user, loading] = useAuthState();
    const location = useLocation()
    if (loading) {
        return <div>
        <div className="flex absolute items-center justify-center w-full bg-slate-400 h-full bg-opacity-25">
        <div className="w-32 h-32 border-8 border-dashed rounded-full animate-spin border-teal-600 z-20"></div>
    </div>
</div>
    }
    if (user) {
        return children
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivateRoute;