import React from 'react';

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
        <div>

        </div>
    );
};

export default Category;