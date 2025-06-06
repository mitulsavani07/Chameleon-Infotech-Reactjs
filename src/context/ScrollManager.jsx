// ScrollManager.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    // Refresh all ScrollTriggers after route change
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100); // Delay helps wait for new DOM
  }, [location.pathname]);

  return null;
}
