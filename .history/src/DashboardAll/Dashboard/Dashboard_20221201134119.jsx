import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Authcontext } from '../../Components/Context/AuthProvider';
import Footer from '../../Components/Footer';
import Navbar from '../../Components/Navbar';
import AdminHooks from '../../Hooks/AdminHook';
import SellerHooks from '../../Hooks/SellerHooks';



const Dashboard = () => {
    const { user } = useContext(Authcontext)
    const [isAdmin] = AdminHooks(user?.email)
    const [isSeller] = SellerHooks(user?.email)
    console.log(isAdmin, isSeller)
    return (
        <div>
            <div>

                <Navbar></Navbar>
                <div className="drawer drawer-end  ">
                    <input id="dashboard" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        <Outlet></Outlet>
                    </div>
                    <div className="drawer-side ">
                        <label htmlFor="dashboard" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80 bg-base-100  bg-gradient-to-r from-blue-900 via-blue-500
                         to-blue-900 font-bold text-white">
                            {
                                !isSeller && !isAdmin &&
                                <>
                                    <li>
                                        <Link to={"/dashboard"}>My Orders</Link>
                                    </li>
                                    <li>
                                        <Link to={"/dashboard/userswishlist"}>My Wishlist</Link>
                                    </li>
                                </>
                            }
                            {
                                isAdmin &&
                                <>
                                    <li>
                                        <Link to={"/dashboard/allusers"}>All Users</Link>
                                    </li>
                                    <li>
                                        <Link to={"/dashboard/allreports"}>Report</Link>
                                    </li>
                                </>
                            }
                            {
                                isSeller &&
                                <>
                                    <li>
                                        <Link to={"/dashboard/addProduct"}>Add Product</Link>
                                    </li>
                                    <li>
                                        <Link to={"/dashboard/myallprodcuts"}>My Product</Link>
                                    </li>
                                    <li>
                                        <Link to={"/dashboard/buyers"}>My Buyers</Link>
                                    </li>
                                </>
                            }
                        </ul>
                    </div>
                </div>
                <hr />
                <Footer></Footer>
            </div>
        </div >
    );
};

export default Dashboard;