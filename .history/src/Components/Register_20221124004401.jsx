import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { AuthContext } from '../Context/AuthProvider';
import { Link } from "react-router-dom"


const Register = () => {

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const { user,
        createUser,
        signinGoogle,
    } = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then((result) => {
                swal('Register Successful')
                form.reset();
            })
            .catch((error) => {
                swal(error.message)
                console.log(error)
            });
    }

    const handleGoogleSignIn = () => {
        signinGoogle()
            .then(result => {
                console.log(result.user);
                swal('Google Log in Successful')
                navigate('/')
            })
            .catch((error) => {
                swal(error.message)
            })
    }
    return (
        <div className="mt-5 login">
            <div className="flex justify-center items-center ">
                <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
                    <div className="mb-8 text-center">
                        <h1 className="my-3 text-4xl font-bold">Register</h1>
                        <p className="text-sm text-gray-400">Create a new account</p>
                    </div>
                    <form
                        onSubmit={handleSubmit}
                        noValidate=""
                        action=""
                        className="space-y-12 ng-untouched ng-pristine ng-valid"
                    >
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Enter Your Full Name Here"
                                    className="w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-gray-200 text-gray-900"
                                    data-temp-mail-org="0"
                                />
                            </div>
                            <div>
                                <label htmlFor="photoURL" className="block mb-2 text-sm">
                                    Photo URL
                                </label>
                                <input
                                    type="text"
                                    name="photoURL"
                                    id="photoURL"
                                    placeholder="Enter Your Photo URL"
                                    className="w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-gray-200 text-gray-900"
                                    data-temp-mail-org="0"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Enter Your Email Here"
                                    className="w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-gray-200 text-gray-900"
                                    data-temp-mail-org="0"
                                />
                            </div>
                            <div>
                                <div className="flex justify-between mb-2">
                                    <label htmlFor="password" className="text-sm">
                                        Password
                                    </label>
                                </div>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="*******"
                                    className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-200 focus:border-gray-900 text-gray-900"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div>
                                <button
                                    type="submit"
                                    className="w-full px-8 py-3 font-semibold rounded-md bg-gray-900 hover:bg-gray-700 hover:text-white text-gray-100"
                                >
                                    Sign Up
                                </button>
                            </div>
                        </div>
                    </form>
                    <div className="flex items-center pt-4 space-x-1">
                        <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                        <p className="px-3 text-sm dark:text-gray-400">
                            Signup with social accounts
                        </p>
                        <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                    </div>
                    <div className="flex justify-center space-x-4">
                        <button
                            onClick={handleGoogleSignIn}
                            aria-label="Log in with Google"
                            className="p-3 rounded-sm">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 32 32"
                                className="w-5 h-5 fill-current"
                            >
                                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                            </svg>
                        </button>

                    </div>
                    <p className="px-6 text-sm text-center ">
                        Already have an account yet?{" "}
                        <Link to="/login" className="hover:underline text-gray-600">
                            Sign In
                        </Link>
                        .
                    </p>
                </div>
            </div>
        </div>
    );
};


export default Register;