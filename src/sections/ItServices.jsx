import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { services } from "../data/services";

gsap.registerPlugin(ScrollTrigger);

const ServiceCard = ({
  title,
  description,
  listitem1,
  listitem2,
  listitem3,
  image,
  color,
  tools,
  bgcolor,
}) => (
  <div
    className={`bg-[${bgcolor}] px-4 py-4 md:py-8 md:px-8 lg:px-20 lg:py-14 rounded-3xl flex items-center flex-wrap servicecards`}
  >
    <div className="w-full md:w-1/3 md:order-1">
      <img
        src={`/it-services/${image}`}
        alt={title}
        className="max-w-60 sm:max-w-80 mx-auto w-full"
      />
    </div>
    <div className="w-full md:w-2/3 md:pr-5 lg:pr-20 pt-10 md:pt-0 text-center md:text-left">
      <h3
        className={`text-[${color}] font-heading text-2xl lg:text-4xl mb-4 lg:mb-10`}
      >
        {title}
      </h3>
      <p className="font-medium text-sm md:text-base lg:text-lg capitalize">
        {description}
      </p>
      <ul className="text-xs md:text-sm lg:text-base space-y-3 lg:ml-7 my-5 lg:my-9">
        <li>{listitem1}</li>
        <li>{listitem2}</li>
        <li>{listitem3}</li>
      </ul>
      <ul className="flex -mx-1 md:-mx-2 justify-center md:justify-start">
        {tools.map((tool, index) => (
          <li key={index} className="p-1 md:p-2">
            <span
              href="#"
              className={`bg-[${color}] drop-shadow-lg w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 flex items-center justify-center rounded-full`}
            >
              <img
                src={`/it-services/${tool.src}`}
                alt={tool.alt}
                className="w-6 h-6 lg:w-8 lg:h-8 mix-blend-luminosity"
              />
            </span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

function ItServices() {
  useGSAP(() => {
    const mm = gsap.matchMedia();
    // Pin the title
    mm.add("(min-width: 768px)", () => {
      ScrollTrigger.create({
        trigger: ".overlap-text",
        start: "top top",
        endTrigger: ".servicecontainer",
        end: "bottom bottom",
        pin: true,
        pinSpacing: false,
        scrub: false,
        markers: false,
      });
    });

    // Animate each service card
    gsap.utils.toArray(".servicecard-wrapper").forEach((card) => {
      gsap.fromTo(
        card,
        {
          scale: 0.8,
          rotate: 4,
          opacity: 0.8,
        },
        {
          scale: 1,
          rotate: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: card,
            start: "top center",
            end: "center center",
            scrub: 2,
            markers: false,
          },
          ease: "power2.out",
        }
      );
    });
  }, []);
  return (
    <div className="container my-10 md:my-36 servicecontainer">
      <div className="md:sticky top-0 overlap-text">
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold leading-tight max-w-[700px] w-full mx-auto text-center">
          Innovative IT Services Tailored to Grow Your Business
        </h2>
        <h4 className="text-[12vh] md:text-[20vh] lg:text-[30vh] text-center font-heading text-[#F3F8FD] leading-tight">
          ABOUT <br /> SERVICE
        </h4>
      </div>
      <div className="max-w-[1300px] mx-auto space-y-10 md:space-y-40 lg:space-y-50 servicewrapper relative z-40">
        {services.map((service, index) => (
          <div key={index} className="servicecard-wrapper">
            <ServiceCard {...service} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItServices;
