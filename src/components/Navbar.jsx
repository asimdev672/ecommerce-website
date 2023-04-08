import React from "react";
import { NavLink } from "react-router-dom";
import {FiShoppingCart} from 'react-icons/fi'
import { useSelector } from "react-redux";

const Navbar = () => {
  const {cartData}=useSelector((state)=>state.cart)
  return (
    <>
    <div className="Navbar--main">
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid ">
          <NavLink className="navbar-brand" to="/">
          <h1 className="fst-italic fw-bold" >M.Asim</h1>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/store">
                 <FiShoppingCart className="cart_tralley"/>
                 <span className="cart_totall">{cartData.length}</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </div>
    </>
  );
};

export default Navbar;
