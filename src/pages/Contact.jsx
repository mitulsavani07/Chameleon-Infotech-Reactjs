import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function Contact() {
  const indexHeading = useRef(null);
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
    <div className="container text-center mt-20 md:mt-56 md:mb-36 mb-20">
      <h1
        ref={indexHeading}
        className="banner-heading text-[64px] leading-[75px] sm:text-[80px] sm:leading-[100px] md:text-[120px] md:leading-[140px] font-heading uppercase text-primary"
      >
       Contact Us – Let's Connect!
      </h1>
    </div>
  );
}

export default Contact;
