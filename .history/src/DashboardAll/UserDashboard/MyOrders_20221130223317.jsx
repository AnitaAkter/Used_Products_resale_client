import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Authcontext } from '../../Components/Context/AuthProvider';
import Loader from '../../Components/Loader';

const MyOrders = () => {
    const { user } = useContext(Authcontext)
    const url = `http://localhost:5000/orders?email=${user?.email}`;
    const { data: orders = [], isLoading } = useQuery({
        queryKey: ['orders', user?.email],
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

    if (isLoading) {
        return <Loader></Loader>
    }
    return (
        <div className='mx-5'>
            <h1 className='text-4xl pb-2 font-bold text-white'>My Orders</h1>


            <div className="overflow-x-auto">
                <table className="table w-full ">
                    {" "}
                    <thead>
                        <tr>
                            <th>SN</th>
                            <th>Product Image</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders && orders?.map((order, i) => <tr key={order._id}>
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


        </div>
    );
};

export default MyOrders;