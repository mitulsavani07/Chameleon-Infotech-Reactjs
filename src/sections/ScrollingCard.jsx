import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger

const cardData = [
  {
    id: 1,
    color: "#8D50ED",
    bgColor: "#F9F6FD",
    title: "Tailored IT Strategies for Your Business",
    description:
      "We thoroughly analyze your business needs and craft customized IT solutions that align with your goals, ensuring efficiency and scalability.",
  },
  {
    id: 2,
    color: "#C929CC",
    bgColor: "#FFF0FE",
    title: "Innovative Software Development",
    description:
      "We create cutting-edge software tailored to your specific needs, enhancing efficiency and productivity.",
  },
  {
    id: 3,
    color: "#F87979",
    bgColor: "#FFEFEE",
    title: "Cybersecurity & Compliance",
    description:
      "Our security solutions protect your data and ensure compliance with industry regulations.",
  },
  {
    id: 4,
    color: "#22C59C",
    bgColor: "#F1F9F7",
    title: "Cloud Computing Solutions",
    description:
      "Scalable and secure cloud solutions to optimize your IT infrastructure and operations.",
  },
  {
    id: 5,
    color: "#0176BD",
    bgColor: "#ECF5FE",
    title: "24/7 IT Support & Consulting",
    description:
      "Reliable IT support and strategic consulting to keep your business running smoothly.",
  },
];

function ScrollingCard() {
  const cardsRef = useRef(null);

  useEffect(() => {
    const races = cardsRef.current;
    const card = document.querySelector('.card')
    const bannerSection = document.querySelector('#bannerSection') 
    const getScrollAmount = () => {
      let racesWidth = races.scrollWidth;
      return -(racesWidth - window.innerWidth);
    };

    gsap.set(card, {
      trigger: bannerSection,
      xPercent: 100,
      x: (i) => -i * 350,
      rotate: 10,
      zIndex: (i) => card.length - i,
      transformOrigin: "bottom center",
      force3D: true,
  });

    const tween = gsap.to(races, {
      transform: "translateX(-100%)",
      duration: 3,
      ease: "none",
    });

    const scrollTrigger = ScrollTrigger.create({
      trigger: ".cardWrapper",
      start: "top top",
      end: "top -100%",
      // end: () => `+=${getScrollAmount() * -1}`,
      pin: true,
      animation: tween,
      scrub: 5,
      invalidateOnRefresh: true,
      markers: true,
    });

    return () => {
      scrollTrigger.kill(); // Cleanup on unmount
      tween.kill(); // Cleanup tween on unmount
    };
  }, []);

  return (
    <div className="overflow-hidden card-main h-dvh flex flex-col justify-center items-center cardWrapper">
      <div className="container my-36">
        <div className="max-w-[730px] w-full mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold">
            Empowering Businesses with Cutting-Edge IT Solutions
          </h2>
          <p className="font-medium lg:text-lg capitalize mt-4">
            We are the ideal technology partner for providing scalable solutions.
          </p>
        </div>
        <div
          ref={cardsRef}
          className="flex mt-16 flex-nowrap space-x-9 snap-x snap-proximity cards"
        >
          {cardData.map((card) => (
            <div
              key={card.id}
              className="py-11 px-7 rounded-3xl min-w-[320px] snap-center"
              style={{ backgroundColor: card.bgColor, color: card.color }}
            >
              <span className="w-9 h-9 flex items-center justify-center bg-white rounded-full font-bold">
                {card.id < 10 ? `0${card.id}` : card.id}
              </span>
              <h3 className="text-4xl my-7 font-heading leading-normal">
                {card.title}
              </h3>
              <p className="font-medium capitalize leading-[20px] lg:leading-[26px]">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ScrollingCard;