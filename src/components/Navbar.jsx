import React from "react";
import Logo from "/logo.svg";
import { Link, NavLink } from "react-router-dom";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Navbar = () => {
  useGSAP(() => {
    // gsap code here...
    gsap.from('header *', { 
      y: 50,
      opacity: 0,
      duration: 0.6,
      stagger:0.2, 
      delay: 0.2
    }); // <-- automatically reverted
  },); // <-- scope is for selector text (optional)
  return (
    <>
      <div className="container py-5">
        <header className="bg-white rounded-full p-2.5 flex items-center justify-between overflow-hidden">
          <div className="logo pl-5">
            <NavLink to="/">
              <img src={Logo} alt="logo" className="w-[160px]" />
            </NavLink>
          </div>
          <nav className="flex uppercase font-medium text-base space-x-11">
            <NavLink activeclassname="active" to="/" className="">
              Home
            </NavLink>
            <NavLink activeclassname="active" to="/about" className="">
              About
            </NavLink>
            <NavLink activeclassname="active" to="/services" className="">
              Services
            </NavLink>
          </nav>
          <NavLink activeclassname="active" to="/contact-us" className="bg-primary text-white font-bold text-lg py-5 px-9 rounded-full">
            Get into touch
          </NavLink>
        </header>
      </div>
    </>
  );
};

export default Navbar;
