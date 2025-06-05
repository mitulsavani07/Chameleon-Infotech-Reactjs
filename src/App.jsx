import React, { useEffect, useRef, useState } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { LenisContext } from "./context/LenisContext";

// Pages & Components
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Article from "./pages/Article";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Newsletter from "./sections/Newsletter";
import Background from "/main-background.png";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";
import TermsConditions from "./pages/TermsConditions";
// import ServicesBanner from "./sections/ServicesBanner";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const lenisRef = useRef(null);
  const [, setRaf] = useState(null); // just to force rerender

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
      smoothTouch: false,
      direction: "vertical",
    });

    lenisRef.current = lenis;
    setRaf({}); // trigger re-render once Lenis is ready

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    lenis.on("scroll", ScrollTrigger.update);

    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <LenisContext.Provider value={lenisRef.current}>
        <div id="app-wrapper">
          <Router>
            <ScrollToTop />
            <img
              src={Background}
              alt="Background"
              className="absolute top-0 inset-x-0 -z-10 main-background min-h-[450px]"
            />
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/terms-conditions" element={<TermsConditions />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<Article />} />
            </Routes>
            <Newsletter />
            <Footer />
          </Router>
        </div>
      </LenisContext.Provider>
    </>
  );
}

export default App;
