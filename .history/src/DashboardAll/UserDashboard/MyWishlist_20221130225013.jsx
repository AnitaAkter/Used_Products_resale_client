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
                            <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
	<h2 className="mb-4 text-2xl font-semibold leading-tight">Contacts</h2>
	<div className="overflow-x-auto">
		<table className="w-full p-6 text-xs text-left whitespace-nowrap">
			<colgroup>
				<col className="w-5">
				<col>
				<col>
				<col>
				<col>
				<col>
				<col className="w-5">
			</colgroup>
			<thead>
				<tr className="dark:bg-gray-700">
					<th className="p-3">A-Z</th>
					<th className="p-3">Name</th>
					<th className="p-3">Job title</th>
					<th className="p-3">Phone</th>
					<th className="p-3">Email</th>
					<th className="p-3">Address</th>
					<th className="p-3">
						<span className="sr-only">Edit</span>
					</th>
				</tr>
			</thead>
			<tbody className="border-b dark:bg-gray-900 dark:border-gray-700">
				<tr>
					<td className="px-3 text-2xl font-medium dark:text-gray-400">A</td>
					<td className="px-3 py-2">
						<p>Dwight Adams</p>
					</td>
					<td className="px-3 py-2">
						<span>UI Designer</span>
						<p className="dark:text-gray-400">Spirit Media</p>
					</td>
					<td className="px-3 py-2">
						<p>555-873-9812</p>
					</td>
					<td className="px-3 py-2">
						<p>dwight@adams.com</p>
					</td>
					<td className="px-3 py-2">
						<p>71 Cherry Court, SO</p>
						<p className="dark:text-gray-400">United Kingdom</p>
					</td>
					<td className="px-3 py-2">
						<button type="button" title="Open details" className="p-1 rounded-full dark:text-gray-600 hover:dark:bg-gray-700 focus:dark:bg-gray-700">
							<svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
								<path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"></path>
							</svg>
						</button>
					</td>
				</tr>
				<tr>
					<td className="px-3 text-2xl font-medium dark:text-gray-400"></td>
					<td className="px-3 py-2">
						<p>Richie Allen</p>
					</td>
					<td className="px-3 py-2">
						<span>Geothermal Technician</span>
						<p className="dark:text-gray-400">Icecorps</p>
					</td>
					<td className="px-3 py-2">
						<p>555-129-0761</p>
					</td>
					<td className="px-3 py-2">
						<p>richie@allen.com</p>
					</td>
					<td className="px-3 py-2">
						<p>Knesebeckstrasse 32, Obersteinebach</p>
						<p className="dark:text-gray-400">Germany</p>
					</td>
					<td className="px-3 py-2">
						<button type="button" title="Open details" className="p-1 rounded-full dark:text-gray-600 hover:dark:bg-gray-700 focus:dark:bg-gray-700">
							<svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
								<path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"></path>
							</svg>
						</button>
					</td>
				</tr>
			</tbody>
			<tbody className="border-b dark:bg-gray-900 dark:border-gray-700">
				<tr>
					<td className="px-3 text-2xl font-medium dark:text-gray-400">B</td>
					<td className="px-3 py-2">
						<p>Alex Bridges</p>
					</td>
					<td className="px-3 py-2">
						<span>Administrative Services Manager</span>
						<p className="dark:text-gray-400">Smilectronics</p>
					</td>
					<td className="px-3 py-2">
						<p>555-238-9890</p>
					</td>
					<td className="px-3 py-2">
						<p>alex@bridges.com</p>
					</td>
					<td className="px-3 py-2">
						<p>Hooivelden 117, Kortrijk</p>
						<p className="dark:text-gray-400">Belgium</p>
					</td>
					<td className="px-3 py-2">
						<button type="button" title="Open details" className="p-1 rounded-full dark:text-gray-600 hover:dark:bg-gray-700 focus:dark:bg-gray-700">
							<svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
								<path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"></path>
							</svg>
						</button>
					</td>
				</tr>
				<tr>
					<td className="px-3 text-2xl font-medium dark:text-gray-400"></td>
					<td className="px-3 py-2">
						<p>Lynette Brown</p>
					</td>
					<td className="px-3 py-2">
						<span>Camera Operator</span>
						<p className="dark:text-gray-400">Surge Enterprises</p>
					</td>
					<td className="px-3 py-2">
						<p>555-521-5712</p>
					</td>
					<td className="px-3 py-2">
						<p>lynette@brown.com</p>
					</td>
					<td className="px-3 py-2">
						<p>22 rue de la Boétie, Poitiers</p>
						<p className="dark:text-gray-400">France</p>
					</td>
					<td className="px-3 py-2">
						<button type="button" title="Open details" className="p-1 rounded-full dark:text-gray-600 hover:dark:bg-gray-700 focus:dark:bg-gray-700">
							<svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
								<path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"></path>
							</svg>
						</button>
					</td>
				</tr>
			</tbody>
			<tbody className="border-b dark:bg-gray-900 dark:border-gray-700">
				<tr>
					<td className="px-3 text-2xl font-medium dark:text-gray-400">C</td>
					<td className="px-3 py-2">
						<p>Mariah Claxton</p>
					</td>
					<td className="px-3 py-2">
						<span>Nuclear Technician</span>
						<p className="dark:text-gray-400">White Wolf Brews</p>
					</td>
					<td className="px-3 py-2">
						<p>555-654-9810</p>
					</td>
					<td className="px-3 py-2">
						<p>mariah@claxton.com</p>
					</td>
					<td className="px-3 py-2">
						<p>R Oliveirinhas 71, Maia</p>
						<p className="dark:text-gray-400">Portugal</p>
					</td>
					<td className="px-3 py-2">
						<button type="button" title="Open details" className="p-1 rounded-full dark:text-gray-600 hover:dark:bg-gray-700 focus:dark:bg-gray-700">
							<svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
								<path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"></path>
							</svg>
						</button>
					</td>
				</tr>
				<tr>
					<td className="px-3 text-2xl font-medium dark:text-gray-400"></td>
					<td className="px-3 py-2">
						<p>Hermila Craig</p>
					</td>
					<td className="px-3 py-2">
						<span>Production Engineer</span>
						<p className="dark:text-gray-400">Cavernetworks Co.</p>
					</td>
					<td className="px-3 py-2">
						<p>555-091-8401</p>
					</td>
					<td className="px-3 py-2">
						<p>hermila@craig.com</p>
					</td>
					<td className="px-3 py-2">
						<p>Rua da Rapina 89, Espeja</p>
						<p className="dark:text-gray-400">Spain</p>
					</td>
					<td className="px-3 py-2">
						<button type="button" title="Open details" className="p-1 rounded-full dark:text-gray-600 hover:dark:bg-gray-700 focus:dark:bg-gray-700">
							<svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
								<path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"></path>
							</svg>
						</button>
					</td>
				</tr>
			</tbody>
		</table>
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




// <div class="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
// <span class="font-bold text-gray-800 dark:text-gray-200">
//     {wishlist.price}
// </span>
// {!wishall && <button onClick={() => handleWish(wishlist)} class="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
//     Buy
// </button>

// }
// {
//     wishall && <p>Ordered</p>
// }
// </div>