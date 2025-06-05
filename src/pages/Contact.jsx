import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Contact() {
  const [time, setTime] = useState(new Date());
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

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours();

  const secondDeg = seconds * 6;
  const minuteDeg = minutes * 6;
  const hourDeg = (hours % 12) * 30 + minutes * 0.5;

  return (
    <>
      <div className="container text-center mt-20 md:mt-32 md:mb-20.5 mb-20">
        <h1
          ref={indexHeading}
          className="banner-heading text-[64px] leading-[75px] sm:text-[80px] sm:leading-[100px] md:text-[120px] md:leading-[140px] font-heading uppercase text-primary"
        >
          Contact Us – Let's Connect!
        </h1>
        <p className="font-medium text-lg capitalize mt-6 animate-card">
          Wants to talk instead?{" "}
          <a
            href="tel:+919099499095"
            className="text-primary inline-flex items-center font-bold relative before:absolute before:bottom-0 before:duration-300 before:inset-x-0 before:w-full hover:before:w-0 before:h-[1.5px] before:bg-primary ml-1"
          >
            call Now!
            <svg
              className="ml-3 w-4.5 h-4"
              width="14"
              height="10"
              viewBox="0 0 14 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.351 4.5817L9.29914 0.515597C9.18997 0.409786 9.04376 0.351238 8.89199 0.352561C8.74022 0.353884 8.59504 0.414974 8.48772 0.522673C8.38039 0.630371 8.31952 0.776061 8.3182 0.928364C8.31688 1.08067 8.37522 1.2274 8.48066 1.33695L11.5445 4.4115H1.36497C1.21146 4.4115 1.06423 4.4727 0.955671 4.58164C0.847118 4.69057 0.786133 4.83832 0.786133 4.99238C0.786133 5.14643 0.847118 5.29418 0.955671 5.40311C1.06423 5.51205 1.21146 5.57325 1.36497 5.57325H11.5445L8.48066 8.6478C8.42538 8.70139 8.38128 8.76548 8.35094 8.83635C8.32061 8.90722 8.30464 8.98344 8.30397 9.06057C8.3033 9.1377 8.31795 9.21419 8.34706 9.28557C8.37616 9.35696 8.41914 9.42182 8.47349 9.47636C8.52784 9.5309 8.59247 9.57403 8.6636 9.60323C8.73474 9.63244 8.81096 9.64714 8.88782 9.64647C8.96468 9.6458 9.04063 9.62977 9.11126 9.59933C9.18188 9.56889 9.24575 9.52464 9.29914 9.46916L13.351 5.40305C13.4595 5.29412 13.5205 5.1464 13.5205 4.99238C13.5205 4.83835 13.4595 4.69063 13.351 4.5817Z"
                fill="currentColor"
              />
            </svg>
          </a>
        </p>
      </div>
      <div className="container flex flex-wrap max-w-[1120px] mx-auto my-20 items-start">
        <div className="animate-card w-full md:w-1/3 text-base md:text-xl font-medium md:leading-[34px] md:sticky top-5 text-center md:text-left">
          <h4 className="capitalize text-2xl font-bold">contact info</h4>
          <p className="mt-6">
            Shop 325 Third Floor, Platinum Point, Opp. To Cng Pump, Nr Sudama
            Chowk, Mota Varachha, Surat - 394101
          </p>
          <br />
          <ul className="flex items-center gap-4">
            <li><a href="https://www.instagram.com/chameleoninfotech/" target="_blank"><img src="/social/Facebook_icon.svg" className="w-8 h-8 hover:opacity-90 duration-300" alt="facebook" /></a></li>
            <li><a href="https://www.linkedin.com/company/chameleon-infotech" target="_blank"><img src="/social/Instagram_icon.svg" className="w-8 h-8 hover:opacity-90 duration-300" alt="instagram" /></a></li>
            <li><a href="https://www.facebook.com/chameleoninfotech" target="_blank"><img src="/social/Linkedin_icon.svg" className="w-8 h-8 hover:opacity-90 duration-300" alt="linkedin" /></a></li>
          </ul>
          <br />
          <a
            href="mailto:info@chameleoninfotech.com"
            className="text-primary underline block underline-offset-2"
          >
            info@chameleoninfotech.com
          </a>
          <a
            href="mailto:hr@chameleoninfotech.com"
            className="text-primary underline block underline-offset-2"
          >
            hr@chameleoninfotech.com
          </a>

          
        </div>
        <div className="w-full md:w-2/3 md:pl-[90px] mt-10 md:mt-0">
          <form
            action=""
            className="animate-card bg-white rounded-3xl p-4 lg:p-7.5 shadow-[0px_4px_12px_1px_#00000012] backdrop-blur-sm font-medium text-sm flex flex-wrap"
          >
            <fieldset className="w-1/2 p-2.5 lg:p-4.5">
              <label htmlFor="" className="text-base lg:text-lg block mb-4.5">
                Full name
              </label>
              <input
                type="text"
                placeholder="Full name"
                className="outline-none border-b duration-300 focus:border-[#0f0f0f] border-[#0F0F0F]/50 pb-2.5 w-full"
              />
            </fieldset>
            <fieldset className="w-1/2 p-2.5 lg:p-4.5">
              <label htmlFor="" className="text-base lg:text-lg block mb-4.5">
                Email address
              </label>
              <input
                type="text"
                placeholder="Email address"
                className="outline-none border-b duration-300 focus:border-[#0f0f0f] border-[#0F0F0F]/50 pb-2.5 w-full"
              />
            </fieldset>
            <fieldset className="w-1/2 p-2.5 lg:p-4.5">
              <label htmlFor="" className="text-base lg:text-lg block mb-4.5">
                Company
              </label>
              <input
                type="text"
                placeholder="Company"
                className="outline-none border-b duration-300 focus:border-[#0f0f0f] border-[#0F0F0F]/50 pb-2.5 w-full"
              />
            </fieldset>
            <fieldset className="w-1/2 p-2.5 lg:p-4.5">
              <label htmlFor="" className="text-base lg:text-lg block mb-4.5">
                Website link
              </label>
              <input
                type="text"
                placeholder="Website link"
                className="outline-none border-b duration-300 focus:border-[#0f0f0f] border-[#0F0F0F]/50 pb-2.5 w-full"
              />
            </fieldset>
            <fieldset className="w-1/2 p-2.5 lg:p-4.5">
              <label htmlFor="" className="text-base lg:text-lg block mb-4.5">
                Services
              </label>
              <input
                type="text"
                placeholder="Services"
                className="outline-none border-b duration-300 focus:border-[#0f0f0f] border-[#0F0F0F]/50 pb-2.5 w-full"
              />
            </fieldset>
            <fieldset className="w-1/2 p-2.5 lg:p-4.5">
              <label htmlFor="" className="text-base lg:text-lg block mb-4.5">
                Budget
              </label>
              <input
                type="text"
                placeholder="Budget"
                className="outline-none border-b duration-300 focus:border-[#0f0f0f] border-[#0F0F0F]/50 pb-2.5 w-full"
              />
            </fieldset>
            <fieldset className="w-full p-4.5">
              <label htmlFor="" className="text-base lg:text-lg block mb-4.5">
                Message
              </label>
              <textarea
                className="outline-none border-b duration-300 focus:border-[#0f0f0f] border-[#0F0F0F]/50 pb-2.5 w-full h-28"
                name=""
                id=""
                placeholder="Tell us about your project..."
              ></textarea>
            </fieldset>
            <fieldset className="w-full p-4.5 text-center">
              <button
                className="bg-primary text-base text-white py-3.5 px-7 rounded-full cursor-pointer"
                type="submit"
              >
                Send message
              </button>
            </fieldset>
          </form>
        </div>
      </div>
      <div className="container my-20">
        <div className="animate-card relative w-full h-[500px] rounded-3xl overflow-hidden shadow-[0_1px_13px_5px_rgba(0,0,0,0.16)]">
          <iframe
            id="mapIframe"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.5500886281184!2d72.86667307587506!3d21.170295882901158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f1590467753%3A0xd8c25fa9b65be07e!2sChameleon%20Infotech%20LLP!5e0!3m2!1sen!2sin!4v1749106570294!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
            width="100%"
            height="100%"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="flex md:flex-row flex-col items-center gap-4 md:gap-6 absolute bottom-5 left-1/2 -translate-x-1/2 bg-white py-4 px-4 md:px-10 rounded-3xl shadow-[0_0_16px_2px_rgba(0,0,0,0.14)]">
            <div className="relative w-32 h-32">
              {/* Clock modal/background */}
              <img
                src="/contact/clock-modal.svg"
                alt="clock base"
                className="w-full h-full absolute top-0 left-0 z-0"
              />

              {/* Hour hand */}
              <img
                src="/contact/clock-hour-hand.svg"
                alt="hour hand"
                className="absolute w-[4px] h-[28px] top-[70px] left-1/2 z-10 origin-[50%_20px]"
                style={{
                  transform: `translate(-50%, -100%) rotate(${hourDeg}deg)`,
                }}
              />

              {/* Minute hand */}
              <img
                src="/contact/clock-minutes-hand.svg"
                alt="minute hand"
                className="absolute w-[4px] h-[44px] top-[72px] left-1/2 z-20 origin-[50%_39px]"
                style={{
                  transform: `translate(-50%, -100%) rotate(${minuteDeg}deg)`,
                }}
              />

              {/* Second hand */}
              <img
                src="/contact/clock-second-hand.svg"
                alt="second hand"
                className="absolute w-auto h-[60px] top-[78px] left-1/2 z-30 origin-[50%_49px]"
                style={{
                  transform: `translate(-50%, -100%) rotate(${secondDeg}deg)`,
                }}
              />
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg lg:text-xl font-bold mb-2 md:mb-3.5">India</h4>
              <p className="text-base md:text-lg font-medium mb-1">+91 90994 99095</p>
              <p className="text-base md:text-lg font-medium">+91 95103 03655</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
