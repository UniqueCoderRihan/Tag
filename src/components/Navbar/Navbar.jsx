import { useContext } from 'react';
import { FaCartPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContex } from '../../Provider/AuthProvider';

const Navbar = () => {
    const { user, logout } = useContext(AuthContex);
    console.log(user);

    const handleLogout = () => {
        logout();
    }
    const items = <>
        <li>
            <Link to='/'>Home</Link>
        </li>
        <li>
            <Link to='/all-products'>All Products</Link>
        </li>

        {
            user && <li>
                <Link to='/my-products'>My Products</Link>
            </li>
        }
        {
            user ? <li className=' px-2'> <Link onClick={handleLogout}>Logout</Link> </li> : <li className=' px-2'> <Link to='/login'>Login</Link> </li>
        }
    </>
    return (
        <header className="border-b border-black">
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown md:hidden">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
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
                                    d="M4 6h16M4 12h16M4 18h7"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            {/* responsive Menubar */}
                            {items}
                        </ul>
                    </div>
                    <div className="hidden md:block">
                        <ul
                            tabIndex={0}
                            className="menu menu-horizontal"
                        >
                            {items}
                        </ul>
                    </div>
                </div>
                <div className="navbar-center">
                    <Link to={'/'} className="font-bold font-mono text-xl lg:text-2xl">Think and get</Link>
                </div>
                <div className="navbar-end">

                    <button className="btn btn-ghost btn-circle">
                        <div className="indicator">
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
                                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                                />
                            </svg>
                            <span className="badge badge-xs badge-primary indicator-item"></span>
                        </div>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;