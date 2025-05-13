import React, { useEffect, useRef } from 'react'
import { OurStory as ourStoryData } from "../data/ourstory"; // renamed imported data
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const OurStory = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const heading = section.querySelector('h2');
    const paragraph = section.querySelector('p');
    const cols = section.querySelectorAll('.ourstory-col');

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
        },
      }
    );

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
        },
      }
    );

    cols.forEach((col, i) => {
      const isLeft = i < 2;

      gsap.fromTo(
        col,
        {
          x: isLeft ? -100 : 100,
          opacity: 0,
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
          },
        }
      );
    });
  }, []);

  // Split data manually
  const leftColumn = ourStoryData.slice(0, 2);
  const rightColumn = ourStoryData.slice(2);

  return (
    <div ref={sectionRef} className='container my-10 md:my-36'>
      <h2 className='text-2xl md:text-3xl lg:text-5xl font-bold leading-tight capitalize'>
        Our Story
      </h2>
      <p className='text-sm xl:text-base font-medium mt-2 capitalize max-w-[600px]'>
        Our work combines creativity and data-driven strategies to deliver
        impactful Digital marketing campaigns that drive growth.
      </p>

      {/* Two column masonry layout using flex */}
      <div className='flex flex-wrap -mx-6 mt-10 lg:mt-22'>
        <div className='w-full lg:w-1/2 px-6 py-8 ourstory-col space-y-18'>
          {leftColumn.map((data, index) => (
            <div key={index} className='ourstory-col'>
              <div
                style={{ backgroundColor: data.backgroundColor, color: data.color }}
                className='pb-8 px-4 md:pb-12 md:px-7 rounded-3xl'
              >
                <div className='flex justify-between text-lg font-bold items-end pb-6 lg:pb-16'>
                  <span className='text-sm lg:text-base bg-white px-5 md:px-9 py-2 inline-block border rounded-full'>
                    {data.date}
                  </span>
                  <div className='text-sm lg:text-base flex flex-col items-center bg-white rounded-[20px] p-4.5 border-t-[12px] -mt-8'>
                    <span className='text-3xl md:text-4xl'>{data.features.prefix}</span> {data.features.highlight}
                  </div>
                </div>
                <h3 className='text-xl md:text-2xl lg:text-3xl font-heading mb-4'>{data.title}</h3>
                <p className='font-medium'>{data.details}</p>
              </div>
            </div>
          ))}
        </div>

        <div className='w-full lg:w-1/2 px-6 py-8 ourstory-col space-y-18 lg:mt-36'>
          {rightColumn.map((data, index) => (
            <div key={index + 2} className='ourstory-col'>
              <div
                style={{ backgroundColor: data.backgroundColor, color: data.color }}
                className='pb-8 px-4 md:pb-12 md:px-7 rounded-3xl'
              >
                <div className='flex justify-between text-lg font-bold items-end pb-6 lg:pb-16'>
                  <span className='text-sm lg:text-base bg-white px-5 md:px-9 py-2 inline-block border rounded-full'>
                    {data.date}
                  </span>
                  <div className='text-sm lg:text-base flex flex-col items-center bg-white rounded-[20px] p-4.5 border-t-[12px] -mt-8'>
                    <span className='text-3xl md:text-4xl'>{data.features.prefix}</span> {data.features.highlight}
                  </div>
                </div>
                <h3 className='text-xl md:text-2xl lg:text-3xl font-heading mb-4'>{data.title}</h3>
                <p className='font-medium'>{data.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurStory;