import React from 'react';
import { Authcontext } from '../../Components/Context/AuthProvider';

const MyWishlist = () => {
    const { user } = useContext(Authcontext)
    const url = `;
    const { data: wishlists = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
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