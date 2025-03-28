import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const IndexBanner = () => {
  const indexBanner = useRef(null);
  const indexHeading = useRef(null);
  const indexSpan1 = useRef(null);
  const indexSpan2 = useRef(null);

  useGSAP(() => {
    gsap.from(indexBanner.current, { 
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2, 
      delay: 2
    });
    gsap.from(indexSpan1.current, { 
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2, 
      delay: 2
    });
    gsap.from(indexSpan2.current, { 
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
    <section id="bannerSection" className="container text-center my-10 md:my-16">
      <h4
        ref={indexBanner}
        className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium mb-2"
      >
        Think big & be creative
      </h4>
      <div className="relative">
        <h1
          ref={indexHeading}
          className="banner-heading text-[64px] leading-[75px] sm:text-[80px] sm:leading-[100px] md:text-[100px] md:leading-[120px] xl:text-[140px] xl:leading-[160px] 2xl:text-[160px] 2xl:leading-[190px] font-heading uppercase text-primary"
        >
          We are an excellent <br /> Digital <br /> Consulting Firm
        </h1>
        <span
          ref={indexSpan1}
          className="text-[8px] sm:text-[12px] md:text-sm lg:text-base absolute top-6/12 sm:top-[unset] sm:bottom-30 md:bottom-[unset] md:top-5/12 lg:top-20 right-0 xl:top-28 xl:right-20 2xl:top-36 2xl:right-50 max-w-[150px] sm:max-w-[200px] lg:max-w-[280px] w-full inline-block text-left sm:text-center md:py-6 md:px-4 p-2 sm:p-4 backdrop-blur-xs font-bold text-primary md:rounded-tl-2xl rounded-tl-md md:rounded-tr-2xl rounded-tr-md rounded-br-md md:rounded-br-2xl bg-white/70"
        >
          We are the ideal technology partner for providing scalable businesses
          with custom web development services.
        </span>
        <span
          ref={indexSpan2}
          className="absolute text-[10px] sm:text-sm md:text-xl bottom-[70%] sm:bottom-20 xl:text-2xl md:bottom-24 lg:bottom-10 left-0 xl:bottom-20 xl:left-20 2xl:bottom-36 2xl:left-70 max-w-[105px] sm:max-w-[150px] md:max-w-[230px] w-full inline-block text-center p-4 md:py-6 md:px-4 backdrop-blur-xs font-bold text-primary md:rounded-tl-2xl md:rounded-tr-2xl md:rounded-bl-2xl rounded-tl-lg rounded-tr-lg rounded-bl-lg -rotate-12 bg-white/70"
        >
          <b className="text-xl sm:text-3xl xl:text-4xl block">200+</b>
          Happy Clients
        </span>
      </div>
    </section>
  );
};

export default IndexBanner;
