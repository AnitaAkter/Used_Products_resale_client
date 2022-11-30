import React from 'react';

const MyWishlist = () => {
    const {user} = useContext(AuthContext)
    const url = `https://server-assignment-12.vercel.app/wishlist?email=${user?.email}`;
    const {data: wishlists= []}= useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async ()=>{
            const res = await fetch(url, {
                headers: {
                    authorization : `bearer ${localStorage.getItem('accessToken')}`
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