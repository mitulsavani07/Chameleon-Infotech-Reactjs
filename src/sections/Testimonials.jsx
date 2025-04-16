import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { testimonialsData } from '../data/testimonials';

gsap.registerPlugin(ScrollTrigger);

const TestimonialCard = ({ name, feedback, image, bgColor, textColor }) => (
  <div
    className="testimonial-wrapper flex flex-wrap rounded-3xl p-5 text-sm xl:text-base"
    style={{ backgroundColor: bgColor, color: textColor }}
  >
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
  const containerRef = useRef(null);

  useEffect(() => {
    const cards = gsap.utils.toArray('.testimonial-wrapper');

    cards.forEach((card) => {
      gsap.fromTo(
        card,
        {
          rotate: 4,
          scale: 0.8,
          opacity: 0,
        },
        {
          rotate: 0,
          scale: 1,
          opacity: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 60%',
            end: "center center",
            scrub: 1,
            // toggleActions: 'play reverse play reverse',
          },
        }
      );
    });

    // Optional cleanup (good practice)
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className='container my-10 md:my-36' ref={containerRef}>
      <div className='flex flex-wrap lg:flex-nowrap'>
        <div className='w-full lg:w-4/12 mb-10 md:mb-0'>
          <div className='sticky top-12'>
            <h2 className='text-4xl xl:text-5xl font-bold leading-tight'>
              Honest Feedback From Valued People
            </h2>
            <p className='text-sm xl:text-base font-medium mt-4 capitalize'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>
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