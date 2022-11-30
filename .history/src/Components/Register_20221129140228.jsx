import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

// import useToken from '../../useHooks/useToken';
import { Authcontext } from './Context/AuthProvider';




const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser, signinGoogle, setLoading } = useContext(Authcontext);
    const [signUpError, setSignUPError] = useState('')
    const navigate = useNavigate()
    const [cratedUseremail, setCratedUseremail] = useState('')
    // const [token] = useToken(cratedUseremail)

    // if (token) {
    //     navigate('/')
    // }

    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const handleSignUp = (data) => {
        console.log(data);
        setSignUPError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                swal('User Created Successfully.')
                const userInfo = {
                    displayName: data.name,
                }
                updateUser(userInfo)
                    .then(() => {
                        savedUser(data.name, data.email, data.role);
                    })

                    .catch(err => console.log(err));
            })
            .catch(error => {
                console.log(error)
                setSignUPError(error.message)
            });
    }

    const savedUser = (name, email, role) => {
        const user = { name, email, role };
        fetch('https://server-assignment-12.vercel.app/usersall',
            {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            }
        )
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCratedUseremail(email)
            })
    }


    const handleGoogleSignin = () => {
        signinGoogle().then(result => {
            console.log(result.user)
            //   setAuthToken(result.user)
            setLoading(false)
            navigate(from, { replace: true })
        })
    }



    return (
        <div>
            <div className='h-[800px] flex justify-center items-center bg-gradient-to-r from-blue-600 via-blue-800 to-blue-900'>
                <div className='w-96 p-7 rounded-lg border'>
                    <h2 className=' text-center text-white font-bold text-3xl'>Sign Up</h2>
                    <form onSubmit={handleSubmit(handleSignUp)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text text-white font-bold">Name</span></label>
                            <input type="text" {...register("name", {
                                required: "Name is Required"
                            })} className="input input-bordered w-full max-w-xs" />
                            {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text text-white font-bold">Email</span></label>
                            <input type="email" {...register("email", {
                                required: true
                            })} className="input input-bordered w-full max-w-xs" />
                            {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text text-white font-bold">Password</span></label>
                            <input type="password" {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: "Password must be 6 characters long" },
                            })} className="input input-bordered w-full max-w-xs" />
                            {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text text-white font-bold">Are You a Buyer or a Seller?</span></label>
                            <select className="input input-bordered w-full max-w-xs"  {...register("role")}>

                                <option disabled value="null">Choose One</option>
                                <option value="buyer">Buyer</option>
                                <option value="seller">Seller</option>
                            </select>
                        </div>
                        <input className='btn btn-accent w-full mt-4' value="Sign Up" type="submit" />
                        {signUpError && <p className='text-red-600'>{signUpError}</p>}
                    </form>
                    <p className='text-white font-bold'>Already have an account <Link className='text-accent' to="/login">Please Login</Link></p>
                    <div className="divider">OR</div>
                    <button onClick={handleGoogleSignin} className='btn btn-outline w-full text-white font-bold'>CONTINUE WITH GOOGLE</button>

                </div>
            </div>
        </div>
    );
};

export default Register;