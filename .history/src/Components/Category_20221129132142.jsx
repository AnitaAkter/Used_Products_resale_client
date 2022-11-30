import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
const Category = () => {

    const { data: phones = [], refetch } = useQuery({
        queryKey: ['mobiles'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/phones')
            const data = await res.json();
            return data.slice(0, 3);

        }
    })
    return (
        <div >
            <h1 className='text-center text-3xl font-bold'>Categories</h1>
            <div className='m-16 grid gap-5 justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
                {
                    phones.map((mobile, i) => <div key={i}>

                        <div class="flex max-w-sm overflow-hidden rounded-lg shadow-lg bg-gradient-to-r from-blue-600 via-blue-800 to-blue-900">
                            <div class="w-1/3 bg-cover"></div>

                            <div class="w-2/3 p-4 md:p-4">
                                <h1 class="text-2xl font-bold text-gray-800 dark:text-white">{mobile.category_name}</h1>

                                <div class="gridjustify-center mt-3 item-center">
                                    <Link to={`/category/${mobile?.category_id}`}>
                                        <button class="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">See Products</button>
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