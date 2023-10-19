import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Navbar = () => {
  return (
    <header style={{ width: "100%" }}>
      <nav className="header-part">
        <div className="spacing">
          <img  className="w-logo" src="https://www.logolynx.com/images/logolynx/2f/2f395cf87e6068d0d266f8fe8b2739b5.png" alt=""/>
          <h3 className="logo">WebGuard</h3>
        </div>
       
        <ul className="nav-items">
          <li>
            <Link to="/" className="list-items">
              Pricing
            </Link>{" "}
          </li>
          <li>
            <Link to="/products" className="list-items">
              Products
            </Link>{" "}
          </li>
          <li>
            <Link to="/about" className="list-items">
              Supports
            </Link>
          </li>
          <li>
            <Link to="/contact" className="list-items">
              Patners
            </Link>
          </li>
        </ul>
        <div className="spacing">
        <h5>
          <Link to="/cart" className="list-items">
            Login
          </Link>
        </h5>
        <button className="signup-btn">Sign up</button>
        </div>
        
      </nav>
    </header>
  );
};

export default Navbar;
