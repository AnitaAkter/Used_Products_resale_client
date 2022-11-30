import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import AddProducts from './AddProducts';
import AllReviews from './AllReviews';
import Blog from './Blog';
import ErrorPage from './ErrorPage';
import Home from './Home';
import Main from './Layout/Main';
import LogIn from './LogIn';
import PrivateRoute from './PrivateRoute';
import Products from './Products';
import Register from './Register';
import SingleProduct from './SingleProduct';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
         

        ]
    }
])

export default router;