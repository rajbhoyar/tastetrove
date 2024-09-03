import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setLoggedInUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

function LoginForm() {
  const [loginDetails, setLoginDetails] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !loginDetails.name ||
      !loginDetails.email ||
      !loginDetails.address ||
      !loginDetails.phone
    ) {
      alert("Please fill in all fields.");
      return;
    }
    dispatch(setLoggedInUser(loginDetails));
    navigate("/"); // Redirect to homepage or any other page after login
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg max-w-md w-full p-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 flex items-center border border-gray-300 rounded-lg p-3">
            <FaUser className="text-gray-400 mr-3" />
            <input
              type="text"
              name="name"
              value={loginDetails.name}
              onChange={handleInputChange}
              placeholder="Full Name"
              className="w-full p-3 border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4 flex items-center border border-gray-300 rounded-lg p-3">
            <FaEnvelope className="text-gray-400 mr-3" />
            <input
              type="email"
              name="email"
              value={loginDetails.email}
              onChange={handleInputChange}
              placeholder="Email Address"
              className="w-full p-3 border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4 flex items-center border border-gray-300 rounded-lg p-3">
            <FaMapMarkerAlt className="text-gray-400 mr-3" />
            <input
              type="text"
              name="address"
              value={loginDetails.address}
              onChange={handleInputChange}
              placeholder="Delivery Address"
              className="w-full p-3 border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-6 flex items-center border border-gray-300 rounded-lg p-3">
            <FaPhone className="text-gray-400 mr-3" />
            <input
              type="tel"
              name="phone"
              value={loginDetails.phone}
              onChange={handleInputChange}
              placeholder="Phone Number"
              className="w-full p-3 border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
