import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import Logo from "/logo.svg"; // Make sure this path is correct

// ====== Nav Links Array ======
const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Get into touch", path: "/contact-us", isButton: true },
];

// ====== Animation Variants ======
const navItemVariants = {
  hidden: { 
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
};

const menuVariants = {
  hidden: { 
    x: "100%",
    transition: {
      delay: 0.2,
      type: "tween",
      stiffness: 400,
      damping: 40,
    },
  },
  visible: {
    x: 0,
    transition: {
      stiffness: 20,
      restDelta: 2,
      type: "tween",
    },
  },
  exit: {
    x: "100%",
    transition: {
      delay: 0.2,
      type: "tween",
      stiffness: 400,
      damping: 40,
    },
  },
};
const itemVariants = {
  visible: {
    y: 0,
    opacity: 1,
    transition: {
        y: { stiffness: 1000, velocity: -100 },
    },
  },
  hidden: {
    y: 50,
    opacity: 0,
    transition: {
        y: { stiffness: 1000 },
    },
  },
}

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  // Auto-close mobile menu on desktop resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, type: "spring" }}
      className="container py-5"
    >
      <header className="bg-white rounded-full px-5 py-2.5 md:p-2.5 flex items-center justify-between">
        {/* Logo */}
        <div className="logo md:pl-5">
          <NavLink to="/">
            <img src={Logo} alt="logo" className="w-[120px] lg:w-[160px]" />
          </NavLink>
        </div>

        {/* Hamburger (mobile only) */}
        <button
          className="hamburger-button inline-block md:hidden"
          onClick={toggleMenu}
        >
          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
            <path
              d="M3 12H21M3 6H21M9 18H21"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:grid grid-cols-[1fr_auto] items-center justify-between w-full pl-10">
          <nav className="flex uppercase justify-center font-medium space-x-8 lg:space-x-11">
            {navLinks
              .filter((link) => !link.isButton)
              .map((link) => (
                <NavLink key={link.path} to={link.path}>
                  {link.label}
                </NavLink>
              ))}
          </nav>
          {navLinks
            .filter((link) => link.isButton)
            .map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className="bg-primary text-white font-bold lg:text-lg px-9 py-4 md:py-4 lg:py-5 md:px-6 lg:px-9 rounded-full leading-[100%]"
              >
                {link.label}
              </NavLink>
            ))}
        </div>

        {/* Mobile Nav Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="md:hidden fixed top-0 bottom-0 right-0 left-0 bg-[#ffffffde] backdrop-blur-md z-50 p-10"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
            >
              <button className="menu-close float-right mb-10" onClick={closeMenu}>
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M18 6L6 18M6 6L18 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <nav className="clear-both flex flex-col text-lg font-medium uppercase items-start">
                <motion.ul variants={navItemVariants} className="space-y-10">
                  {navLinks
                    .filter((link) => !link.isButton)
                      .map((link) => (
                        <motion.li
                          key={link.path}
                          variants={itemVariants}
                        >
                          <NavLink to={link.path} onClick={closeMenu}>
                            {link.label}
                          </NavLink>
                        </motion.li>
                      ))}
                    {navLinks
                      .filter((link) => link.isButton)
                      .map((link) => (
                        <motion.li
                          key={link.path}
                          variants={itemVariants}
                        >
                          <NavLink
                            to={link.path}
                            onClick={closeMenu}
                            className="inline-block bg-primary text-white font-bold px-9 py-4 rounded-full"
                          >
                            {link.label}
                          </NavLink>
                        </motion.li>
                      ))}
                </motion.ul>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </motion.div>
  );
};

export default Navbar;
