import React from 'react';
import { Authcontext } from '../../Components/Context/AuthProvider';

const MyWishlist = () => {
    const { user } = useContext(Authcontext)
    const url = `http://localhost:5000/wishlist?email=${user?.email}`;
    const { data: wishlists = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(``http://localhost:5000/wishlist?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            console.log(data)
            return data;
        }

    })
    return (
        <div>

        </div>
    );
};

export default MyWishlist;