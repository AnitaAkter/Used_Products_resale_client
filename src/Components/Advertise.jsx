import React, { useState } from 'react';
import axios from "axios";
import swal from 'sweetalert';
const Advertise = () => {
    const URL = "https://sales-ex-server.vercel.app/ad";
    const [add, setAdd] = React.useState([]);

    React.useEffect(() => {

        axios.get(URL).then((response) => {
            setAdd(response.data);
        });
    }, []);



    const handleAdProduct = data => {
        console.log(data);
        fetch('https://sales-ex-server.vercel.app/orders', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    swal('Order Confirmed')
                }
                else {
                    swal(data.message)
                }
            })
    }


    return (
        <div className='bg-gradient-to-r from-blue-600 via-blue-800
        to-blue-900 p-5 text-white'>
            <h1 className='text-4xl font-bold'>Advertisement</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    add.map(SA => {
                        return <>
                            <div className="card w-96 bg-base-100 shadow-xl ">
                                <figure className="p-10">
                                    <img src={SA.picture} alt="Shoes" className="rounded-xl border border-accent ring ring-accent ring-offset-base-100 ring-offset-2 p-5 " />
                                </figure>
                                <div className="card-body items-center text-center bg-gradient-to-r from-blue-900 via-blue-500
                         to-blue-900 p-5 text-white">
                                    <h2 className="card-title">{SA.title}</h2>
                                    <h2 className="card-brand">{SA.category_name}</h2>
                                    <p>{SA.details.length > 80 ? SA.details.slice(0, 80) + '...' : SA.details}</p>
                                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 '>
                                        <div>

                                            <p><strong>Selling Price:</strong> <br className='hidden lg:block' />{SA.resale_price}</p>
                                            <p><strong>Buying Price:</strong> <br className='hidden lg:block' />{SA.buying_price} </p>
                                            <p><strong>Purchase Year:</strong><br className='hidden lg:block' /> {SA.Purchase_Year}</p>
                                            <p><strong>Uses Year:</strong> <br className='hidden lg:block' /> {SA.Uses_of_Year}</p>
                                            <p><strong>Location:</strong><br className='hidden lg:block' /> {SA.location}</p>
                                        </div>
                                        <div>
                                            <p><strong>Posting Time:</strong> <br className='hidden lg:block' />{SA.the_time_it_posted}</p>
                                            <p><strong>Seller:</strong> <br className='hidden lg:block' />{SA.Name_of_Seller} </p>
                                            <p><strong>Number:</strong> <br className='hidden lg:block' /> {SA.number_of_seller}</p>
                                            <p><strong>Condition:</strong><br className='hidden lg:block' /> {SA.condition}</p>
                                            <p><strong>Order Id:</strong><br className='hidden lg:block' /> {SA.Order_id}</p>
                                            <p><strong>Verified</strong><br className='hidden lg:block' /> {SA.Verified}</p>
                                        </div>

                                    </div>
                                    <div className="card-actions grid justify-center content-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">

                                        <label
                                            // disabled={productBox.length === 0 || isSeller || isAdmin}
                                            htmlFor="modal-booking" className="btn btn-accent items-center text-white"
                                            onClick={() => handleAdProduct(SA)}
                                        >Buy Now
                                        </label>
                                    </div>
                                </div>
                            </div>

                        </>
                    })
                }
            </div>

        </div>
    );
};

export default Advertise;