import React, { useEffect, useRef } from 'react'
import { workWithUsData } from "../data/workwithus";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const WorkWithUs = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const heading = section.querySelector('h2');
    const paragraph = section.querySelector('p');
    const cols = section.querySelectorAll('.work-col');
  
    // Animate heading
    gsap.fromTo(
      heading,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: heading,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        }
      }
    );
  
    // Animate paragraph
    gsap.fromTo(
      paragraph,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        delay: 0.2,
        scrollTrigger: {
          trigger: paragraph,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        }
      }
    );
  
    // Animate each column
    cols.forEach((col, i) => {
      const isLeft = i % 2 === 0;
  
      gsap.fromTo(
        col,
        {
          x: isLeft ? -100 : 100,
          opacity: 0
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: col,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          }
        }
      );
    });
  }, []);  

  return (
    <div ref={sectionRef} className='container my-10 md:my-36'>
      <h2 className='text-2xl md:text-3xl lg:text-5xl font-bold text-center leading-tight capitalize'>Why Work With Us?</h2>
      <p className='text-sm xl:text-base font-medium mt-2 capitalize text-center'>We Are the Ideal Technology Partner for Scalable and Future-Ready Solutions.</p>
      <div className='flex flex-wrap -mx-6 mt-10 lg:mt-20'>
        {workWithUsData.map((data, index) => (
          <div key={index} className='w-full lg:w-1/2 px-6 py-3 work-col'>
            <div
              style={{ backgroundColor: data.backgroundColor, color: data.color }}
              className='py-8 px-4 md:py-11 md:px-7 rounded-3xl'
            >
              <div className='flex items-start'>
                <span className='bg-white font-bold py-1.5 px-2 rounded-full'>0{data.id}</span>
                <div className='pl-4 md:pl-7'>
                  <h3 className='text-3xl font-heading mb-4'>{data.title}</h3>
                  <p className='font-medium'>{data.details}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WorkWithUs
