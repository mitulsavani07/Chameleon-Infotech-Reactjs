import React, { useRef } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function Home() {
  const indexBanner = useRef(null);
  useGSAP(() => {
    // gsap code here...
    gsap.from(indexBanner.current, { 
      y: 50,
      opacity: 0,
      duration: 0.6,
      stagger:0.2, 
      delay: 2
    }); // <-- automatically reverted
  },); // <-- scope is for selector text (optional)
  return (
    <>
      <section className='container text-center my-16'>
        <h4 ref={indexBanner} className='text-4xl font-medium'>Think big & be creative</h4>
        <h1 className='text-[160px] leading-[190px] font-heading uppercase text-primary'>We are an excellent <br /> Digital <br /> Consulting Firm</h1>
      </section>
    </>
  )
}

export default Home