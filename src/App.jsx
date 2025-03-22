import React, { useRef } from "react";
import Background from "/main-background.png";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router";
import Home from "./pages/Home";
import About from "./pages/about";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Cursor from "./components/cursor";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother"; // Ensure correct import
 
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App() {
  const main = useRef(); // Fixed typo
  const smoother = useRef();

  useGSAP(() => {
    smoother.current = ScrollSmoother.create({
      smooth: 2,
      effects: true,
    });

    gsap.from(".main-background", {
      opacity: 0,
      duration: 1,
    });
  });

  return (
    <>
      <div id="smooth-wrapper" ref={main}>
        <div id="smooth-content">
          <Router>
            <Cursor />
            <img
              src={Background}
              alt="Background"
              className="absolute top-0 inset-x-0 -z-10 main-background"
            />
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </Router>
        </div>
      </div>
    </>
  );
}

export default App;