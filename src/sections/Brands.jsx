import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Brands = () => {
  const marqueeRef = useRef(null);
  const main = useRef();

  useEffect(() => {
    const boxes = gsap.utils.toArray('.brands-logo');
    boxes.forEach((box) => {
      gsap.to(box, {
        x: -150,
        scrollTrigger: {
          trigger: box,
          start: 'bottom bottom',
          end: 'top 20%',
          scrub: true,
          pin: false
        },
      });
    });
  }, []);

  useEffect(() => {
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
        <img src="/brands/fulfillagent.png" alt="Fulfillagent" className="mx-4 brands-logo" />
        <img src="/brands/mugbee.png" alt="mugbee" className="mx-4 brands-logo" />
        <img src="/brands/everprint.png" alt="Everprint" className="mx-4 brands-logo" />
        <img src="/brands/pawzcraft.png" alt="pawzcraft" className="mx-4 brands-logo" />
        <img src="/brands/unlmitd.png" alt="unlmitd" className="mx-4 brands-logo" />
      </div>
    </div>
  );
};

export default Brands;