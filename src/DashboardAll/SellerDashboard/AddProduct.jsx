import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

import { Authcontext } from '../../Components/Context/AuthProvider';
import TokenHooks from '../../Hooks/TokenHooks';



const AddProduct = () => {
    const { user } = useContext(Authcontext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate()
    const date = new Date().toLocaleString()

    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const imgbbkey = '2e0db4bd9460b6c1dc4f9c07cd85ed0c';

    const handleAddProdut = data => {
        console.log(data)
        const img = data.picture[0];
        const formData = new FormData();
        formData.append('image', img);
        const url = `https://api.imgbb.com/1/upload?key=${imgbbkey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageData => {
                if (imageData.success) {
                    console.log(imageData.data.url)
                    const newmobile = {
                        category_id: data.category_id,
                        category_name: data.category_name,
                        title: data.title,
                        picture: imageData.data.url,
                        location: data.location,
                        buying_price: data.buying_price,
                        resale_price: data.resale_price,
                        Purchase_Year: data.Year_of_purchase,
                        Uses_of_Year: data.Uses_of_Year,
                        the_time_it_posted: date,
                        Name_of_Seller: data.Seller_name,
                        condition: data.condition,
                        number_of_seller: data.number_of_seller,
                        details: data.details,
                        Order_id: data.Order_id,
                        email: user.email,

                    }

                    fetch('https://sales-ex-server.vercel.app/phones', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',

                        },
                        body: JSON.stringify(newmobile)

                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result)
                            if (result.acknowledged) {
                                swal('Mobile added')
                                navigate('/dashboard/myallprodcuts')
                            }
                        })



                }
            })



    }





    return (
        <div className='m-10 '>
            <div className='h-1/2 flex justify-center items-center'>
                <div className='w-2/3 lg:w-1/2 p-7 rounded-lg border  bg-gradient-to-r from-blue-600 via-blue-800 to-blue-900 font-bold'>
                    <h2 className='text-xl text-center  text-white'>Sign Up</h2>
                    <form onSubmit={handleSubmit(handleAddProdut)}>
                        <div className="form-control w-full max-w-">
                            <label className="label"> <span className="label-text  text-white">Product Name</span></label>
                            <input type="text" {...register("title", {
                                required: "Name is Required"
                            })} className="input input-bordered w-full ring ring-accent ring-offset-base-100 ring-offset-2 " />
                            {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                        </div>

                        <div className="form-control w-full ">
                            <label className="label"> <span className="label-text  text-white  text-white">Brand</span></label>
                            <select className="input input-bordered w-full  ring ring-accent ring-offset-base-100 ring-offset-2"  {...register("category_name")}>

                                <option disabled>Choose one of the category</option>
                                <option value="One Plus">One Plus</option>
                                <option value="Vivo">Vivo</option>
                                <option value="Oppo">Oppo</option>
                            </select>
                        </div>
                        <div className="form-control w-full ">
                            <label className="label"> <span className="label-text  text-white">Category ID:</span></label>
                            <select className="input input-bordered w-full ring ring-accent ring-offset-base-100 ring-offset-2"  {...register("category_id")}>

                                <option disabled>Choose one of the category</option>
                                <option value="01">One Plus</option>
                                <option value="02">Vivo</option>
                                <option value="03">Oppo</option>
                            </select>
                        </div>
                        <div className="form-control w-full max-w-">
                            <label className="label"> <span className="label-text  text-white">Picture</span></label>
                            <input type="file" {...register("picture", {
                                required: "Name is Required"
                            })} className="file-input file-input-bordered w-full ring ring-accent ring-offset-base-100 ring-offset-2" />
                            {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-">
                            <label className="label"> <span className="label-text  text-white">Location</span></label>
                            <input type="text" {...register("location", {
                                required: "Name is Required"
                            })} className="input input-bordered w-full ring ring-accent ring-offset-base-100 ring-offset-2" />
                            {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-">
                            <label className="label"> <span className="label-text  text-white">Shop Name</span></label>
                            <input type="text" {...register("Seller_name", {
                                required: "Name is Required"
                            })} className="input input-bordered w-full ring ring-accent ring-offset-base-100 ring-offset-2" />
                            {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-">
                            <label className="label"> <span className="label-text  text-white">Order ID</span></label>
                            <input type="text" {...register("Order_id", {
                                required: "Name is Required"
                            })} className="input input-bordered w-full ring ring-accent ring-offset-base-100 ring-offset-2 " />
                            {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-">
                            <label className="label"> <span className="label-text  text-white">Selling Price</span></label>
                            <input type="text" {...register("resale_price", {
                                required: "Name is Required"
                            })} className="input input-bordered w-full ring ring-accent ring-offset-base-100 ring-offset-2 " />
                            {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-">
                            <label className="label"> <span className="label-text  text-white">Buying Price</span></label>
                            <input type="text" {...register("buying_price", {
                                required: "Name is Required"
                            })} className="input input-bordered w-full ring ring-accent ring-offset-base-100 ring-offset-2" />
                            {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-">
                            <label className="label"> <span className="label-text  text-white">Purchase Year</span></label>
                            <input type="text" {...register("Year_of_purchase", {
                                required: "Name is Required"
                            })} className="input input-bordered w-full ring ring-accent ring-offset-base-100 ring-offset-2" />
                            {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-">
                            <label className="label"> <span className="label-text  text-white">How many years/months/days you have used?</span></label>
                            <input type="text" {...register("Uses_of_Year", {
                                required: "Name is Required"
                            })} className="input input-bordered w-full ring ring-accent ring-offset-base-100 ring-offset-2" />
                            {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                        </div>

                        <div className="form-control w-full max-w-">
                            <label className="label"> <span className="label-text  text-white">Phones Condition</span></label>
                            <input type="text" {...register("condition", {
                                required: "Name is Required"
                            })} className="input input-bordered w-full ring ring-accent ring-offset-base-100 ring-offset-2" />
                            {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-">
                            <label className="label"> <span className="label-text  text-white">Seller Number</span></label>
                            <input type="text" {...register("number_of_seller", {
                                required: "Name is Required"
                            })} className="input input-bordered w-full ring ring-accent ring-offset-base-100 ring-offset-2" />
                            {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-">
                            <label className="label"> <span className="label-text  text-white">Details</span></label>
                            <input type="text" {...register("details", {
                                required: "Name is Required"
                            })} className="input input-bordered w-full ring ring-accent ring-offset-base-100 ring-offset-2" />
                            {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                        </div>


                        <input className='btn btn-danger ring ring-accent ring-offset-base-100 ring-offset-2  w-full mt-10 ' value="Add Product" type="submit" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default AddProduct;