import { useQuery } from '@tanstack/react-query';
import React from 'react';
import swal from 'sweetalert';


const AllUser = () => {
    const { data: allusers = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://sales-ex-server.vercel.app/users')
            const data = await res.json()
            return data
        }
    })

    const handleUser = user => {
        console.log(user);
        fetch(`https://sales-ex-server.vercel.app/users/${user}`, {
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
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Manage</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allusers.map((user, i) =>
                            <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user?.role}</td>

                                <td>{user?.role !== 'admin' && <button onClick={() => handleUser(user._id)} className='btn btn-secondary btn-xs'>Delete</button>}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUser;