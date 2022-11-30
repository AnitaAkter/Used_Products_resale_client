import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import phn from '../assets/phn.png';
import { useForm } from 'react-hook-form';
// import login from '../Assets/login.jpg'
import { Link } from 'react-router-dom';
import { Authcontext } from './Context/AuthProvider';


const LogIn = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { signIn, signInGoogle, user } = useContext(Authcontext);
    const [loginError, setLoginError] = useState('');
    const [loginUserEmail, setLoginUserEmail] = useState('');
    // const [token] = useToken(loginUserEmail)
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';
    // if (token) {
    //     navigate(from, { replace: true });
    // }

    const handleLogin = data => {
        console.log(data);
        setLoginError('');
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                setLoginUserEmail(data.email)

            })
            .catch(error => {
                console.log(error.message)
                setLoginError(error.message);
            });
    }


    const handleGoogleSignIn = () => {
        signInGoogle()
            .then(result => {
                console.log(result.user);
                swal('Google Log in Successful')
                navigate(from, { replace: true });
            })
            .catch((error) => {
                swal(error.message)
            })
    }
    return (
        <div className='flex gap-5 justify-between grid-cols-2 mt-5'>
            <div className='grid justify-center' >

            <div className='h-[800px] flex justify-center items-center'>
                        <div className='w-96 p-7'>
                            <h2 className='text-xl text-center'>Login</h2>
                            <form onSubmit={handleSubmit(handleLogin)}>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label"> <span className="label-text">Email</span></label>
                                    <input type="text"
                                        {...register("email", {
                                            required: "Email Address is required"
                                        })}
                                        className="input input-bordered w-full max-w-xs" />
                                    {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label"> <span className="label-text">Password</span></label>
                                    <input type="password"
                                        {...register("password", {
                                            required: "Password is required",
                                            minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                                        })}
                                        className="input input-bordered w-full max-w-xs" />
                                    <label className="label"> <span className="label-text">Forget Password?</span></label>
                                    {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                                </div>
                                <input className='btn btn-accent w-full' value="Login" type="submit" />
                                <div>
                                    {loginError && <p className='text-red-600'>{loginError}</p>}
                                </div>
                            </form>
                            <p>You are new here? <Link className='text-secondary' to="/register">Create new Account</Link></p>
                            <div className="divider">OR</div>
                            <button onClick={handleGoogleSignIn} className=' btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
                        </div>
                    </div>

            </div>
            <div className='flex-1 justify-center m-5 mx-auto my-auto'>
                <img src={phn} alt="" />
            </div>
        </div>



    );
};

export default LogIn;