import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

const Category = () => {

    const { data: phones = [], refetch } = useQuery({
        queryKey: ['phones'],
        queryFn: async () => {
            const res = await fetch('https://sales-ex-server.vercel.app/phones')
            const data = await res.json();
            return data.slice(0, 3);

        }
    })
    return (
        <div className='bg-gradient-to-r from-blue-600 via-blue-800
        to-blue-900 p-5 text-white'>
            <h1 className='text-center text-3xl font-bold'>Categories</h1>
            <div className='m-16 grid gap-5 justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
                {
                    phones.map((phone, i) => <div key={i}>

                        <div class="flex max-w-sm overflow-hidden border border-accent rounded-lg shadow-lg bg-gradient-to-r from-blue-900 via-blue-500
                         to-blue-900 ">
                            <div class="w-1/3 bg-cover p-6">

                                <div className="avatar  mt-3 h-36 w-36 rounded-full ring ring-accent ring-offset-base-100 ring-offset-2">
                                    <div className=" h-36 w-36 rounded-full">
                                        <img src={phone.picture} alt="Tailwind-CSS-Avatar-component" />
                                    </div>
                                </div>
                            </div>

                            <div class="w-2/3  mt-16 p-6 md:p-4">
                                <h1 class="text-3xl ml-10 font-bold  text-white ">{phone.category_name}</h1>

                                <div class="gridjustify-center ml-10 item-center">
                                    <Link to={`/singleProduct/${phone?.category_id}`}>
                                        <button class="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600 ">See Products</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                }
            </div>

        </div>
    );
};

export default Category;