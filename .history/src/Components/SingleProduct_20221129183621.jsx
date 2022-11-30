import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleProductDetails from './SingleProductDetails';

const SingleProduct = () => {
    const categoriesProduct = useLoaderData()
    console.log(categoriesProduct);

    const [bookedMobile, setBookedMobile] = useState(null);

    return (
        <div className="grid grid-cols-1 m-5 lg:grid-cols-3 md:grid-cols-2 gap-3">
{
    categoriesProduct.map(productBox=> <SingleProductDetails key={productBox._id}></SingleProductDetails4>)
}
        </div>
    );
};

export default SingleProduct;