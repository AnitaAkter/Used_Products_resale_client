import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleProduct = () => {
    const categoriesProduct = useLoaderData()
    console.log(categoriesProduct);

    const [bookedMobile, setBookedMobile] = useState()
    return (
        <div>

        </div>
    );
};

export default SingleProduct;