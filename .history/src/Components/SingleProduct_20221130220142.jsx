import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleBookingModal from './SingleBookingModal';
import SingleProductDetails from './SingleProductDetails';

const SingleProduct = () => {
    const categoriesProduct = useLoaderData()
    const [bookedMobile, setBookedMobile] = useState(null);
    console.log(bookedMobile)

    return (
        <div className="grid grid-cols-1 m-5 lg:grid-cols-3 md:grid-cols-1 gap-5 bg-gradient-to-r from-blue-600 via-blue-800
        to-blue-900 p-5">
            {
                categoriesProduct.map((productBox) => <SingleProductDetails key={productBox._id} productBox={productBox} setBookedMobile={setBookedMobile}></SingleProductDetails>)
            }
            {
                bookedMobile && (
                    <SingleBookingModal
                        bookedMobile={bookedMobile}
                        setBookedMobile={setBookedMobile}
                    ></SingleBookingModal>)
            }
        </div>
    );
};

export default SingleProduct;