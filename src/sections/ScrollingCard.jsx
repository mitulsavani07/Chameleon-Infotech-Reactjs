import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cardData } from "../data/card";

gsap.registerPlugin(ScrollTrigger);

function ScrollingCard() {
  const cardsRef = useRef();
  const wrapperRef = useRef();
  const triggerRef = useRef();

  useGSAP(() => {
    // Delay GSAP init
    requestAnimationFrame(() => {
      const cards = gsap.utils.toArray(".card");
      const wrapper = wrapperRef.current;
      const container = cardsRef.current;

      const mm = gsap.matchMedia();

      mm.add("(min-width:1024px)", () => {
        gsap.set(cards, {
          x: (i) => -i * 350,
          rotate: 10,
          zIndex: (i) => cards.length - i,
          transformOrigin: "bottom bottom",
        });

        gsap.to(cards, {
          x: 0,
          rotate: 0,
          ease: "power1.out",
          scrollTrigger: {
            trigger: triggerRef.current,
            pin: true,
            scrub: true,
            start: "bottom top",
            end: `+=${wrapper.offsetWidth * 0.1}`,
          },
        });

        ScrollTrigger.create({
          trigger: wrapper,
          pin: true,
          end: "top -100%",
          animation: gsap.to(container, { xPercent: -50, ease: "none" }),
          scrub: true,
          invalidateOnRefresh: true,
        });

        cards.forEach((item) => {
          item.addEventListener("mouseenter", () =>
            gsap.to(item, { y: -10, duration: 0.3 })
          );
          item.addEventListener("mouseleave", () =>
            gsap.to(item, { y: 0, duration: 0.3 })
          );
        });
      });

      mm.add("(max-width:1023px)", () => {
        cards.forEach((item, i) => {
          gsap.from(item, {
            x: i % 2 === 0 ? -100 : 100,
            opacity: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: item,
              start: "top 80%",
            },
          });
        });
      });
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => ScrollTrigger.refresh(), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div ref={triggerRef}></div>
      <div ref={wrapperRef}
        className="overflow-hidden card-main flex flex-col justify-center items-center cardWrapper"
      >
        <div className="container my-10 md:mb-36 md:mt-20">
          <div className="max-w-[730px] w-full mx-auto text-center">
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold">
              Empowering Businesses with Smart, Scalable IT Solutions
            </h2>
            <p className="font-medium lg:text-lg capitalize mt-4">
              Your Trusted Partner for Technology That Drives Growth
            </p>
          </div>
          <div
            ref={cardsRef}
            className="flex mt-10 md:mt-16 flex-wrap lg:flex-nowrap cards md:-mx-3 lg:-mx-6"
          >
            {cardData.map((card) => (
              <div
                key={card.id}
                className="py-11 px-7 rounded-3xl my-3 md:m-3 lg:my-0 lg:mx-6 w-full md:w-[calc(50%-24px)] lg:w-auto lg:min-w-[360px] card"
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
    </>
  );
}

export default ScrollingCard;
