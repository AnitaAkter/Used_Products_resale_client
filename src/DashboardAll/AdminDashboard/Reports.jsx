import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Authcontext } from '../../Components/Context/AuthProvider';
import swal from 'sweetalert';

const Reports = () => {
    const { user } = useContext(Authcontext)
    const url = `https://sales-ex-server.vercel.app/reports`;
    const { data: reportsall = [], isLoading, refetch } = useQuery({
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



    const handleDelete = data => {
        console.log(data);
        fetch(`https://sales-ex-server.vercel.app/reports/${data}`, {
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
        <div>
            <h2 className="text-4xl">All Users</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>SN</th>
                            <th>MobileName</th>
                            <th>Report</th>
                            <th>Manage</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reportsall.map((report, i) =>
                            <tr key={report._id}>
                                <th>{i + 1}</th>
                                <td>{report.MobileName}</td>
                                <td>{report?.Report}</td>

                                <td>
                                    {report?.role !== 'admin' && <button
                                        onClick={() => handleDelete(report._id)}
                                        className='btn btn-secondary btn-xs'>Delete</button>}
                                    {report?.role !== 'admin' && <button

                                        className='btn btn-primary btn-xs ml-1'>Approve</button>}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Reports;




// {
//     reportsall.map(rep => <>
//         <div className="card w-96 bg-neutral text-neutral-content">
//             <div className="card-body items-center text-center">
//                 <h2 className="card-title">{rep.MobileName}</h2>
//                 <p>{rep.report}</p>
//                 <div className="card-actions justify-end">
//                     <button className="btn btn-primary">Accept</button>
//                     <button className="btn btn-ghost">Delete</button>
//                 </div>
//             </div>
//         </div>
//     </>)
// }