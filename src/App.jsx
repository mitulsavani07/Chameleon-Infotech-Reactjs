import React, { useRef } from "react";
import Background from "/main-background.png";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router";
import Home from "./pages/Home";
import About from "./pages/about";
import Footer from "./components/Footer";
import Newsletter from "./sections/Newsletter";

function App() {

  return (
    <>
      <Router>
        {/* <Cursor /> */}
        <img
          src={Background}
          alt="Backg round"
          className="absolute top-0 inset-x-0 -z-10 main-background min-h-[450px] "
        />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Newsletter/>
        <Footer/>
      </Router>
    </>
  );
}

export default App;