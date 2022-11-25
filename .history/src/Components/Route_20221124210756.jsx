import React from 'react';
import Home from './Home';
import Main from './Layout/Main';

const Router = createBrowserRouter([
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
                path: '/add',
                element: <Add
            },
            {
                path: '/products',
                element: <Products></Products>
            },

        ]
    }
])

export default Route;