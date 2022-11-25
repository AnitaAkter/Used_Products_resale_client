import React, { useContext } from 'react';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout()
            .then(swal("User Logged Out"))
            .catch((error) => swal(error.message));
    };
    const menuItems = (
        <>
            <li className="font-semibold">
                <Link to="/">Home</Link></li>
            {user?.email ? (
                <>
                    <li className="font-semibold">
                        <Link to="/add">Add Products</Link></li>
                    <li className="font-semibold">
                        <Link to="/myallreviews">My Reviews</Link></li>
                    <li className="font-semibold" onClick={handleLogout}>
                        <Link>Log Out</Link></li>

                </>
            ) : (
                <>
                    <li className="font-semibold">
                        <Link to="/register">Register</Link></li>
                    <li className="font-semibold">
                        <Link to="/login">LogIn</Link></li>
                </>
            )}
            <li className="font-semibold">
                <Link to="/blog">Blogs</Link></li>
        </>
    );
    return (
        <div>

        </div>
    );
};

export default Navbar;