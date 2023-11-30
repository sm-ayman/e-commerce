import React, { useContext } from "react";
import logo from "../Assets/logo.png";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContextProvider";

const Navbar = () => {
  const { getTotalCartItems } = useContext(ShopContext);
  return (
    <div className=" navbar top-0 backdrop-filter backdrop-blur-lg bg-opacity-75 shadow-lg lg:px-10 sticky z-10">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Shop</Link>
            </li>
            <li>
              <Link>Fashion</Link>
              <ul className="p-2">
                <li>
                  <Link to="/mens">Men</Link>
                </li>
                <li>
                  <Link to="/womens">Women</Link>
                </li>
                <li>
                  <Link to="/kids">Kids</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link>Electronics</Link>
              <ul className="p-2">
                <li>
                  <Link to="/phone-accessories">Phone Accessories</Link>
                </li>
                <li>
                  <Link to="/computer-accessories">Computer Accessories</Link>
                </li>
                <li>
                  <Link to="/photography">Photography</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link>About</Link>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl" href="/">
          <img src={logo} className="w-10" alt="" />
        </a>
        <span className="text-bold md:text-2xl text-xl">Goods Era</span>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Shop</Link>
          </li>
          <li tabIndex={0}>
            <details>
              <summary>Fashion</summary>
              <ul className="p-2">
                <li>
                  <Link to="/mens">Men</Link>
                </li>
                <li>
                  <Link to="/womens">Women</Link>
                </li>
                <li>
                  <Link to="/kids">Kids</Link>
                </li>
              </ul>
            </details>
          </li>
          <li tabIndex={0}>
            <details>
              <summary>Electronics</summary>
              <ul className="p-2">
                <li>
                  <Link to="/phone-accessories">Phone Accessories</Link>
                </li>
                <li>
                  <Link to="/computer-accessories">Computer Accessories</Link>
                </li>
                <li>
                  <Link to="/photography">Photography</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link>About</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to="/login">
          <button
            type="button"
            class="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-3xl text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
          >
            Login
          </button>
        </Link>
        {/* <Link to="/login">
          <button
            type="button"
            class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Register
          </button>
        </Link> */}
        <Link to="/cart">
          <div className="relative">
            <FaCartShopping size={30} />
            <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-red-500 text-white rounded-full px-2 text-xs">
              {getTotalCartItems()}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
