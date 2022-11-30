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

                <div>
                    
                </div>

            </div>
            <div className='flex-1 justify-center m-5 mx-auto my-auto'>
                <img src={phn} alt="" />
            </div>
        </div>



    );
};

export default LogIn;