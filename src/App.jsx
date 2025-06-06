import React, { useEffect, useRef, useState } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

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
import PrivacyPolicy from "./pages/PrivacyPolicy";
// import ServicesBanner from "./sections/ServicesBanner";

gsap.registerPlugin(ScrollTrigger);

function AppWrapper() {
  const lenisRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
      smoothTouch: false,
      direction: "vertical",
    });

    lenisRef.current = lenis;

    // Sync Lenis with ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    // RAF loop
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Refresh ScrollTrigger on route change
  useEffect(() => {
    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 50);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <>
      <Router>
        <AppWrapper />
        <div id="app-wrapper">
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
        </div>
      </Router>
    </>
  );
}

export default App;
