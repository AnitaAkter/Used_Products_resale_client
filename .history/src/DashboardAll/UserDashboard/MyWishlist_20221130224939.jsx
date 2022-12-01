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
                            <div class="flex w-full flex-col items-center justify-center max-w-sm mx-auto">
                                <div class="h-64  w-96 bg-gray-300 bg-center bg-cover rounded-lg shadow-md">
                                    <img className="rounded p-5" src={wishlist.picture} alt="" />
                                </div>
                                <div class="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                                    <h3 class="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
                                        {wishlist.MobileName}
                                    </h3>

                                   ?
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