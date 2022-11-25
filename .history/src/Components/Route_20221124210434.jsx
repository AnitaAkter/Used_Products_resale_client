import React from 'react';
import Home from './Home';
import Main from './Layout/Main';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>
    }
])

export default Route;