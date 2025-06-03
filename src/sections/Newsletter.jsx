import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLocation } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const Newsletter = () => {
  const newsletterRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const formRef = useRef(null);
  const location = useLocation(); // 👈 watch route changes

  useEffect(() => {
    const ctx = gsap.context(() => {
      const elements = [titleRef.current, descriptionRef.current, formRef.current];

      elements.forEach((element, index) => {
        gsap.fromTo(
          element,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: index * 0.2,
            scrollTrigger: {
              trigger: newsletterRef.current,
              // start: 'top 80%',
              // toggleActions: 'play reverse play reverse',
            },
          }
        );
      });
    }, newsletterRef);

    return () => {
      ctx.revert();
      ScrollTrigger.refresh(); // 👈 reinitialize triggers after unmount
    };
  }, [location.pathname]); // 👈 run when path changes

  return (
    <div className='bg-[#ECF5FE] py-16 md:py-32' ref={newsletterRef}>
      <div className='container max-w-[730px]'>
        <h2 ref={titleRef} className='text-2xl md:text-3xl lg:text-5xl leading-tight font-bold text-center'>
          Let’s Connect & Build Something Great Together!
        </h2>
        <p ref={descriptionRef} className='text-center font-medium lg:text-lg capitalize mt-4'>
          Whether you need IT consulting, custom solutions, or technical support, our team is ready to assist you.
          Let’s discuss how we can help your business grow!
        </p>
        <form ref={formRef} className='font-medium flex md:items-center mt-9 flex-col md:flex-row'>
          <label htmlFor="email" className='flex items-center bg-white py-5 px-7 rounded-full w-full'>
            <svg width="26" height="19" viewBox="0 0 26 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.5634 0.544922H2.46338C1.22023 0.544922 0.213379 1.55802 0.213379 2.79492V16.2949C0.213379 17.5392 1.22763 18.5449 2.46338 18.5449H23.5634C24.7961 18.5449 25.8134 17.5434 25.8134 16.2949V2.79492C25.8134 1.56022 24.8105 0.544922 23.5634 0.544922ZM23.2483 2.04492C22.7886 2.50217 14.8775 10.3716 14.6044 10.6433C14.1794 11.0683 13.6144 11.3023 13.0134 11.3023C12.4124 11.3023 11.8474 11.0682 11.421 10.6419C11.2373 10.4591 3.41353 2.67662 2.77848 2.04492H23.2483ZM1.71338 15.9896V3.10117L8.19528 9.54892L1.71338 15.9896ZM2.77943 17.0449L9.25878 10.6068L10.3617 11.7039C11.07 12.4122 12.0117 12.8023 13.0134 12.8023C14.015 12.8023 14.9567 12.4122 15.6636 11.7053L16.768 10.6068L23.2473 17.0449H2.77943ZM24.3134 15.9896L17.8315 9.54892L24.3134 3.10117V15.9896Z" fill="black" />
            </svg>
            <input type="email" placeholder='Please Enter Your Email' id='email' className='outline-none ml-5 w-full' required />
          </label>
          <button type="submit" className='bg-primary text-white py-5 px-12 rounded-full cursor-pointer mt-4 md:mt-0 md:ml-6'>Register</button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
