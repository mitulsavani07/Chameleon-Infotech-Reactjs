import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    ScrollTrigger.refresh();
  }, [location.pathname]);

  return null;
}
