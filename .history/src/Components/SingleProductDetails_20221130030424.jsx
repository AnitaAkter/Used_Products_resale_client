import React from 'react';

const SingleProductDetails = ({ productBox, setBookedMobile }) => {
    const { category_name, title, picture, location, buying_price, resale_price, Purchase_Year, Uses_of_Year , the_time_it_posted, Name_of_Seller, Verified, condition,   } = productBox;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={picture} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{productBox.buying_price}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions grid justify-center content-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                        <button className="btn btn-primary">Buy Now</button>
                        <button className="btn btn-primary">Add to Wishlist</button>
                        <button className="btn btn-primary">Report</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProductDetails;