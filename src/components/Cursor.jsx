import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Cursor = () => {
  const cursorRef = useRef(null);

  useGSAP(() => {
    const moveCursor = (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
      });
    };

    const links = document.querySelectorAll("a");

    links.forEach((link) => {
      link.addEventListener("mousemove", () => {
        gsap.to(cursorRef.current, {
          scale: 4,
          backgroundColor: "#0176bd70",
        });
      });

      link.addEventListener("mouseleave", () => {
        gsap.to(cursorRef.current, {
          scale: 1,
          backgroundColor: "#0176BD",
        });
      });
    });

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      links.forEach((link) => {
        link.removeEventListener("mousemove", () => {});
        link.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed w-5 h-5 bg-primary rounded-full pointer-events-none z-50"
    ></div>
  );
};

export default Cursor;