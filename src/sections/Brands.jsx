import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { brandsData } from '../data/brands'; // Import the brands data

gsap.registerPlugin(ScrollTrigger);

const Brands = () => {
  const marqueeRef = useRef(null);

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
          pin: false,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(max-width: 991px)", () => {
      gsap.to(marqueeRef.current, {
        xPercent: -100,
        ease: "linear",
        repeat: -1,
        duration: 10,
      });
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <div className="overflow-hidden container brands-imgs">
      <div className="flex items-center my-10 md:my-0 justify-between" ref={marqueeRef}>
        {brandsData.map((brand, index) => (
          <img
            key={index}
            src={brand.image}
            alt={brand.name}
            className="mx-4 brands-logo"
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
};

export default Brands;
