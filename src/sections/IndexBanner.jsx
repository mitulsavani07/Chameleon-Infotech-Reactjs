import React, { useRef, useEffect } from 'react';
import { animate, motion, useMotionValue, useTransform } from "motion/react"

const IndexBanner = () => {
  const count = useMotionValue(0)
  const rounded = useTransform(() => Math.round(count.get()))
  const indexBanner = useRef(null);
  const indexHeading = useRef(null);
  const indexSpan1 = useRef(null);
  const indexSpan2 = useRef(null);
  
  useEffect(() => {
    breakText();
  
    const controls = animate(count, 200, { duration: 5 })
    return () => controls.stop()
  }, []);  

  function breakText() {
    const h1 = indexHeading.current;
    const nameText = h1.textContent;
    const nameSplit = nameText.split(/(<br\s*\/?>)/); // Split by <br> tags
    let splitName = "";
  
    nameSplit.forEach((e) => {
      if (e.match(/<br\s*\/?>/)) {
        splitName += `<br />`;
      } else {
        const words = e.split(" ");
        const wrappedWords = words.map(word => {
          return `<span class="word" data-word="${word}">${word}</span>`;
        }).join(" ");
  
        splitName += wrappedWords;
      }
    });
  
    h1.innerHTML = splitName;
  
    // Animate each word
    const words = h1.querySelectorAll(".word");
    words.forEach((word, i) => {
      animate(word, 
        { 
          opacity: [0, 1], 
          y: [20, 0],
          filter: ["blur(10px)", "blur(0px)"]
        }, 
        {
          delay: 1 + i * 0.1,
          duration: 0.6,
          ease: "easeOut"
        }
      );
    });
  }
  

  const bannerVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: 2 + i * 0.2,
        duration: 1,
      },
    }),
  };

  const headingVariants = {
    hidden: { y: 50, opacity: 0, filter: 'blur(10px)' },
    visible: {
      y: 0,
      opacity: 1,
      filter: 'blur(0px)',
      transition: {
        delay: 0.5,
        duration: 1,
      },
    },
  };

  return (
    <section id="bannerSection" className="container text-center my-10 md:my-16">
      <motion.h4
        ref={indexBanner}
        className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium mb-2"
        variants={bannerVariants}
        initial="hidden"
        animate="visible"
        custom={0}
      >
        Think big & be creative
      </motion.h4>
      <div className="relative">
        <motion.h1
          ref={indexHeading}
          className="banner-heading text-[64px] leading-[75px] sm:text-[80px] sm:leading-[100px] md:text-[100px] md:leading-[120px] xl:text-[140px] xl:leading-[160px] 2xl:text-[160px] 2xl:leading-[190px] font-heading uppercase text-primary"
          variants={headingVariants}
          initial="hidden"
          animate="visible"
        >
          We are an excellent <br /> Digital <br /> Consulting Firm
        </motion.h1>
        <motion.span
          ref={indexSpan1}
          className="text-[8px] sm:text-[12px] md:text-sm lg:text-base absolute top-6/12 sm:top-[unset] sm:bottom-30 md:bottom-[unset] md:top-5/12 lg:top-20 right-0 xl:top-28 xl:right-20 2xl:top-36 2xl:right-50 max-w-[150px] sm:max-w-[200px] lg:max-w-[280px] w-full inline-block text-left sm:text-center md:py-6 md:px-4 p-2 sm:p-4 backdrop-blur-xs font-bold text-primary md:rounded-tl-2xl rounded-tl-md md:rounded-tr-2xl rounded-tr-md rounded-br-md md:rounded-br-2xl bg-white/70"
          variants={bannerVariants}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          We are the ideal technology partner for providing scalable businesses
          with custom web development services.
        </motion.span>
        <motion.span
          ref={indexSpan2}
          className="absolute text-[10px] sm:text-sm md:text-xl bottom-[70%] sm:bottom-20 xl:text-2xl md:bottom-24 lg:bottom-10 left-0 xl:bottom-20 xl:left-20 2xl:bottom-36 2xl:left-70 max-w-[105px] sm:max-w-[150px] md:max-w-[230px] w-full inline-block text-center p-4 md:py-6 md:px-4 backdrop-blur-xs font-bold text-primary md:rounded-tl-2xl md:rounded-tr-2xl md:rounded-bl-2xl rounded-tl-lg rounded-tr-lg rounded-bl-lg -rotate-12 bg-white/70"
          variants={bannerVariants}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          <motion.b className="text-xl sm:text-3xl xl:text-4xl block">
            <motion.span style={{ count: rounded }}>
              {rounded}
            </motion.span>
            +
          </motion.b>
          Happy Clients
        </motion.span>
      </div>
    </section>
  );
};

export default IndexBanner;
