import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import { Authcontext } from '../../Components/Context/AuthProvider';



const MyProducts = () => {
    const { user } = useContext(Authcontext)
    const url = `http://localhost:5000/sellersproduct?email=${user?.email}`;
    const { data: mobiles = [] } = useQuery({
        queryKey: ['mobiles', user?.email],
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





    return (
        <div>
            <h1 className='text-4xl'>My Product</h1>
            <div className='mx-5'>

                <div className="overflow-x-auto">

                    <table className="table w-full">
                        {" "}
                        <thead>
                            <tr>
                                <th>SN</th>
                                <th>Product Picture</th>
                                <th>Product Name</th>
                                <th>Available</th>
                                <th>Advertise</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                mobiles.map(singleMobile => <>
                                 <tr>
              <th>{}</th>
              <td><img className='w-24' src={singleMobile.picture} alt="" /></td>
              <td>"{singleMobile.title}"</td>
              <td>{singleMobile.stock} pcs</td>
              <td>
                {singleMobile.stock === 0 &&  <p>Sold</p>}
                {singleMobile.stock >0 &&  <p>Avaialble</p>}
              
              </td>
              <td>
                {
                    !advertised && <button onClick={handleAdvertise} className="btn btn-primary btn-xs">Advertise</button>
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
