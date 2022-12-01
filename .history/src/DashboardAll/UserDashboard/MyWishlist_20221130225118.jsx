import React, { useContext, useState } from 'react';
import { Authcontext } from '../../Components/Context/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import swal from 'sweetalert';


const MyWishlist = () => {
    const { user } = useContext(Authcontext)
    const [wishall, setWishAll] = useState('')
    // const url = `http://localhost:5000/wishlist?email=${user?.email}`;
    const { data: wishlists = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/wishlist?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            console.log(data)
            return data;
        }

    })




    const handleWish = data => {
        console.log(data)

        fetch('http://localhost:5000/orders', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                setWishAll(data)
                console.log(wishall)
                if (data.acknowledged) {
                    swal('Order Confirmed. Please go to Order Page to Pay')
                }
                else {
                    swal(data.message)
                }
            })
    }
    return (
        <div>

            <div className=" dark:text-gray-50">
                <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        wishlists.map(wishlist => <>
                            <div className="overflow-x-auto">
                                <table className="table w-full ">
                                    {" "}
                                    <thead>
                                        <tr>
                                            <th>SN</th>
                                            <th>Product Image</th>
                                            <th>Title</th>
                                            <th>Price</th>
                                            <th>Order</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {wishlist && orders?.map((order, i) => <tr key={order._id}>
                                            <th>{i + 1}</th>
                                            <td><img className='w-24 h-16' src={order.picture} alt="" /></td>
                                            <td>{order.MobileName}</td>
                                            <td>{order.price}</td>
                                            <td>{
                                                order.price && !order.paid && <Link to={`/dashboard/payment/${order._id}`}>
                                                    <button className="btn btn-acccent btn-md">Pay</button>
                                                </Link>
                                            }
                                                {
                                                    order.price && order.paid && <span className="text-md">Paid</span>

                                                }
                                            </td>
                                        </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </>

                        )
                    }
                </div>

            </div>
        </div>
    );
};

export default MyWishlist;




// <div class="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
// <span class="font-bold text-gray-800 dark:text-gray-200">
//     {wishlist.price}
// </span>
// {!wishall && <button onClick={() => handleWish(wishlist)} class="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
//     Buy
// </button>

// }
// {
//     wishall && <p>Ordered</p>
// }
// </div>