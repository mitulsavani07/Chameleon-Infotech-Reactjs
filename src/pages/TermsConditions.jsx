import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function TermsConditions() {
  const indexHeading = useRef(null);
  useGSAP(() => {
    gsap.from(".animate-card", {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      delay: 2,
    });
  });
  useEffect(() => {
    breakText();
    gsap.from("h1 span", {
      y: 50,
      opacity: 0,
      duration: 1,
      filter: "blur(10px)", // Start with a blur effect
      delay: 0.5,
      stagger: 0.15,
      onComplete: () => {
        gsap.to("h1 span", {
          filter: "blur(0px)", // Animate to clear
          duration: 0.4,
        });
      },
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
        const wrappedWords = words
          .map((word) => {
            return `<span class="word">${word}</span>`; // Wrap each word in a span
          })
          .join(" "); // Join words back with a space

        splitName += wrappedWords; // Concatenate the wrapped words
      }
    });

    h1.innerHTML = splitName; // Set the innerHTML to the concatenated string
  }
  return (
    <>
      <div className="container mt-10 md:mt-32 md:mb-20.5 mb-20">
        <h1
          ref={indexHeading}
          className="text-center banner-heading text-[50px] leading-[65px] sm:text-[80px] sm:leading-[100px] md:text-[120px] md:leading-[140px] font-heading uppercase text-primary"
        >
          Terms & Conditions
        </h1>
        <div className="animate-card text-sm leading-[24px] md:text-base font-medium md:leading-[28px] max-w-[920px] mx-auto mt-5 opacity-80">
          <p>
            Chameleon Infotech LLP owns and manages this website, as well as the
            copyright to it. We offer top-notch web and software development
            services to online business owners. The visitor to Chameleon
            Infotech LLP's website must abide by the terms and conditions of the
            company.
          </p>
          <h4 className="font-bold text-2xl md:text-3xl my-5">Conditions</h4>
          <p>
            As soon as you place an order with us, you confirm that you will
            follow the terms and conditions enumerated below:
          </p>
          <ul class="pl-5 md:pl-10">
            <li class="my-4 list-disc">
              We consider the businesses and individuals who use our web-based
              services as clients.
            </li>
            <li class="my-4 list-disc">
              When a client and Chameleon Infotech LLP enter into a contract
              through a phone conversation or email agreement, it considers
              being an order
            </li>
            <li class="my-4 list-disc">
              The graphics, web content, and all coding will be considered
              Chameleon Infotech LLP's property.
            </li>
            <li class="my-4 list-disc">
              {" "}
              Chameleon Infotech LLP will own the copyright of the works
              executed for the client project. And the client might not
              reproduce or resell it without the knowledge of Chameleon Infotech
              LLP.
            </li>
            <li class="my-4 list-disc">
              Any legal action taken to enforce copyright against the client's
              submitted content and materials will not be our responsibility in
              any way.
            </li>
          </ul>
          <p>
            Contact us to learn more about our terms and conditions and web development services.
          </p>
        </div>
      </div>
    </>
  );
}

export default TermsConditions;
