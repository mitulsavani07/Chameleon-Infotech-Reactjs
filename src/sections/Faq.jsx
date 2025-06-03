import React, { useRef, useState, useEffect } from "react";
import { faq } from "../data/faq";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Faq() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const [openIndex, setOpenIndex] = useState(0); // ✅ First item open by default

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate heading
      gsap.from(headingRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Animate each FAQ item
      gsap.utils.toArray(".faq-item").forEach((item, i) => {
        gsap.from(item, {
          opacity: 0,
          y: 40,
          duration: 0.8,
          delay: i * 0.1,
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div ref={sectionRef} className="container my-14 md:my-36">
      <div className="max-w-[950px] mx-auto">
        <h2
          ref={headingRef}
          className="text-3xl md:text-4xl xl:text-5xl font-bold text-center max-w-[440px] mx-auto leading-tight mb-6 md:mb-10 lg:mb-20"
        >
          Got Questions? We've Got Answers!
        </h2>

        {faq.map((data, index) => {
          const isOpen = openIndex === index;
          const contentRef = useRef(null);

          useEffect(() => {
            if (isOpen && contentRef.current) {
              contentRef.current.style.height = `${contentRef.current.scrollHeight}px`;
            } else if (contentRef.current) {
              contentRef.current.style.height = "0px";
            }
          }, [isOpen]);

          return (
            <div
              className="faq-item font-medium py-5 md:py-7 lg:py-9 border-b overflow-hidden duration-300"
              key={data.id}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="faq-question flex justify-between items-center w-full cursor-pointer duration-300"
              >
                <h4 className="text-base leading-tight md:text-xl lg:text-2xl w-[calc(100%-32px)] md:w-[calc(100%-46px)] pr-2 text-left">
                  {data.question}
                </h4>
                <span
                  className={`icon bg-primary w-8 h-8 md:w-9 md:h-9 lg:w-11.5 lg:h-11.5 flex items-center relative justify-center text-white rounded-md before:w-3.5 md:before:w-5.5 before:h-0.5 before:bg-white before:absolute before:top-1/2 before:left-1/2 before:-translate-1/2 after:w-3.5 md:after:w-5.5 after:h-0.5 after:bg-white after:absolute after:top-1/2 after:left-1/2 after:-translate-1/2 ${
                    openIndex === index ? " " : "after:rotate-90"
                  } after:duration-300`}
                ></span>
              </button>

              <div
                ref={contentRef}
                className="faq-answer overflow-hidden transition-all duration-500 ease-in-out"
                style={{
                  height: isOpen
                    ? `${contentRef.current?.scrollHeight}px`
                    : "0px",
                  opacity: isOpen ? 1 : 0,
                }}
              >
                <p className="text-sm lg:text-base mt-4">{data.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Faq;
