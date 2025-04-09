import React from "react";
import { motion } from "motion/react"

const logos = [
  { src: "/brands/fulfillagent.png", alt: "Fulfillagent" },
  { src: "/brands/mugbee.png", alt: "mugbee" },
  { src: "/brands/everprint.png", alt: "Everprint" },
  { src: "/brands/pawzcraft.png", alt: "pawzcraft" },
  { src: "/brands/unlmitd.png", alt: "unlmitd" },
];

const Brands = () => {
  return (
    <div className="overflow-hidden container- brands-imgs py-10 md:py-16">
      <motion.div
        className="flex gap-10 whitespace-nowrap"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: 40,
          ease: "linear",
        }}
      >
        {/* Duplicate logos for seamless infinite loop */}
        {[...logos, ...logos, ...logos, ...logos, ...logos].map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            className="brands-logo h-16 md:h-20 mx-4 object-contain"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Brands;
