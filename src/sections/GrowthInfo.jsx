import React, { useRef, useEffect } from "react";
import CountUp from "react-countup";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { label: "Years Of Experience", value: 10, suffix: "+" },
  { label: "Happy Clients", value: 200, suffix: "+" },
  { label: "Completed Projects", value: 2000, suffix: "+" },
  { label: "Since", value: 2014, static: true },
];

function GrowthInfo() {
  const sectionRef = useRef(null);
  const countUpRefs = useRef([]);

  useEffect(() => {
    // Fade in animation
    gsap.fromTo(
      sectionRef.current,
      { autoAlpha: 0, y: 50 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    // Start count-ups when section enters
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 80%",
      once: true,
      onEnter: () => {
        countUpRefs.current.forEach((start) => start?.());
      },
    });
  }, []);

  return (
    <div ref={sectionRef} className="container my-14 md:my-36">
      <div className="flex flex-wrap max-w-[1050px] mx-auto text-primary font-bold text-center">
        {stats.map((stat, index) => (
          <div key={index} className="w-1/2 md:w-1/4 mb-10 sm:mb-0">
            <h4 className="text-3xl lg:text-[44px]">
              {stat.static ? (
                stat.value
              ) : (
                <CountUp end={stat.value} duration={2} suffix={stat.suffix}>
                  {({ countUpRef, start }) => {
                    countUpRefs.current[index] = start;
                    return <span ref={countUpRef} />;
                  }}
                </CountUp>
              )}
            </h4>
            <p className="text-base lg:text-lg mt-3">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GrowthInfo;
