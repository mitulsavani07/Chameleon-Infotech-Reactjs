import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Frame from "/project-frame.png";
import { projectData } from "../data/projects";

gsap.registerPlugin(ScrollTrigger);

function Projects() {
  const sectionRef = useRef(null);
  const textRefs = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const totalProjects = projectData.length;

      // Set initial styles for all refs
      textRefs.current.forEach((ref, i) => {
        gsap.set(ref.title, { opacity: i === 0 ? 1 : 0.3 });

        gsap.set(ref.desc, {
          opacity: i === 0 ? 1 : 0,
          height: i === 0 ? "auto" : 0,
          overflow: "hidden",
          marginTop: i === 0 ? "1rem" : 0,
        });
      });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${(totalProjects - 1) * window.innerHeight}`,
        scrub: 0.3,
        pin: true,
        anticipatePin: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          const newIndex = Math.round(progress * (totalProjects - 1));
        
          setCurrentIndex((prevIndex) => {
            if (prevIndex !== newIndex) {
              const prev = textRefs.current[prevIndex];
              const current = textRefs.current[newIndex];
        
              // Fade out previous title
              gsap.to(prev.title, { opacity: 0.3, duration: 0.3 });
        
              // Collapse previous description
              gsap.to(prev.desc, {
                height: 0,
                opacity: 0,
                marginTop: 0,
                overflow: "hidden",
                duration: 0.4,
                ease: "power2.inOut",
              });
        
              // Fade in current title
              gsap.to(current.title, { opacity: 1, duration: 0.3 });
        
              // Expand current description with smooth height
              const fullHeight = current.desc.scrollHeight;
        
              gsap.fromTo(
                current.desc,
                {
                  height: 0,
                  opacity: 0,
                  marginTop: 0,
                  overflow: "hidden",
                },
                {
                  height: fullHeight,
                  opacity: 1,
                  marginTop: "1rem",
                  duration: 0.5,
                  ease: "power2.inOut",
                  immediateRender: false,
                  onComplete: () => {
                    // let it go back to auto so it stays natural
                    gsap.set(current.desc, { height: "auto", clearProps: "height,overflow" });
                  },
                }
              );
            }
        
            return newIndex;
          });
        },        
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="container my-10 md:my-36 projects-wrapper">
      <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-center leading-tight capitalize">
        Innovative Projects & <br /> Success Stories
      </h2>
      <div className="flex flex-wrap mt-20 items-center">
        <div className="w-full md:w-1/2 space-y-12 sticky top-0 z-10">
          {projectData.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => {
                if (el) {
                  textRefs.current[index] = {
                    title: el.querySelector("h3"),
                    desc: el.querySelector("p"),
                  };
                }
              }}
              className="max-w-[520px] transition-opacity duration-300"
            >
              <h3
                className="font-heading capitalize text-4xl lg:text-5xl xl:text-6xl"
                style={{ color: project.color }}
              >
                <span className="text-3xl lg:text-4xl">
                  {project.id < 10 ? `0${project.id}` : project.id}.{" "}
                </span>
                {project.title}
              </h3>
              <p className="font-medium mt-4">{project.description}</p>
            </div>
          ))}
        </div>

        <div className="w-full md:w-1/2">
          <div className="relative">
            <img src={Frame} alt="Frame" />
            <div className="absolute inset-x-4 bottom-5 top-9">
              <img
                src={projectData[currentIndex].image}
                alt={projectData[currentIndex].title}
                className="w-full h-full object-cover transition-all duration-500"
              />
            </div>
          </div>

          <div className="mt-6">
            <h5 className="font-bold text-xl">{projectData[currentIndex].title}</h5>
            <ul className="capitalize text-sm font-medium gap-3 flex flex-wrap mt-5">
              {projectData[currentIndex].features.map((feature, index) => (
                <li key={index} className="py-1 border rounded-full inline-flex px-4">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;