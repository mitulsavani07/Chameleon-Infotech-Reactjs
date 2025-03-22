import React from "react";
import Background from "/main-background.png"
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router";
import Home from "./pages/Home";
import About from "./pages/about";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Cursor from "./components/cursor";

function App() {
  useGSAP(() => {
    // gsap code here...
    gsap.from('.main-background', { 
      opacity: 0,
      duration: 1,
    }); // <-- automatically reverted
  },); // <-- scope is for selector text (optional)
  return (
    <>
      <Router>
        <Cursor/>
        <img src={Background} alt="Background" className="absolute top-0 inset-x-0 -z-10 main-background" />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
