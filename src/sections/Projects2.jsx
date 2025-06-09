import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Frame from "/project-frame.png";
import { projectData } from "../data/projects2";

gsap.registerPlugin(ScrollTrigger);

function Projects() {
  const [activeProject, setActiveProject] = useState(projectData[0]);
  const containerRef = useRef(null);
  const projectItemsRef = useRef([]);
  const rightColumnRef = useRef(null);
  const leftColumnRef = useRef(null);
  const lastItemRef = useRef(null);
  const mobileImagesRef = useRef([]);
  const ctxRef = useRef();

  useEffect(() => {
    const setupAnimations = () => {
      if (ctxRef.current) ctxRef.current.revert();
      
      ctxRef.current = gsap.context(() => {
        const isMobile = window.innerWidth < 768;

        if (isMobile) {
          projectItemsRef.current.forEach((item, index) => {
            if (!item) return;

            gsap.fromTo(item, 
              { opacity: 0, y: 20 },
              {
                opacity: 1,
                y: 0,
                duration: 0.8,
                scrollTrigger: {
                  trigger: item,
                  start: "top 80%",
                  toggleActions: "play none none none",
                  id: `mobile-project-${index}`
                }
              }
            );

            if (mobileImagesRef.current[index]) {
              gsap.fromTo(mobileImagesRef.current[index], 
                { opacity: 0 },
                {
                  opacity: 1,
                  duration: 0.8,
                  scrollTrigger: {
                    trigger: mobileImagesRef.current[index],
                    start: "top 80%",
                    toggleActions: "play none none none",
                    id: `mobile-image-${index}`
                  }
                }
              );
            }
          });
        } else {
          projectItemsRef.current.forEach((item, index) => {
            if (!item) return;

            ScrollTrigger.create({
              trigger: item,
              start: "top center",
              end: "bottom center",
              onEnter: () => setActiveProject(projectData[index]),
              onEnterBack: () => setActiveProject(projectData[index]),
              id: `desktop-project-${index}`
            });
          });

          ScrollTrigger.create({
            trigger: lastItemRef.current,
            start: "bottom bottom",
            onEnter: () => {
              gsap.to([rightColumnRef.current, leftColumnRef.current], {
                y: -200,
                duration: 0.5,
                ease: "power2.out"
              });
            },
            onLeaveBack: () => {
              gsap.to([rightColumnRef.current, leftColumnRef.current], {
                y: 0,
                duration: 0.5,
                ease: "power2.out"
              });
            },
            id: "desktop-slide-up"
          });

          gsap.fromTo(".project-image", 
            { opacity: 0 },
            {
              opacity: 1,
              duration: 1,
              scrollTrigger: {
                trigger: rightColumnRef.current,
                start: "top center",
                toggleActions: "play none none none",
                id: "desktop-image-fade"
              }
            }
          );
        }
      }, containerRef);
    };

    setupAnimations();
    const handleResize = () => setupAnimations();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (ctxRef.current) ctxRef.current.revert();
    };
  }, []);

  return (
    <div className="container my-10 md:my-36" ref={containerRef}>
      <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-center leading-tight capitalize">
        Innovative Projects & <br /> Success Stories
      </h2>
      <div className="flex flex-wrap mt-20">
        <div className="hidden md:block w-full md:w-1/2 md:order-1" ref={rightColumnRef}>
          <div className="md:sticky top-[15%]">
            <div className="relative">
              <img src={Frame} alt="Frame" />
              <div className="absolute inset-x-4 bottom-5 top-9">
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="w-full h-full project-image"
                />
              </div>
            </div>
            <div className="mt-6">
              <h5 className="font-bold">{activeProject.title}</h5>
              <ul className="capitalize text-sm font-medium gap-3 flex flex-wrap mt-5">
                {activeProject.features.map((feature, index) => (
                  <li key={index} className="py-1 border rounded-full inline-flex px-4">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 space-y-12" style={{ zIndex: 10 }} ref={leftColumnRef}>
          {projectData.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => {
                projectItemsRef.current[index] = el;
                if (index === projectData.length - 1) lastItemRef.current = el;
              }}
              className="max-w-[520px] md:min-h-[80dvh]"
            >
              <div className="transition-opacity duration-300">
                <h3
                  className="font-heading capitalize text-4xl md:text-5xl lg:text-6xl"
                  style={{ color: project.color }}
                >
                  <span className="text-4xl">
                    {project.id < 10 ? `0${project.id}` : project.id}.{" "}
                  </span>
                  {project.title}
                </h3>
                <div
                  className="font-medium mt-4 leading-[24px]"
                  dangerouslySetInnerHTML={{ __html: project.description }}
                />
              </div>
              
              <div className="md:hidden mt-8">
                <div className="relative" ref={el => mobileImagesRef.current[index] = el}>
                  <img src={Frame} alt="Frame" />
                  <div className="absolute inset-x-4 bottom-5 top-9">
                    <img src={project.image} alt={project.title} className="w-full h-full" />
                  </div>
                </div>
                <div className="mt-6">
                  <h5 className="font-bold">{project.title}</h5>
                  <ul className="capitalize text-sm font-medium gap-3 flex flex-wrap mt-5">
                    {project.features.map((feature, i) => (
                      <li key={i} className="py-1 border rounded-full inline-flex px-4">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
