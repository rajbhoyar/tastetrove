import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../Images/logo.png";
import "../index.css";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import {
  HiHome,
  HiInformationCircle,
  HiMail,
  HiShoppingCart,
} from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";

function Header() {
  const [loginBtn, setLoginBtn] = useState("Login");
  const [location, setLocation] = useState("Bengaluru"); // Initial location
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  const handleLoginClick = () => {
    // Toggle login/logout state
    setLoginBtn((prev) => (prev === "Login" ? "Logout" : "Login"));
    // Here you can add logic for actual login/logout if needed
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
            {location}
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
            <button
              className="bg-blue-500 text-white py-1 px-4 rounded-md text-sm"
              onClick={handleLoginClick}
            >
              {loginBtn}
            </button>
            {loggedInUser && (
              <div className="ml-4 flex items-center">
                <AiOutlineUser className="w-8 h-8 text-gray-700" />
                <span className="ml-2 font-bold">{loggedInUser}</span>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
