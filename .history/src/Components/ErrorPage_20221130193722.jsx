import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError()
    return (
        <div>
            <img className='w-full h-full' src="https://img.freepik.com/free-vector/error-404-concept-landing-page_52683-18633.jpg?w=2000" alt="" />
            <h1>Error: {error?.statusText} ?</h1>
        </div>
    );
};

export default ErrorPage;