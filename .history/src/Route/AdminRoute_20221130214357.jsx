import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { Authcontext } from '../Components/Context/AuthProvider';
import Loader from '../Components/Loader';
import AdminHooks from '../Hooks/AdminHook';


const AdminRoute = ({ children }) => {

    const { user, loading } = useContext(Authcontext);
    const [isAdmin, isAdminLoading] = AdminHooks(user?.email)
    const location = useLocation();

    if (loading
        ||
        isAdminLoading
    ) {
        return <Loader></Loader>
    }

    if (user
        && isAdmin
    ) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;