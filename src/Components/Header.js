// src/components/Header.js
import React from "react";
import { Link } from "react-router-dom";
import logo from "../Images/logo.png";
import "../index.css";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../utils/userSlice";
import {
  HiHome,
  HiInformationCircle,
  HiMail,
  HiShoppingCart,
} from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";

function Header() {
  const dispatch = useDispatch();
  const loggedInUser = useSelector((store) => store.user.loggedInUser);
  const cartItems = useSelector((store) => store.cart.items);

  const onlineStatus = useOnlineStatus();

  const handleLogoutClick = () => {
    dispatch(logoutUser());
  };

  // Calculate total quantity of items in the cart
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <header className="bg-white border-b-2 shadow-md h-20">
      <div className="container mx-auto flex justify-between items-center h-full p-2">
        {/* Logo Section with Location String */}
        <div className="flex items-center">
          <Link to="/">
            <img className="h-12" src={logo} alt="logo" />
          </Link>
          <Link
            to="/location"
            className="ml-2 text-blue-500 hover:text-blue-700 hidden md:block"
          >
            Bengaluru
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center space-x-4">
          <ul className="flex flex-row space-x-4 items-center">
            <li className="flex items-center text-gray-700">
              <span>Online Status: {onlineStatus ? "🟢" : "🔴"}</span>
            </li>
            <li className="flex items-center text-gray-700 hover:text-gray-900">
              <Link to="/" className="flex items-center">
                <HiHome className="mr-2" />
                Home
              </Link>
            </li>
            <li className="flex items-center text-gray-700 hover:text-gray-900">
              <Link to="/about" className="flex items-center">
                <HiInformationCircle className="mr-2" />
                About Us
              </Link>
            </li>
            <li className="flex items-center text-gray-700 hover:text-gray-900">
              <Link to="/contact" className="flex items-center">
                <HiMail className="mr-2" />
                Contact Us
              </Link>
            </li>
            <li className="flex items-center text-gray-700 hover:text-gray-900">
              <Link to="/cart" className="flex items-center">
                <HiShoppingCart className="mr-2" />
                Cart ({totalQuantity})
              </Link>
            </li>
          </ul>

          {/* Login/Logout Button and User Avatar */}
          <div className="flex items-center">
            {!loggedInUser ? (
              <Link
                to="/login"
                className="bg-blue-500 text-white py-1 px-4 rounded-md text-sm"
              >
                Login
              </Link>
            ) : (
              <div className="ml-4 flex items-center">
                <Link to="/profile" className="flex items-center">
                  <AiOutlineUser className="w-8 h-8 text-gray-700" />
                  <span className="ml-2 font-bold">{loggedInUser}</span>
                </Link>
                <Link to="/" className="flex items-center">
                  <button
                    className="ml-4 bg-red-500 text-white py-1 px-4 rounded-md text-sm"
                    onClick={handleLogoutClick}
                  >
                    Logout
                  </button>
                </Link>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
