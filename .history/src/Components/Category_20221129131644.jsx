import React from 'react';

const Category = () => {

    const { data: mobiles = [], refetch } = useQuery({
        queryKey: ['mobiles'],
        queryFn: async () => {
            const res = await fetch('https://server-assignment-12.vercel.app/mobiles')
            const data = await res.json();
            return data.slice(0, 3);

        }
    })
    return (
        <div>

        </div>
    );
};

export default Category;