import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import AllUser from '../DashboardAll/AdminDashboard/AllUser';
import Reports from '../DashboardAll/AdminDashboard/Reports';
import Dashboard from '../DashboardAll/Dashboard/Dashboard';
import AddProduct from '../DashboardAll/SellerDashboard/AddProduct';
import Buyers from '../DashboardAll/SellerDashboard/Buyers';
import CheckOut from '../DashboardAll/UserDashboard/CheckOut';
import MyOrders from '../DashboardAll/UserDashboard/MyOrders';
import MyWishlist from '../DashboardAll/UserDashboard/MyWishlist';
import AdminRoute from '../Route/AdminRoute';
import PrivateRoute from '../Route/PrivateRoute';
import SellerRoute from '../Route/SellerRoute';
import Blog from './Blog';
import ErrorPage from './ErrorPage';
import Home from './Home';
import Main from './Layout/Main';
import LogIn from './LogIn';
import Products from './Products';
import Register from './Register';
import SingleProduct from './SingleProduct';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/products',
                element: <Products></Products>
            },
            {
                path: '/singleProduct/:id',
                element: <SingleProduct></SingleProduct>,
                loader: ({ params }) => fetch(`http://localhost:5000/phones/${params.id}`)
            }

        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/dashboard',
                element: <PrivateRoute><MyOrders></MyOrders></PrivateRoute>
            },

            {
                path: '/dashboard/payment/:id',
                element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>
            },

            {
                path: '/dashboard/wishlist',
                element: <PrivateRoute><MyWishlist></MyWishlist></PrivateRoute>
            },

            {
                path: '/dashboard/allusers',
                element: <AdminRoute><AllUser></AllUser></AdminRoute>
            },
            {
                path: '/dashboard/allreports',
                element: <AdminRoute><Reports></Reports></AdminRoute>
            },

            {
                path: '/dashboard/addProduct',
                element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
            },
            {
                path: '/dashboard/buyers',
                element: <SellerRoute><Buyers></Buyers></SellerRoute>
            },

        ]
    }
])

export default router;