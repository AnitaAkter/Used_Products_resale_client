import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';


import Loading from '../../Shared/Loading/Loading';
import useSeller from '../../useHooks/useSeller';
import Loader from '../Components/Loader';
import SellerHooks from '../Hooks/SellerHooks';


const SellerRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const [isSeller, isSellerLoading] = SellerHooks(user?.email)
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