import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import { Authcontext } from '../../Components/Context/AuthProvider';



const MyProducts = () => {
    const { user } = useContext(Authcontext)
    const url = `https://sales-ex-server.vercel.app/sellersproduct?email=${user?.email}`;
    const { data: sellersproduct = [], refetch } = useQuery({
        queryKey: ['sellersproduct', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();

            return data;
        }

    })

    const handleAd = (data) => {
        fetch('https://sales-ex-server.vercel.app/ad', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                // authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(data)

        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                if (result.acknowledged) {
                    swal('This item has been advertized. Check Advertise Section')
                }
            })
    }

    const handleDelete = data => {
        fetch(`https://sales-ex-server.vercel.app/sellersproduct/${data}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        }
        )
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    refetch()
                    swal('Deleted Successfully')

                }
            })
    }

    return (
        <div className=' bg-gradient-to-r from-blue-600 via-blue-800 to-blue-900 p-5'>
            <h1 className='text-4xl text-white font-bold mb-5'>My Product</h1>
            <div className='mx-5'>

                <div className="overflow-x-auto ">

                    <table className="table w-full ">
                        {" "}
                        <thead >
                            <tr>
                                <th>SN</th>
                                <th>Product Picture</th>
                                <th>Product Name</th>
                                <th>Available</th>
                                <th>Manage</th>
                                <th>Advertise</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                sellersproduct.map((Mobile, i) => <>
                                    <tr>
                                        <th>{i + 1}</th>
                                        <td><img className='w-24' src={Mobile.picture} alt="" /></td>
                                        <td>"{Mobile.title}"</td>

                                        <td>
                                            {Mobile?.paid && <p>Sold</p>}
                                            {!Mobile?.stock && <p>Avaialble</p>}

                                        </td>
                                        <td>
                                            {<button
                                                onClick={() => handleDelete(Mobile._id)}
                                                className='btn btn-secondary btn-xs'>Delete</button>}
                                        </td>
                                        <td>
                                            {
                                                <button onClick={() => handleAd(Mobile)} className="btn btn-primary btn-xs">Advertise</button>
                                            }
                                        </td>
                                    </tr>
                                </>)
                            }
                        </tbody>
                    </table>

                </div>


            </div>

        </div>
    );
};

export default MyProducts;





