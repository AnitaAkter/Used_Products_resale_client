import React from 'react';

const SingleProductDetails = ({ productBox, setBookedMobile }) => {
    const { category_name, title, picture, location, buying_price, resale_price, Purchase_Year, Uses_of_Year, the_time_it_posted, Name_of_Seller, Verified, condition, number_of_seller, Order_id, details } = productBox;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={picture} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{title}</h2>
                    <p>{details.length > 80 ? details.slice(0, 80) + '...' : details}</p>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                        <div>

                            <p>Selling Price: {resale_price}</p>
                            <p>Buying Price:{buying_price} </p>
                            <p>Purchase Year: {Purchase_Year}</p>
                            <p>Uses Year: {Uses_of_Year}</p>
                        </div>
                        <div>
                            <p>Selling Price: {resale_price}</p>
                            <p>Buying Price:{buying_price} </p>
                            <p>Purchase Year: {Purchase_Year}</p>
                            <p>Uses Year: {Uses_of_Year}</p>
                        </div>

                    </div>
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