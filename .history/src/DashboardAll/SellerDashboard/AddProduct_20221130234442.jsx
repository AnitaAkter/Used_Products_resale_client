import React from 'react';

const AddProduct = () => {

    const handleAdd = (data) => {
        console.log(data);
    }
    return (
        <div className='m-10'>
            <div className='h-1/2 flex justify-center items-center'>
                <div className='w-2/3 lg:w-1/2 p-7 rounded-lg border'>
                    <h2 className='text-xl text-center'>Sign Up</h2>
                    <form onSubmit={handleSubmit(handleAdd)}>
                        <div className="form-control w-full max-w-">
                            <label className="label"> <span className="label-text">Product Name</span></label>
                            <input type="text" {...register("title", {
                                required: "Name is Required"
                            })} className="input input-bordered w-full " />
                            {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                        </div>

                        <div className="form-control w-full ">
                            <label className="label"> <span className="label-text">Brand</span></label>
                            <select className="input input-bordered w-full "  {...register("category_name")}>

                                <option disabled>Choose one of the category</option>
                                <option value="Xiaomi">Xiaomi</option>
                                <option value="Samsung">Samsung</option>
                                <option value="Apple">Apple</option>
                            </select>
                        </div>
                        <div className="form-control w-full ">
                            <label className="label"> <span className="label-text">Category ID:</span></label>
                            <select className="input input-bordered w-full "  {...register("category_id")}>

                                <option disabled>Choose one of the category</option>
                                <option value="01">Xiaomi ID: 1 </option>
                                <option value="02">Samsung ID: 2</option>
                                <option value="03">Apple ID: 3</option>
                            </select>
                        </div>
                        {/* Picture Added to imgbb */}
                        <div className="form-control w-full max-w-">
                            <label className="label"> <span className="label-text">Picture</span></label>
                            <input type="file" {...register("picture", {
                                required: "Name is Required"
                            })} className="input input-bordered w-full " />
                            {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-">
                            <label className="label"> <span className="label-text">Location</span></label>
                            <input type="text" {...register("location", {
                                required: "Name is Required"
                            })} className="input input-bordered w-full " />
                            {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-">
                            <label className="label"> <span className="label-text">Shop Name</span></label>
                            <input type="text" {...register("Seller_name", {
                                required: "Name is Required"
                            })} className="input input-bordered w-full " />
                            {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-">
                            <label className="label"> <span className="label-text">Booking ID</span></label>
                            <input type="text" {...register("bookingId", {
                                required: "Name is Required"
                            })} className="input input-bordered w-full " />
                            {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-">
                            <label className="label"> <span className="label-text">Stock</span></label>
                            <input type="text" {...register("stock", {
                                required: "Name is Required"
                            })} className="input input-bordered w-full " />
                            {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-">
                            <label className="label"> <span className="label-text">Sale Price</span></label>
                            <input type="text" {...register("resale_price", {
                                required: "Name is Required"
                            })} className="input input-bordered w-full " />
                            {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-">
                            <label className="label"> <span className="label-text">Buying Price</span></label>
                            <input type="text" {...register("buying_price", {
                                required: "Name is Required"
                            })} className="input input-bordered w-full " />
                            {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-">
                            <label className="label"> <span className="label-text">Purchase Year</span></label>
                            <input type="text" {...register("Year_of_purchase", {
                                required: "Name is Required"
                            })} className="input input-bordered w-full " />
                            {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-">
                            <label className="label"> <span className="label-text">How many years you have used?</span></label>
                            <input type="text" {...register("Year_of_uses", {
                                required: "Name is Required"
                            })} className="input input-bordered w-full " />
                            {errors.name && <p className='text-red-500'>
                                {errors.name.message}
                                </p>}
                        </div>

                        <div className="form-control w-full max-w-">
                            <label className="label"> <span className="label-text">condition</span></label>
                            <input type="text" {...register("condition", {
                                required: "Name is Required"
                            })} className="input input-bordered w-full " />
                            {errors.name && <p className='text-red-500'>
                                {errors.name.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-">
                            <label className="label"> <span className="label-text">Number</span></label>
                            <input type="text" {...register("number_of_seller", {
                                required: "Name is Required"
                            })} className="input input-bordered w-full " />
                            {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-">
                            <label className="label"> <span className="label-text">Details</span></label>
                            <input type="text" {...register("details", {
                                required: "Name is Required"
                            })} className="input input-bordered w-full " />
                            {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                        </div>


                        <input className='btn btn-accent w-full mt-4' value="Add Product" type="submit" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default AddProduct;