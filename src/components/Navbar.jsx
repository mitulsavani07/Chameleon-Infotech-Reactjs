import React from "react";
import Logo from "/logo.svg";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header>
        <div className="container">
          <div className="logo">
            <NavLink to="/">
              <img src={Logo} alt="logo" />
            </NavLink>
          </div>
          <div className="flex">
            <NavLink activeclassname="active" to="/" className="">
              Home
            </NavLink>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
