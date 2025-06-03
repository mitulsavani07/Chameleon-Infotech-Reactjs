import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const ServicesBanner = () => {
  const ServicesBanner = useRef(null);
  const indexHeading = useRef(null);
  const indexSpan1 = useRef(null);
  const indexSpan2 = useRef(null);

  useGSAP(() => {
    gsap.from(ServicesBanner.current, { 
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2, 
      delay: 2
    });
    gsap.from('.animate-card', { 
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2, 
      delay: 2
    });
  });

  useEffect(() => {
    breakText();
    gsap.from("h1 span", {
      y: 50,
      opacity: 0,
      duration: 1,
      filter: 'blur(10px)', // Start with a blur effect
      delay: 0.5,
      stagger: 0.15,
      onComplete: () => {
        gsap.to("h1 span", {
          filter: 'blur(0px)', // Animate to clear
          duration: 0.4
        });
      }
    });
  }, []);

  function breakText() {
    const h1 = indexHeading.current;
    const nameText = h1.textContent;
    const nameSplit = nameText.split(/(<br\s*\/?>)/); // Split by <br> tags
    let splitName = "";

    nameSplit.forEach((e) => {
      if (e.match(/<br\s*\/?>/)) {
        splitName += `<br />`; // Preserve the <br> tags
      } else {
        const words = e.split(" ");
        const wrappedWords = words.map(word => {
          return `<span class="word">${word}</span>`; // Wrap each word in a span
        }).join(" "); // Join words back with a space

        splitName += wrappedWords; // Concatenate the wrapped words
      }
    });

    h1.innerHTML = splitName; // Set the innerHTML to the concatenated string
  }
  return (
    <section className="container text-center mt-20 md:mt-56 md:mb-36 mb-20">
      <div className="relative">
        <h1
          ref={indexHeading}
          className="banner-heading text-[64px] leading-[75px] sm:text-[80px] sm:leading-[100px] md:text-[120px] md:leading-[140px] xl:text-[140px] xl:leading-[160px] 2xl:text-[160px] 2xl:leading-[190px] font-heading uppercase text-primary"
        >
          Your IT Partner – <br /> Solutions That Scale
        </h1>
        <span
          className="-top-20 left-0 animate-card capitalize absolute text-[10px] sm:text-sm md:text-base inline-block text-center px-4 py-2 md:p-4.5 backdrop-blur-xs font-bold text-primary md:rounded-tl-2xl md:rounded-tr-2xl md:rounded-bl-2xl rounded-tl-lg rounded-tr-lg rounded-bl-lg bg-white/70"
        >
          Laravel
        </span>
        <span
          className="animate-card capitalize -bottom-2 md:bottom-[unset] md:top-0 md:left-1/10 absolute text-[10px] sm:text-sm md:text-base inline-block text-center px-4 py-2 md:p-4.5 backdrop-blur-xs font-bold text-primary md:rounded-tl-2xl md:rounded-tr-2xl md:rounded-bl-2xl rounded-tl-lg rounded-tr-lg rounded-bl-lg bg-white/70"
        >
          java
        </span>
        <span
          className="top-1/2 -translate-y-1/2 left-30 animate-card capitalize absolute text-[10px] sm:text-sm md:text-base inline-block text-center px-4 py-2 md:p-4.5 backdrop-blur-xs font-bold text-primary md:rounded-tl-2xl md:rounded-tr-2xl md:rounded-bl-2xl rounded-tl-lg rounded-tr-lg rounded-bl-lg bg-white/70"
        >
          Shopify
        </span>
        <span
          className="left-10 md:left-[45%] md:-translate-y-full top-1/2 -translate-1/2 animate-card capitalize absolute text-[10px] sm:text-sm md:text-base inline-block text-center px-4 py-2 md:p-4.5 backdrop-blur-xs font-bold text-primary md:rounded-tl-2xl md:rounded-tr-2xl md:rounded-bl-2xl rounded-tl-lg rounded-tr-lg rounded-bl-lg bg-white/70"
        >
          Html / css
        </span>
        <span
          className="-bottom-1 left-0 md:-bottom-14 md:left-1/3 animate-card capitalize absolute text-[10px] sm:text-sm md:text-base inline-block text-center px-4 py-2 md:p-4.5 backdrop-blur-xs font-bold text-primary md:rounded-tl-2xl md:rounded-tr-2xl md:rounded-bl-2xl rounded-tl-lg rounded-tr-lg rounded-bl-lg bg-white/70"
        >
          Mongo db
        </span>
        <span
          className="-top-7 right-60 animate-card capitalize absolute text-[10px] sm:text-sm md:text-base inline-block text-center px-4 py-2 md:p-4.5 backdrop-blur-xs font-bold text-primary md:rounded-tl-2xl md:rounded-tr-2xl md:rounded-bl-2xl rounded-tl-lg rounded-tr-lg rounded-bl-lg bg-white/70"
        >
          React JS
        </span>
        <span
          className="top-1/2 -translate-y-1/2 right-0 md:right-24 animate-card capitalize absolute text-[10px] sm:text-sm md:text-base inline-block text-center px-4 py-2 md:p-4.5 backdrop-blur-xs font-bold text-primary md:rounded-tl-2xl md:rounded-tr-2xl md:rounded-bl-2xl rounded-tl-lg rounded-tr-lg rounded-bl-lg bg-white/70"
        >
          Wordpress
        </span>
        <span
          className="-bottom-2 right-0 md:-bottom-14 md:right-10 animate-card capitalize absolute text-[10px] sm:text-sm md:text-base inline-block text-center px-4 py-2 md:p-4.5 backdrop-blur-xs font-bold text-primary md:rounded-tl-2xl md:rounded-tr-2xl md:rounded-bl-2xl rounded-tl-lg rounded-tr-lg rounded-bl-lg bg-white/70"
        >
          docker
        </span>
        <span
          className="-top-7 right-0 animate-card capitalize absolute text-[10px] sm:text-sm md:text-base inline-block text-center px-4 py-2 md:p-4.5 backdrop-blur-xs font-bold text-primary md:rounded-tl-2xl md:rounded-tr-2xl md:rounded-bl-2xl rounded-tl-lg rounded-tr-lg rounded-bl-lg bg-white/70"
        >
          UI / UX
        </span>
      </div>
    </section>
    
  );
};

export default ServicesBanner;
