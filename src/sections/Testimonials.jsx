import React, { useRef } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { testimonialsData } from "../data/testimonials";

const TestimonialCard = ({ name, feedback, image, bgColor, textColor }) => (
  
  <div className={`flex flex-wrap bg-[${bgColor}] text-[${textColor}] rounded-3xl p-5 testimonial-wrapper text-sm xl:text-base`}>
    <div className='w-full sm:w-[calc(100%-240px)] sm:pr-11 pb-5 sm:pb-0'>
      <div className='flex flex-col justify-between items-start h-full capitalize font-bold'>
        <span className='py-1.5 px-5 bg-white rounded-full'>{name}</span>
        <p className='pl-2 pt-5'>{feedback}</p>
      </div>
    </div>
    <div className='sm:w-60 w-full'>
      <img src={image} alt={name} className='rounded-[20px]' />
    </div>
  </div>
);



const Testimonials = () => {
  const testimonialtitleRef = useRef(null);
  const containerRef = useRef(null);
  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width:768px)", () => {
      // Pin the title
      ScrollTrigger.create({
        trigger: testimonialtitleRef.current,
        start: "top top",
        endTrigger: containerRef.current,
        end: "bottom 30%",
        pin: true,
        pinSpacing: false,
        scrub: false,
        markers: false,
      });
    });
  
    // Animate each service card
    gsap.utils.toArray(".testimonial-wrapper").forEach((card) => {
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
            start: "top 60%",
            end: "center center",
            scrub: 1,
            markers: false,
          },
          ease: "power2.out",
        }
      );
    });
  }, []);  
  return (
    <div ref={containerRef} className='container my-10 md:my-36'>
      <div className='flex flex-wrap lg:flex-nowrap'>
        <div ref={testimonialtitleRef} className='w-full lg:w-4/12 sticky top-12 mb-10 md:mb-0'>
          <h2 className='text-4xl xl:text-5xl font-bold leading-tight'>Honest Feedback From Valued People</h2>
          <p className='text-sm xl:text-base font-medium mt-4 capitalize'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
        </div>
        <div className='w-full lg:w-8/12 lg:pl-10 xl:pl-28 2xl:pl-36 space-y-9'>
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;