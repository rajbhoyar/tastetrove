import React, { useState } from "react";
import logo from "../Images/logo.png";
import "../index.css";

function Header() {
  const [loginBtn, setLoginBtn] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us </li>
          <li>Contact us</li>
          <li>Cart</li>
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
