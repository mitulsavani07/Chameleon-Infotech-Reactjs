import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function PrivacyPolicy() {
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
          Privacy Policy
        </h1>
        <div className="animate-card text-sm leading-[24px] md:text-base font-medium md:leading-[28px] max-w-[920px] mx-auto mt-5 opacity-80">
          <p>
            While you access or use this website, we are committed to
            safeguarding and respecting your privacy. Our responsibilities
            include providing you with the correct information and complete
            website and user data management while securing the data handled by
            us. Our privacy policy, which addresses information collection,
            processing, segregation, and reuse, is fundamentally based on our
            data collection and management policy. You accept the following
            usage terms and conditions by using or accessing this website.
          </p>
          <h4 className="font-bold text-2xl md:text-3xl my-5">
            Information Collection, Use, and Sharing
          </h4>
          <p>
            We are the sole owners of the information collected on this site. We
            only have access to and collect the information you voluntarily give
            us via email or direct contact. We will not sell or rent this
            information to anyone.
          </p>
          <h4 className="font-bold text-2xl md:text-3xl my-5">
            Your Access to and Control Over Information
          </h4>
          <p>
            You can choose not to receive any more contact from us at any time.
            You can do the following at any time by contacting us via the email
            address or phone number given on our website:
          </p>
          <ul class="pl-5 md:pl-10">
            <li class="my-4 list-disc">
              Change or correct any information we have about you.
            </li>
            <li class="my-4 list-disc">
              Have us delete any information we have about you.
            </li>
            <li class="my-4 list-disc">
              Express any concern you have about our use of your data.
            </li>
          </ul>
          <h4 className="font-bold text-2xl md:text-3xl my-5">Security</h4>
          <p>
            We take precautions to protect your information. Your information is
            protected when you submit sensitive information via the website. We
            keep personally identifiable information on computers and servers in
            a secure setting.
          </p>
          <h4 className="font-bold text-2xl md:text-3xl my-5">Updates</h4>
          <p>
            Our most recent privacy policies will always be available on this page.
          </p>
          <p>
            Our main goal as a web development service provider is to offer cutting-edge technology-based solutions. This privacy policy underlies our professional goals and objectives.
          </p>
        </div>
      </div>
    </>
  );
}

export default PrivacyPolicy;
