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
      types: 'lines',
      lineClass: 'lineChild',
    });

    const lines = gsap.utils.toArray('.lineChild');
    
    // Create a timeline for all animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: 0.5,
        // markers: true, // for debugging
      }
    });

    // Animate each line in sequence
    lines.forEach((line, i) => {
      // Set initial state
      gsap.set(line, {
        opacity: 0,
        y: 50
      });

      // Add to timeline
      tl.to(line, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: 'power2.out'
      }, i * 0.1) // slight stagger
      .to(line, {
        opacity: 0,
        y: -30,
        duration: 0.5,
        ease: 'power2.in'
      }, i * 0.1 + 0.5); // fade out after a delay
    });

    return () => {
      split.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const text = `Your Business Doesn't Fail Due To Technology—It Fails Without The Right IT Strategy, Security, And Scalable Solutions.`;

  return (
    <div ref={sectionRef} className="my-10 md:my-36 px-4">
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