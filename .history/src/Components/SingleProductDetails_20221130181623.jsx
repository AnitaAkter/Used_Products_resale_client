import React, { useContext } from 'react';
import swal from 'sweetalert';
import { Authcontext } from './Context/AuthProvider';

const SingleProductDetails = ({ productBox, setBookedMobile }) => {
    const date = new Date().toLocaleDateString
    const { category_name, title, picture, location, buying_price, resale_price, Purchase_Year, Uses_of_Year, the_time_it_posted, Name_of_Seller, Verified, condition, number_of_seller, Order_id, details } = productBox;
    const { user } = useContext(Authcontext)

    const handleWishList = data => {
        const wishlist = {
            wishlistedTime: date,
            MobileName: data.title,
            buyer: user?.displayName,
            email: user?.email,
            price: data.resale_price,
            wishlistedID: data.bookindId,
            picture: data.picture


        }

        fetch('http://localhost:5000/wishlist', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(wishlist)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {

                    swal('Wishlisted Confirmed')
                }
                else {
                    swal(data.message)
                }
            })

    }


    const handleReport = data => {
        const report = {
            MobileName: data.title,
            Report: 'This is fake'
        }
        console.log(report)

        fetch('http://localhost:5000/report', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(report)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {

                    swal('Report Submitted')
                }
                else {
                    swal(data.message)
                }
            })

    }

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={picture} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{title}</h2>
                    <h2 className="card-brand">{category_name}</h2>
                    <p>{details.length > 80 ? details.slice(0, 80) + '...' : details}</p>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                        <div>

                            <p><strong>Selling Price:</strong> <br className='hidden lg:block' />{resale_price}</p>
                            <p><strong>Buying Price:</strong> <br className='hidden lg:block' />{buying_price} </p>
                            <p><strong>Purchase Year:</strong><br className='hidden lg:block' /> {Purchase_Year}</p>
                            <p><strong>Uses Year:</strong> <br className='hidden lg:block' /> {Uses_of_Year}</p>
                            <p><strong>Location:</strong><br className='hidden lg:block' /> {location}</p>
                        </div>
                        <div>
                            <p><strong>Posting Time:</strong> <br className='hidden lg:block' />{the_time_it_posted}</p>
                            <p><strong>Seller:</strong> <br className='hidden lg:block' />{Name_of_Seller} </p>
                            <p><strong>Number:</strong> <br className='hidden lg:block' /> {number_of_seller}</p>
                            <p><strong>Condition:</strong><br className='hidden lg:block' /> {condition}</p>
                            <p><strong>Order Id:</strong><br className='hidden lg:block' /> {Order_id}</p>
                            <p><strong>Verified</strong><br className='hidden lg:block' /> {Verified}</p>
                        </div>

                    </div>
                    <div className="card-actions grid justify-center content-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">

                        <label
                            disabled={productBox.length === 0}
                            htmlFor="modal-booking" className="btn btn-primary text-white"
                            onClick={() => setBookedMobile(productBox)}
                        >Buy Now
                        </label>
                        <label
                            disabled={productBox.length === 0}
                            className="btn btn-primary text-white"
                            onClick={() => handleWishList(productBox)}
                        >Add to Wishlist
                        </label>
                        <label
                            disabled={productBox.length === 0}
                            className="btn btn-primary text-white"
                            onClick={() => handleReport(productBox)}
                        >Report
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProductDetails;