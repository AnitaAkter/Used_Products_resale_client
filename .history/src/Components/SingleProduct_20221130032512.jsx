import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleBookingModal from './SingleBookingModal';
import SingleProductDetails from './SingleProductDetails';

const SingleProduct = () => {
    const categoriesProduct = useLoaderData()
    console.log(categoriesProduct);

    const [bookedMobile, setBookedMobile] = useState(null);

    return (
        <div className="grid grid-cols-1 m-5 lg:grid-cols-3 md:grid-cols-1 gap-5">
            {
                categoriesProduct.map(productBox => <SingleProductDetails key={productBox._id} productBox={productBox} setBookedMobile={setBookedMobile}></SingleProductDetails>)
            }
            {
                bookedMobile && <SingleBookingModal className></SingleBookingModal>
            }
        </div>
    );
};

export default SingleProduct;