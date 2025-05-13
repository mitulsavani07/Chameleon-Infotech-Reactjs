import React, { useRef, useEffect } from "react";
import Logo from "/logo.svg";
import { NavLink, useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {

  const footerRef = useRef(null);
  const location = useLocation(); // 👈 get current route

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        footerRef.current,
        { y: 100, opacity: 0 },
        {
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top bottom",
            end: "top center",
            scrub: true,
            toggleActions: "play none none reverse",
          },
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
        }
      );
    }, footerRef);

    // Optional: Clean up GSAP/ScrollTrigger on route change
    return () => {
      ctx.revert();
      ScrollTrigger.refresh(); // 👈 refresh after cleaning
    };
  }, [location.pathname]); // 👈 run animation on every route change
  return (
    <footer ref={footerRef} className="pt-24 pb-11">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full md:w-6/12 xl:w-7/12 mb-10 md:mb-0 footer-items">
            <img src={Logo} alt="Logo" className="max-w-[188px]" />
            <p className="mt-7 max-w-[400px]">
              Founded in 2011, Chameleon Infotech LLP is a leading website
              design and development company in India that offers services
              globally.
            </p>
          </div>
          <div className="w-4/12 md:w-2/12 footer-items">
            <h3 className="text-xl font-semibold">Page</h3>
            <ul className="font-medium mt-7 space-y-4">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/services">Services</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
              <li><NavLink to="/portfolio">Portfolio</NavLink></li>
            </ul>
          </div>
          <div className="w-8/12 md:w-4/12 xl:w-3/12 footer-items">
            <h3 className="text-xl font-semibold">Contact</h3>
            <ul className="font-medium mt-7 space-y-4">
              <li className="flex items-center">
              <svg className="mr-3.5" width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.85962 0.503906C9.34493 0.599939 9.84151 0.647956 10.3042 0.798007C13.1427 1.71632 14.8807 3.76303 15.5635 6.80607C15.9924 8.71473 15.7159 10.5634 14.8412 12.286C13.0637 15.7792 11.2692 19.2543 9.47472 22.7415C9.22078 23.2337 8.83141 23.5098 8.29532 23.5038C7.77052 23.4978 7.38679 23.2217 7.1385 22.7415C5.34966 19.2604 3.53825 15.7852 1.77762 12.286C-0.293373 8.16254 1.35439 3.03077 5.32709 1.17014C6.0494 0.83402 6.79992 0.623947 7.57866 0.545921C7.64073 0.539919 7.7028 0.521912 7.76488 0.503906C8.13167 0.503906 8.49283 0.503906 8.85962 0.503906ZM5.27066 7.68837C5.27066 9.46498 6.63063 10.9235 8.29532 10.9295C9.97694 10.9355 11.3482 9.48299 11.3538 7.70038C11.3538 5.92377 9.99952 4.46527 8.32918 4.45927C6.64756 4.45326 5.27066 5.89976 5.27066 7.68837Z" fill="#0F0F0F"/>
                </svg>
                  <span className="w-[calc(100%-16px)]"> 408, Panvel Point, Nr. Sudama
                  Chowk, Mota Varachha,
                  Surat - 394101</span></li>
              <li className="flex items-center">
              <svg className="mr-3.5" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.4558 15.1486C16.9248 15.7444 16.3699 16.3211 15.7767 16.8549C15.1596 17.4125 14.3846 17.5555 13.5666 17.4887C12.0358 17.36 10.6724 16.7405 9.35682 16.0113C7.73988 15.1153 6.29517 13.9905 5.03702 12.637C3.49663 10.9879 2.21935 9.16258 1.42045 7.03696C1.15256 6.32206 0.937289 5.58334 0.903802 4.80648C0.903802 4.76835 0.88945 4.72546 0.879883 4.68733V4.4395C0.908586 4.2298 0.922937 4.0201 0.961208 3.81516C1.06167 3.30044 1.29129 2.85243 1.65965 2.47592C2.14281 1.98026 2.61163 1.46554 3.13785 1.01277C3.93675 0.326471 4.79783 0.331237 5.56324 1.04613C6.37649 1.80869 7.16104 2.60937 7.92167 3.42435C8.48616 4.02963 8.48138 4.95899 7.93602 5.58334C7.5294 6.04563 7.07972 6.4698 6.64439 6.90827C6.56306 6.9893 6.53914 7.04172 6.59655 7.15611C7.03666 8.03781 7.65378 8.79083 8.32351 9.50096C9.0076 10.2302 9.76344 10.8831 10.615 11.4264C10.8542 11.5789 11.1173 11.7076 11.3852 11.8554C11.677 11.5599 11.9592 11.2739 12.2462 10.9879C12.4376 10.7973 12.6337 10.6067 12.8394 10.4351C13.4566 9.92513 14.3846 9.9156 14.9635 10.4637C15.8054 11.2644 16.633 12.0889 17.4319 12.9325C18.0203 13.5568 18.0299 14.5052 17.4558 15.1486Z" fill="#0F0F0F"/>
                </svg>

                  <span className="w-[calc(100%-18px)]"> +91 (909)-949 9095</span></li>
              <li className="flex items-center">
              <svg className="mr-3.5" width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.8801 12.966C19.8272 13.1309 19.7744 13.2911 19.7071 13.5046C17.7327 11.4713 15.7823 9.46231 13.8799 7.50183C15.7727 5.55105 17.7279 3.54204 19.7071 1.50391C19.7744 1.71257 19.8272 1.87756 19.8801 2.04255C19.8801 5.68207 19.8801 9.32644 19.8801 12.966Z" fill="#0F0F0F"/>
                <path d="M18.881 0.672293C18.8301 0.728174 18.7885 0.774741 18.7469 0.816652C16.3796 3.19158 14.0124 5.56185 11.6452 7.93678C11.1366 8.44902 10.5356 8.64926 9.84665 8.39314C9.6016 8.30467 9.36118 8.14168 9.17162 7.95541C6.77665 5.57117 4.3863 3.17295 1.99596 0.779398C1.96822 0.751458 1.94048 0.714204 1.88037 0.64901C2.11155 0.597786 2.31036 0.551219 2.50917 0.513965C2.57852 0.499995 2.64787 0.504651 2.7126 0.504651C7.83081 0.504651 12.949 0.504651 18.0672 0.504651C18.3493 0.504651 18.6174 0.541905 18.881 0.672293Z" fill="#0F0F0F"/>
                <path d="M7.59845 8.50391C7.89181 8.80024 8.14325 9.06365 8.39936 9.31765C9.45171 10.3619 10.9744 10.4795 12.1152 9.59047C12.3247 9.42584 12.5063 9.22828 12.6972 9.04013C12.8602 8.88021 13.0185 8.71087 13.2001 8.52272C15.1046 10.4842 16.9904 12.4315 18.881 14.3789C18.7552 14.4071 18.555 14.4541 18.3548 14.4965C18.2849 14.5106 18.2058 14.5012 18.1313 14.5012C12.9813 14.5012 7.83593 14.5012 2.68593 14.4965C2.4112 14.4965 2.14113 14.4259 1.88037 14.393C3.79882 12.4174 5.68467 10.4701 7.59845 8.50391Z" fill="#0F0F0F"/>
                <path d="M1.00351 13.4802C0.960302 13.2317 0.883484 12.9881 0.883484 12.7396C0.878683 9.24613 0.878683 5.75263 0.883484 2.25913C0.883484 2.01551 0.965103 1.76702 1.00351 1.5234C1.02752 1.51852 1.05152 1.50878 1.07553 1.50391C3.02479 3.52108 4.97404 5.53825 6.88009 7.51644C4.98844 9.47514 3.03919 11.4874 1.08993 13.5046C1.06113 13.4997 1.03232 13.49 1.00351 13.4802Z" fill="#0F0F0F"/>
                </svg>
                  <span className="w-[calc(100%-20px)]"> info@chameleoninfotech.com</span></li>
            </ul>
          </div>
          {/* bottom content */}
          <div className="border-t border-[#4444442f] w-full mt-12 footer-items">
            <ul className="font-medium mt-7 text-sm flex leading-[100%] justify-center flex-wrap">
              <li className="px-2 border-r-[1.5px]">
                Terms & Conditions
              </li>
              <li className="px-2 sm:border-r-[1.5px]">
                Privacy Policy
              </li>
              <li className="px-2 pt-5 sm:pt-0 w-full sm:w-auto text-center">
              {(new Date().getFullYear())} © Chameleon. All rights reserved. 
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
