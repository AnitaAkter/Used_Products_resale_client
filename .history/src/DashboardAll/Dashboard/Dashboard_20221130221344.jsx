import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Authcontext } from '../../Components/Context/AuthProvider';
import Navbar from '../../Components/Navbar';
import AdminHooks from '../../Hooks/AdminHook';

const Dashboard = () => {
    const { user } = useContext(Authcontext)
    const [isAdmin] = AdminHooks(user?.email)
    const [isSeller] = AdminHooks(user?.email)
    return (
        <div>

            <div>
                <h1>Welcom to Dashboard</h1>
                <Navbar></Navbar>
                <div className="drawer drawer-end">
                    <input id="dashboard" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        <Outlet></Outlet>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="dashboard" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                            {!isSeller &&
                                <>
                                    <li>
                                        <Link to={"/dashboard"}>My Orders</Link>
                                    </li>
                                    <li>
                                        <Link to={"/dashboard/wishlist"}>My Wishlist</Link>
                                    </li>
                                </>
                            }
                            {
                                isAdmin &&
                                <>
                                    <li>
                                        <Link to={"/dashboard/users"}>All Users</Link>
                                    </li>
                                    <li>
                                        <Link to={"/dashboard/report"}>Report</Link>
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
                                        <Link to={"/dashboard/myProduct"}>My Product</Link>
                                    </li>
                                    <li>
                                        <Link to={"/dashboard/myBuyers"}>My Buyers</Link>
                                    </li>
                                </>
                            }
                        </ul>
                    </div>
                </div>

                <Footer></Footer>
            </div>
        </div>
    );
};

export default Dashboard;