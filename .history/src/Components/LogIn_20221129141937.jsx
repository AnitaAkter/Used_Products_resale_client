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
        // </div


        <header class="bg-gray-900 pattern">
            <div class="container px-6 mx-auto">
                <nav class="flex flex-col py-6 sm:flex-row sm:justify-between sm:items-center">
                    <div>
                        <a href="#" class="text-2xl font-semibold text-white hover:text-gray-300">Brand</a>
                    </div>

                    <div class="flex items-center mt-2 -mx-2 sm:mt-0">
                        <a href="#" class="px-3 py-1 text-sm font-semibold text-white transition-colors duration-300 transform border-2 rounded-md hover:bg-gray-700">Sign In</a>
                        <a href="#" class="px-3 py-2 mx-2 text-sm font-semibold text-white transition-colors duration-300 transform bg-black rounded-md hover:bg-gray-800">Sign Up</a>
                    </div>
                </nav>

                <div class="flex flex-col items-center py-6 lg:h-[36rem] lg:flex-row">
                    <div class="lg:w-1/2">
                        <h2 class="text-3xl font-semibold text-gray-100 lg:text-4xl">Brand</h2>

                        <h3 class="mt-2 text-2xl font-semibold text-gray-100">
                            Hello <span class="text-blue-400">Guest</span>
                        </h3>

                        <p class="mt-4 text-gray-100">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, eum modi incidunt adipisci quod porro et non exercitationem quasi, maxime culpa ut nemo ab delectus saepe iste nostrum explicabo a?</p>
                    </div>

                    <div class="flex mt-8 lg:w-1/2 lg:justify-end lg:mt-0">
                        <div class="w-full max-w-md bg-white rounded-lg dark:bg-gray-800">
                            <div class="px-6 py-8 text-center">
                                <h2 class="text-2xl font-semibold text-gray-700 dark:text-white fo">Sign In</h2>

                                <form action="#">
                                    <div class="mt-4">
                                        <input class="block w-full px-4 py-2 text-gray-700 placeholder-gray-400 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-500 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:ring-blue-300 focus:outline-none focus:ring" type="email" placeholder="Email address" aria-label="Email address">
                                            <input class="block w-full px-4 py-2 mt-4 text-gray-700 placeholder-gray-400 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-500 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:ring-blue-300 focus:outline-none focus:ring" type="password" placeholder="Password" aria-label="Password">
                                            </div>

                                            <div class="flex items-center justify-between mt-4">
                                                <a href="#" class="text-sm text-gray-600 dark:text-gray-200 hover:underline">Forget Password?</a>

                                                <button class="px-6 py-2 font-medium text-white transition-colors duration-300 transform bg-gray-900 rounded-md hover:bg-gray-800 dark:hover:bg-gray-700 focus:outline-none focus:bg-gray-800 dark:focus:bg-gray-700">Sign In</button>
                                            </div>
                                        </form>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
        </header>

    );
};

export default LogIn;