import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Brands = () => {
  const marqueeRef = useRef(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(max-width: 991px)", () => {
      gsap.to(marqueeRef.current, {
        xPercent: -100, // Move it to the left completely
        ease: "linear",
        repeat: -1,
        duration: 10, // Adjust speed
      });
    });

    return () => mm.revert(); // Clean up animation on unmount
  }, []);

  return (
    <div className="overflow-hidden container brands-imgs">
      <div className="flex items-center my-10 md:my-16 justify-between" ref={marqueeRef}>
        <img src="/brands/fulfillagent.png" alt="Fulfillagent" className="mx-4" />
        <img src="/brands/mugbee.png" alt="mugbee" className="mx-4" />
        <img src="/brands/everprint.png" alt="Everprint" className="mx-4" />
        <img src="/brands/pawzcraft.png" alt="pawzcraft" className="mx-4" />
        <img src="/brands/unlmitd.png" alt="unlmitd" className="mx-4" />
      </div>
    </div>
  );
};

export default Brands;