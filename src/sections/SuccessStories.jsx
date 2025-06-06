import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { successStories } from "../data/successStories";

gsap.registerPlugin(ScrollTrigger);

function SuccessStories() {
  const containerRef = useRef(null);
  const horizontalRef = useRef(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const sections = gsap.utils.toArray(".success-card");

      const totalScroll = horizontalRef.current.scrollWidth;

      const tl = gsap.to(sections, {
        xPercent: -80 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 5%",
          end: () => "+=" + totalScroll,
          scrub: true,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      return () => {
        tl.kill();
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    });

    return () => mm.revert(); // cleanup
  }, []);

  return (
    <div ref={containerRef} className="relative overflow-hidden w-full">
      <div className="container">
        <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold leading-tight capitalize max-w-[500px]">
          A Glimpse of Our Success Stories
        </h2>
        <p className="text-base md:text-lg capitalize mt-2">
          We are the ideal technology partner for providing scalable
        </p>

        {/* Cards wrapper */}
        <div
          ref={horizontalRef}
          className={`
          mt-10 md:mt-20 mb-20
          flex gap-6
          md:flex-nowrap flex-nowrap
          overflow-x-auto md:overflow-visible
          snap-x snap-mandatory
          scroll-smooth -mr-4 md:mr-0
        `}
        >
          {successStories.map((data) => (
            <div
              key={data.id}
              className="success-card snap-start flex-shrink-0 w-[80%] sm:w-[75%] md:min-w-[520px] md:w-[520px] transition-opacity duration-300"
            >
              <img
                src={data.image}
                alt={data.title}
                className="w-full object-cover transition-all duration-500 rounded-[20px]"
              />
              <h5 className="font-bold text-lg mt-6">{data.title}</h5>
              <ul className="capitalize text-sm font-medium gap-1 md:gap-3 flex flex-wrap mt-5">
                {data.features.map((feature, index) => (
                  <li
                    key={index}
                    className="py-1 border rounded-full inline-flex px-4 text-xs md:text-sm"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SuccessStories;
