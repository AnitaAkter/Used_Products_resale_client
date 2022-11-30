
import React, { useContext } from 'react';

import swal from 'sweetalert';
import { Authcontext } from './Context/AuthProvider';

const SingleBookingModal = ({ bookedMobile, setBookedMobile }) => {
    const { category_name, title, picture, buying_price, resale_price, Purchase_Year, Uses_of_Year, the_time_it_posted, Name_of_Seller, Verified, condition, number_of_seller, Order_id, details } = bookedMobile;
    console.log(bookedMobile)
    const { user } = useContext(Authcontext);
    const date = new Date().toLocaleString()
    console.log(date)

    console.log(bookedMobile)
    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const location = form.location.value;
        const booking = {
            orderTime: date,
            MobileName: title,
            buyer: name,
            email,
            phone,
            price: resale_price,
            location,
            Order_id,
            picture
        }

        console.log(booking)

        fetch('http://localhost:5000/orders', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setBookedMobile(null);
                    swal('Order Confirmed')
                }
                else {
                    swal(data.message)
                }
            })

    }

    return (
        <div>
            <>
                <input type="checkbox" id="modal-booking" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box relative">
                        <label htmlFor="modal-booking" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 className="text-lg font-bold">
                            {title}
                        </h3>
                        <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                            <input name="name" type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input w-full input-bordered" />
                            <input name="date" type="text" defaultValue={date} disabled placeholder="Your Name" className="input w-full input-bordered" />
                            <input name="email" type="email" defaultValue={user?.email} disabled readOnly placeholder="Email Address" className="input w-full input-bordered" />
                            <input name="price" type="text" defaultValue={resale_price} disabled className="input w-full input-bordered" />
                            <input name="number" type="text" placeholder="Order ID" defaultValue={Order_id} disabled className="input w-full input-bordered" />
                            <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                            <input name="location" type="text" placeholder="Meeting Location" className="input w-full input-bordered" />
                            <br />
                            <input className='btn btn-accent w-full' type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </>
        </div>
    );
};

export default SingleBookingModal;