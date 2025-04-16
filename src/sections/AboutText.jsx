import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger)

const AboutText = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null)

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

  return (
    <div ref={sectionRef} className='container my-10 md:my-16'>
      <h3
        className='font-bold text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-center leading-snug tracking-tight reveal'
        ref={textRef}
      >
        At Chameleon Infotech, We Provide Innovative IT Solutions That Help
        Businesses Adapt, <br /> Grow, And Thrive. Like A Chameleon, We Tailor Our
        Strategies To Your Unique Needs, <br /> Ensuring Seamless, Scalable, And
        Secure Digital Transformation
      </h3>
    </div>
  )
}

export default AboutText