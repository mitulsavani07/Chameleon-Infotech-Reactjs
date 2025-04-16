import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const AboutBanner = () => {
  const AboutBanner = useRef(null);
  const indexHeading = useRef(null);
  const indexSpan1 = useRef(null);
  const indexSpan2 = useRef(null);

  useGSAP(() => {
    gsap.from(AboutBanner.current, { 
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
          Hello, We’re <br />
          chameleon infotech
        </h1>
        <span
          className="animate-card absolute text-[10px] sm:text-sm md:text-base -top-[30%] sm:-top-20 xl:text-lg md:-top-24 lg:-top-10 left-0 xl:-top-20 xl:left-20 2xl:-top-36 2xl:left-36 max-w-[105px] sm:max-w-[150px] md:max-w-[230px] w-full inline-block text-center p-4 md:py-6 md:px-4 backdrop-blur-xs font-bold text-primary md:rounded-tl-2xl md:rounded-tr-2xl md:rounded-bl-2xl rounded-tl-lg rounded-tr-lg rounded-bl-lg bg-white/70"
        >
          <b className="text-xl sm:text-3xl xl:text-4xl block">10+</b>
          Years Of Experience
        </span>
        <span
          className="animate-card absolute text-[10px] sm:text-sm md:text-xl -bottom-[20%] sm:bottom-20 xl:text-2xl md:bottom-24 lg:bottom-10 left-0 xl:bottom-20 xl:left-20 2xl:bottom-36 2xl:left-36 max-w-[105px] sm:max-w-[150px] md:max-w-[230px] w-full inline-block text-center p-4 md:py-6 md:px-4 backdrop-blur-xs font-bold text-primary md:rounded-tl-2xl md:rounded-tr-2xl md:rounded-bl-2xl rounded-tl-lg rounded-tr-lg rounded-bl-lg -rotate-12 bg-white/70"
        >
          <b className="text-xl sm:text-3xl xl:text-4xl block">200+</b>
          Happy Clients
        </span>
        <span
          className="animate-card absolute text-[10px] sm:text-sm md:text-base -bottom-[20%] sm:bottom-20 xl:text-lg md:bottom-24 lg:bottom-10 right-0 xl:bottom-20 xl:right-5 2xl:bottom-36 2xl:right-10 max-w-[105px] sm:max-w-[150px] md:max-w-[230px] w-full inline-block text-center p-4 md:py-6 md:px-4 backdrop-blur-xs font-bold text-primary md:rounded-tl-2xl md:rounded-tr-2xl md:rounded-br-2xl rounded-tl-lg rounded-tr-lg rounded-br-lg bg-white/70"
        >
          <b className="text-xl sm:text-3xl xl:text-4xl block">2000+</b>
          Completed Projects
        </span>
        <span
          className="animate-card absolute text-[10px] sm:text-sm md:text-base -top-[20%] sm:-top-20 xl:text-lg md:-top-24 lg:-top-10 right-0 xl:-top-20 xl:right-5 2xl:-top-30 2xl:right-30 max-w-[105px] sm:max-w-[120px] md:max-w-[132px] w-full inline-block text-center p-4 md:py-6 md:px-4 backdrop-blur-xs font-bold text-primary md:rounded-tl-2xl md:rounded-tr-2xl md:rounded-br-2xl rounded-tl-lg rounded-tr-lg rounded-br-lg bg-white/70"
        >
          <b className="text-xl sm:text-3xl xl:text-4xl block">2014</b>
          Since
        </span>
      </div>
    </section>
  );
};

export default AboutBanner;
