import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

import Loading from '../../Shared/Loading/Loading';
import SellerHooks from '../../useHooks/SellerHooks';
import Loader from '../Components/Loader';


const SellerRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const [isSeller, isSellerLoading] = Sell(user?.email)
    const location = useLocation();

    if (loading
        ||
        isSellerLoading
    ) {
        return <Loader></Loader>
    }

    if (user
        && isSeller
    ) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default SellerRoute;