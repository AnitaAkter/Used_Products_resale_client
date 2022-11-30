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
        // <div className='flex gap-5 m-5 justify-between grid-cols-2 mt-5'>
        //     <div className='grid justify-center' >
        //         <div className="w-full  max-w-md p-4 rounded-md shadow sm:p-8 bg-blue-300 text-gray-900">
        //             <h2 className="mb-3 text-3xl font-semibold text-center">Login to your account</h2>
        //             <p className="text-sm text-center font-semibold dark:text-gray-400">Dont have account?

        //                 <Link to={'/register'} className="focus:underline hover:underline">Sign up here</Link>
        //             </p>
        //             <div className="my-6 space-y-4">
        //                 <button onClick={handleGoogleSignIn} aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 bg-gray-300 dark:border-gray-400 focus:ring-violet-400">
        //                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
        //                         <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
        //                     </svg>
        //                     <p >Login with Google</p>
        //                 </button>
        //             </div>
        //             <div className="grid justify-center w-full my-4">

        //                 <form onSubmit={handleSubmit} novalidate="" action="" className="space-y-8 ng-untouched ng-pristine ng-valid">
        //                     <div className="space-y-4">
        //                         <div className="space-y-2">
        //                             <label for="email" className="block text-sm font-semibold">Email address</label>
        //                             <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
        //                         </div>
        //                         <div className="space-y-2">
        //                             <div className="flex justify-between">
        //                                 <label for="password" className="text-sm font-semibold">Password</label>
        //                                 <Link rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-400 font-bold">Forgot password?</Link>
        //                             </div>
        //                             <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
        //                         </div>
        //                     </div>
        //                     <button type="button" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-400 bg-gray-300 dark:text-gray-900">Sign in</button>
        //                 </form>
        //             </div>
        //         </div>
        //     </div>
        //     <div className='flex-1 justify-center m-5 mx-auto my-auto'>
        //         <img src={phn} alt="" />
        //     </div>
        // </div>

        <section className="dark:bg-gray-800 dark:text-gray-100">
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h1 className="text-5xl font-bold leading-none sm:text-6xl">Ac mattis
                        <span className="dark:text-violet-400">senectus</span>erat pharetra
                    </h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12">Dictum aliquam porta in condimentum ac integer
                        <br className="hidden md:inline lg:hidden">turpis pulvinar, est scelerisque ligula sem</br>
                    </p>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Suspendisse</a>
                        <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100">Malesuada</a>
                    </div>
                </div>
                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <img src="assets/svg/Business_SVG.svg" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                </div>
            </div>
        </section>

    );
};

export default LogIn;