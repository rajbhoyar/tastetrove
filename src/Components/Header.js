import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Images/logo.png";
import "../index.css";
import useOnlineStatus from "../utils/useOnlineStatus";

function Header() {
  const [loginBtn, setLoginBtn] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between bg-pink-50">
      <div className="logo-container">
        <img className="w-56" src={logo} alt="logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4">
            {" "}
            <Link to={"/"}>Home</Link>
          </li>
          <li className="px-4">
            <Link to={"/about"}>About us</Link>
          </li>
          <li className="px-4">
            <Link to={"/contact"}>Contact us</Link>
          </li>
          <li className="px-4">Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              setLoginBtn(loginBtn === "Login" ? "Logout" : "Login");
            }}
          >
            {loginBtn}
          </button>
        </ul>
      </div>
    </div>
  );
}

export default Header;
