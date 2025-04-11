import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

function TextAnimation() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const split = new SplitType(textRef.current, {
      types: 'words',
    });

    gsap.from(split.words, {
      opacity: 0,
      y: 40,
      ease: 'power2.out',
      stagger: 0.2,
      duration: 1,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom', // starts when section enters viewport
        end: 'bottom top',   // ends when section exits viewport
        scrub: true,
        // pin: true,        // ❌ remove pinning so height stays natural
        // markers: true,
      },
    });

    return () => {
      split.revert();
    };
  }, []);

  const text = "Your Business Doesn't Fail Due To Technology—It Fails Without The Right IT Strategy, Security, And Scalable Solutions.";

  return (
    <div ref={sectionRef} className="my-10 md:my-36">
      <h2
        ref={textRef}
        className="reveal text-3xl md:text-5xl lg:text-6xl text-center font-bold text-[#0176BD] leading-tight max-w-5xl mx-auto"
      >
        {text}
      </h2>
    </div>
  );
}

export default TextAnimation;