import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Dashboard from '../DashboardAll/Dashboard/Dashboard';
import CheckOut from '../DashboardAll/UserDashboard/CheckOut';
import MyOrders from '../DashboardAll/UserDashboard/MyOrders';
import MyWishlist from '../DashboardAll/UserDashboard/MyWishlist';
import AdminHooks from '../Hooks/AdminHook';
import PrivateRoute from '../Route/PrivateRoute';
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
                element: <AdminHooks
            },

            {
                path: '/dashboard',
                element: <PrivateRoute><MyOrders></MyOrders></PrivateRoute>
            },

        ]
    }
])

export default router;