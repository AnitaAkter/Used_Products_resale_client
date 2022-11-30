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

                            <p><strong>Selling Price:</strong> <br className='hidden lg:block' />{resale_price}</p>
                            <p><strong>Buying Price:</strong> <br className='hidden lg:block' />{buying_price} </p>
                            <p><strong>Purchase Year:</strong><br className='hidden lg:block'/> {Purchase_Year}</p>
                            <p><strong>Uses Year:</strong> <br className='hidden lg:block'/> {Uses_of_Year}</p>
                            <p><strong>Location:</strong><br className='hidden lg:block' /> {location}</p>
                        </div>
                        <div>
                            <p><strong>Posting Time:</strong> <br className='hidden lg:block'/>{the_time_it_posted}</p>
                            <p><strong>Seller:</strong> <br className='hidden lg:block'/>{Name_of_Seller} </p>
                            <p><strong>Number Of Seller:</strong> <br className='hidden lg:block'/> {number_of_seller}</p>
                            <p><strong>Condition:</strong><br /> {condition}</p>
                            <p><strong>Order Id:</strong><br /> {Order_id}</p>
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