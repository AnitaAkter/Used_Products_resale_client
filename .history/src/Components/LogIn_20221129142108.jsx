import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import phn from '../assets/phn.png';

// import login from '../Assets/login.jpg'
import { Link } from 'react-router-dom';
import { Authcontext } from './Context/AuthProvider';

const LogIn = () => {
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const { signIn,
        signinGoogle,
    } = useContext(Authcontext);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                swal('User Logged In');
                navigate(from, { replace: true });
                form.reset();
                setError('');
            })

            .catch(error => {
                console.log(error)
                setError(error.message)
            })

    }

    const handleGoogleSignIn = () => {
        signinGoogle()
            .then(result => {
                console.log(result.user);
                swal('Google Log in Succeessful')
                navigate(from, { replace: true });
            })
            .catch((error) => {
                swal(error.message)
            })
    }
    return (
        <div className='flex gap-5 m-5 justify-between grid-cols-2 mt-5'>
            <div className='grid justify-center' >
                

                
            </div>
            <div className='flex-1 justify-center m-5 mx-auto my-auto'>
                <img src={phn} alt="" />
            </div>
        </div



    );
};

export default LogIn;