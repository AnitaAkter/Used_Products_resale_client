import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import ss from '../assets/ss.png'
import { Authcontext } from './Context/AuthProvider';





const Navbar = () => {
    const { user, logout } = useContext(Authcontext);

    const handleLogout = () => {
        logout()
            .then(
                swal("User Logged Out")
            )
            .catch((error) => swal(error.message));
    };
    const menuItems = (
        <React.Fragment>
            <li className="font-bold">
                <Link to="/">Home</Link>
            </li>
            <li className="font-bold">
                <Link to="/blog">Blogs</Link>
            </li>
            {user?.email ? (
                <>
                    {/* <li className="font-bold">
                        <Link to="/add">Add Products</Link>
                    </li> */}
                    <li className="font-bold">
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li className="font-bold" onClick={handleLogout}>
                        <Link>Log Out</Link>
                    </li>
                </>
            ) : (
                <>
                    <li className="font-bold">
                        <Link to="/register">Register</Link>
                    </li>
                    <li className="font-bold">
                        <Link to="/login">Login</Link>
                    </li>
                </>
            )}


        </React.Fragment>
    );
    return (
        <div className="navbar bg-blue-500">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        {menuItems}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">
                    <img src={ss} className="w-12 h-10 rounded"
                        alt="" />
                </Link>
            </div>
            <div className="navbar-end">
                <ul className="menu menu-horizontal hidden lg:flex p-0">{menuItems}</ul>
                <ul>
                    <li >
                        <p>{user?.displayName}</p>
                    </li>
                    <label
                        htmlFor="dashboard"
                        tabIndex={2}
                        className="btn btn-ghost "
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-6 h-6"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            />
                        </svg>
                    </label>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;