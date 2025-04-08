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
import Footer from "./components/Footer";
import Newsletter from "./sections/Newsletter";
 
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App() {
  const main = useRef(); // Fixed typo
  const smoother = useRef();

  useGSAP(() => {
    smoother.current = ScrollSmoother.create({
      smooth: 1,
      effects: false,
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
        </div>
      </div>
    </>
  );
}

export default App;