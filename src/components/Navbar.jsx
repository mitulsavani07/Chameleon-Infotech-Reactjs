import React, { useEffect, useRef, useState } from "react";
import Logo from "/logo.svg";
import { Link, NavLink } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
  const menuRef = useRef(null);
  const tl = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Detect screen size on resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useGSAP(() => {
    // Check if the screen is mobile
    if (window.innerWidth >= 768) return;

    tl.current = gsap.timeline({ paused: true });

    tl.current.to(menuRef.current, {
      right: 0,
      duration: 0.5,
    });

    tl.current.from(
      ".navmenu a",
      {
        y: 150,
        duration: 0.6,
        stagger: 0.2,
        opacity: 0,
      },
      "-=0.3"
    );

    tl.current.from(".menu-close", { opacity: 0 });
  }, []);

  const openMenu = () => {
    if (isMobile) tl.current.play();
  };

  const closeMenu = () => {
    if (isMobile) tl.current.reverse();
  };

  return (
    <div className="container py-5 sticky z-50">
      <header className="bg-white rounded-full px-5 py-2.5 md:p-2.5 flex items-center justify-between overflow-hidden">
        <div className="logo md:pl-5">
          <NavLink to="/">
            <img src={Logo} alt="logo" className="w-[120px] lg:w-[160px]" />
          </NavLink>
        </div>
        <button
          className="hamburger-button inline-block md:hidden"
          onClick={openMenu}
        >
          <svg
            className="w-7 h-7"
            width="100%"
            height="100%"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 12H21M3 6H21M9 18H21"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <div
          ref={menuRef}
          className="navmenu md:grid grid-cols-[1fr_auto] items-center md:w-[calc(100%-120px)] lg:w-[calc(100%-160px)] fixed bg-[#ffffffa1] backdrop-blur-md top-0 bottom-0 w-full h-full z-10 -right-full p-10 text-xl md:bg-transparent md:text-base md:static md:h-auto md:p-0"
        >
          <button
            className="menu-close float-right mb-10 md:hidden"
            onClick={closeMenu}
          >
            <svg
              className="w-8 h-8"
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <nav className="clear-both flex-col md:flex-row flex uppercase font-medium space-y-10 md:space-y-0 md:space-x-8 lg:space-x-11 justify-center">
            <NavLink
              to="/"
              onClick={() => {
                if (setIsMobile) {
                  closeMenu(); // Close the menu after clicking
                }
              }}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => {
                if (setIsMobile) {
                  closeMenu(); // Close the menu after clicking
                }
              }}
            >
              About
            </NavLink>
            <NavLink
              to="/services"
              onClick={() => {
                if (setIsMobile) {
                  closeMenu(); // Close the menu after clicking
                }
              }}
            >
              Services
            </NavLink>
          </nav>
          <NavLink
            to="/contact-us"
            className="bg-primary text-white font-bold lg:text-lg px-9 py-4 md:py-4 lg:py-5 md:px-6 lg:px-9 rounded-full inline-block mt-10 md:mt-0 leading-[100%]"
          >
            Get into touch
          </NavLink>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
