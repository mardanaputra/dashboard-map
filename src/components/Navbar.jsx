// File: Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/mapstudio-logo.png";

// Navbar sekarang menerima searchTerm dan onSearch
function Navbar({ cartItemCount, searchTerm, onSearch }) {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="MAPStudio Logo" className="logo-img" />
        <span className="logo-map">MAP</span>
        <span className="logo-studio">Studio</span>
      </div>
      <nav className="nav">
        <Link to="/">Dashboard</Link>
        <Link to="/cart" className="cart-link">
          Cart
          {cartItemCount > 0 && (
            <span className="cart-badge">{cartItemCount}</span>
          )}
        </Link>
        <Link to="/checkout">Checkout</Link>
      </nav>
      <div className="search">
        <input 
          type="text" 
          placeholder="Search..." 
          value={searchTerm}
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
    </header>
  );
}

export default Navbar;