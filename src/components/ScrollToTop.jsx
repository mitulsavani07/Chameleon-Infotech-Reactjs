import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLenis } from "../context/LenisContext";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, {
        offset: 0,
        immediate: false,
      });
    }
  }, [pathname, lenis]);

  return null;
};

export default ScrollToTop;
