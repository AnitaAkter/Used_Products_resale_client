import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import { AuthContext } from '../../../Contexts/AuthProvider';
import MyProductsDetails from './MyProductsDetails';

const MyProduct = () => {
    const {user} = useContext(AuthContext)
    const url = `https://server-assignment-12.vercel.app/addedbyseller?email=${user?.email}`;
    const {data: mobiles= [] }= useQuery({
        queryKey: ['mobiles', user?.email],
        queryFn: async ()=>{
            const res = await fetch(url, {
                headers: {
                    authorization : `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
           
            return data;
        }
    
    })
    

