import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cardData } from "../data/card";

gsap.registerPlugin(ScrollTrigger);

function ScrollingCard() {
  const cardsRef = useRef(null);
  const outerRef = useRef(null);
  const cardWrapperRef = useRef(null);
  const triggerRef = useRef(null);

  useGSAP(() => {
    requestAnimationFrame(() => {
      const races = cardsRef.current;
      const cardWrapper = cardWrapperRef.current;
      const trigger = triggerRef.current;
      const card = gsap.utils.toArray(".card");

      const mm = gsap.matchMedia();

      mm.add("(min-width:1024px)", () => {
        gsap.set(card, {
          xPercent: 0,
          x: (i) => -i * 350,
          rotate: 10,
          zIndex: (i) => card.length - i,
          transformOrigin: "bottom bottom",
          force3D: true,
        });

        gsap.to(card, {
          x: 0,
          rotate: 0,
          ease: "power1.out",
          scrollTrigger: {
            trigger,
            pin: true,
            scrub: 5,
            start: "bottom top",
            end: "+=" + cardWrapper.offsetWidth * 0.1,
            onUpdate: (self) => {
              gsap.set(card, {
                rotate: self.progress < 0.1 ? 10 : 0,
              });
            },
          },
        });

        ScrollTrigger.create({
          trigger: outerRef.current,
          pin: true,
          end: "top -100%",
          animation: gsap.to(races, {
            xPercent: -50,
            duration: 3,
            ease: "none",
          }),
          scrub: 5,
          invalidateOnRefresh: true,
        });

        card.forEach((item) => {
          item.addEventListener("mouseenter", () => {
            gsap.to(item, { y: -10, duration: 0.3, ease: "power1.out" });
          });
          item.addEventListener("mouseleave", () => {
            gsap.to(item, { y: 0, duration: 0.3, ease: "power1.out" });
          });
        });
      });

      mm.add("(max-width:1023px)", () => {
        for (let i = 0; i < card.length; i += 2) {
          const left = card[i];
          const right = card[i + 1];

          if (left) {
            gsap.from(left, {
              x: -100,
              opacity: 0,
              duration: 0.8,
              scrollTrigger: {
                trigger: left,
                start: "top 80%",
                toggleActions: "play none none reverse",
              },
            });
          }

          if (right) {
            gsap.from(right, {
              x: 100,
              opacity: 0,
              duration: 0.8,
              scrollTrigger: {
                trigger: right,
                start: "top 80%",
                toggleActions: "play none none reverse",
              },
            });
          }
        }
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  // 👇 Ensure ScrollTrigger refreshes after render
  useEffect(() => {
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 300);
  }, []);

  return (
    <>
      <div ref={triggerRef}></div>
      <div
        ref={cardWrapperRef}
        className="overflow-hidden card-main flex flex-col justify-center items-center cardWrapper"
      >
        <div className="container my-10 md:mb-36 md:mt-20">
          <div ref={outerRef} className="scroll-section">
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
      </div>
    </>
  );
}

export default ScrollingCard;
