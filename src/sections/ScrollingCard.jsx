import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cardData } from "../data/card";

gsap.registerPlugin(ScrollTrigger);

function ScrollingCard() {
  const cardsRef = useRef(null);
  const cardWrapperRef = useRef(null);
  const triggerRef = useRef(null);
  let scrollTrigger; // Declare scrollTrigger outside of useEffect

  useLayoutEffect(() => {
    const races = cardsRef.current;
    const cardWrapper = cardWrapperRef.current;
    const trigger = triggerRef.current;
    const card = gsap.utils.toArray('.card');
    const bannerSection = document.querySelector('#bannerSection');
    
    const mm = gsap.matchMedia();

    // const getScrollAmount = () => {
    //   let racesWidth = races.scrollWidth;
    //   return -(racesWidth - window.innerWidth);
    // };

    mm.add("(min-width:1024px)", () => {
      gsap.set(card, {
        // trigger: cardWrapper,
        xPercent: 0,
        x: (i) => -i * 350,
        rotate: 10,
        zIndex: (i) => card.length - i,
        transformOrigin: "bottom bottom",
        force3D: true,
      });

      gsap.to(card, {
        x: (i) => i * 0,
        rotate: 0,
        ease: "power1.out",
        scrollTrigger: {
          trigger: trigger,
          pin: true,
          scrub: 5,
          start: "bottom top",
          end: "+=" + (cardWrapper.offsetWidth * 0.1),
          onUpdate: (self) => {
            if (self.progress < 0.1) {
              gsap.set(card, {
                rotate: 10,
              });
            } else if (self.progress >= 0.1 && self.progress < 1) {
              gsap.set(card, {
                rotate: 0,
              });
            }
          }
        }
      });

      const tween = gsap.to(races, {
        transform: "translateX(-50%)",
        duration: 3,
        ease: "none",
      });

      scrollTrigger = ScrollTrigger.create({ // Assign to the outer variable
        trigger: ".cardWrapper",
        start: "top top",
        end: "top -100%",
        pin: true,
        animation: tween,
        scrub: 5,
        invalidateOnRefresh: true,
        markers: false,
      });

      const cardHoverAnimation = (item) => {
        item.addEventListener('mouseenter', () => {
          gsap.to(item, { y: -10, duration: 0.3, ease: 'power1.out' });
        });
        item.addEventListener('mouseleave', () => {
          gsap.to(item, { y: 0, duration: 0.3, ease: 'power1.out' });
        });
      };

      card.forEach(card => cardHoverAnimation(card));
    });

    mm.add("(max-width:1023px)", () => {
      const cards = gsap.utils.toArray('.card');
    
      for (let i = 0; i < cards.length; i += 2) {
        const leftCard = cards[i];
        const rightCard = cards[i + 1];
    
        if (leftCard) {
          gsap.from(leftCard, {
            x: -100,
            opacity: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: leftCard,
              start: "top 80%",
              toggleActions: "play reverse play reverse",
              scrub: false,
            }
          });
        }
    
        if (rightCard) {
          gsap.from(rightCard, {
            x: 100,
            opacity: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: rightCard,
              start: "top 80%",
              toggleActions: "play reverse play reverse",
              scrub: false,
            }
          });
        }
      }
    });    

    return () => {
      if (scrollTrigger) {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      }
    };
  }, []);

  return (
    <>
      <div ref={triggerRef}></div>
      <div ref={cardWrapperRef} className="overflow-hidden card-main flex flex-col justify-center items-center cardWrapper">
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
