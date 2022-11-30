import React, { useContext, useState } from 'react';
import { Authcontext } from '../../Components/Context/AuthProvider';
import { useQuery } from '@tanstack/react-query';


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

        fetch('http://localhost:5000//bookings', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setWish(data)
                console.log(wish)
                if (data.acknowledged) {
                    swal('Booking Confirmed')
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
                            <div class="flex w-full flex-col items-center justify-center max-w-sm mx-auto">
                                <div class="h-64  w-96 bg-gray-300 bg-center bg-cover rounded-lg shadow-md">
                                    <img className="rounded p-5" src={wishlist.picture} alt="" />
                                </div>
                                <div class="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                                    <h3 class="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
                                        {wishlist.MobileName}
                                    </h3>

                                    <div class="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                                        <span class="font-bold text-gray-800 dark:text-gray-200">
                                            {wishlist.price}
                                        </span>
                                        {!wishall && <button onClick={() => handleWish(wishlist)} class="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
                                            Buy
                                        </button>

                                        }
                                        {
                                            wishall && <p>Ordered</p>
                                        }
                                    </div>
                                </div>
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