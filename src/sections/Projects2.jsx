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
  const lastItemRef = useRef(null);

  useEffect(() => {
    // Set up project item triggers
    projectItemsRef.current.forEach((item, index) => {
      if (!item) return;

      ScrollTrigger.create({
        trigger: item,
        start: "top center",
        end: "bottom center",
        onEnter: () => setActiveProject(projectData[index]),
        onEnterBack: () => setActiveProject(projectData[index]),
        // markers: true
      });
    });

    // Pin the right column until the last item is passed
    // Add this after the pin ScrollTrigger creation
    ScrollTrigger.create({
      trigger: lastItemRef.current,
      start: "bottom bottom",
      onEnter: () => {
        gsap.to(rightColumnRef.current, {
          y: 100,
          opacity: 0,
          duration: 0.5,
        });
      },
      onLeaveBack: () => {
        gsap.to(rightColumnRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.5,
        });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  useEffect(() => {
    gsap.fromTo(".project-image", { opacity: 0 }, { opacity: 1, duration: 1 });
  }, [activeProject]);

  return (
    <div className="container my-10 md:my-36" ref={containerRef}>
      <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-center leading-tight capitalize">
        Innovative Projects & <br /> Success Stories
      </h2>
      <div className="flex flex-wrap mt-20">
        <div className="w-full md:w-1/2 md:order-1" ref={rightColumnRef}>
          <div className="sticky top-[15%]">
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
                  <li
                    key={index}
                    className="py-1 border rounded-full inline-flex px-4"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 space-y-12" style={{ zIndex: 10 }}>
          {projectData.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => {
                projectItemsRef.current[index] = el;
                if (index === projectData.length - 1) {
                  lastItemRef.current = el;
                }
              }}
              className={`max-w-[520px] transition-opacity duration-300 ${
                activeProject.id === project.id ? "opacity-100" : "opacity-30"
              }`}
              style={{ minHeight: "80vh" }}
            >
              <h3
                className="font-heading capitalize text-6xl"
                style={{ color: project.color }}
              >
                <span className="text-4xl">
                  {project.id < 10 ? `0${project.id}` : project.id}.{" "}
                </span>
                {project.title}
              </h3>
              <div
                className={`font-medium mt-4 leading-[24px] ${
                  activeProject.id === project.id ? "" : "hidden"
                }`}
                dangerouslySetInnerHTML={{ __html: project.description }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
