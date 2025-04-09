import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Frame from "/project-frame.png";

gsap.registerPlugin(ScrollTrigger);

const projectData = [
  {
    id: 1,
    title: "Signaturia",
    description: "Lorem Ipsum is simply dummy text...",
    image: "/projects/signaturia.jpg",
    features: ["logo", "website design", "Shopify", "pOD Products"],
    color: "#8D50ED",
  },
  {
    id: 2,
    title: "Ticket Booking",
    description: "Lorem Ipsum is simply dummy text...",
    image: "/projects/ticket-booking.jpg",
    features: ["booking system", "user management", "payment integration"],
    color: "#C929CC",
  },
  {
    id: 3,
    title: "Jewelry Design",
    description: "Lorem Ipsum is simply dummy text...",
    image: "/projects/jewelry-design.jpg",
    features: ["custom designs", "3D modeling", "e-commerce"],
    color: "#EDA623",
  },
  {
    id: 4,
    title: "Office Management",
    description: "Lorem Ipsum is simply dummy text...",
    image: "/projects/office-management.jpg",
    features: ["task management", "team collaboration", "reporting"],
    color: "#F87979",
  },
];

function Projects() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textRefs = useRef([]);
  textRefs.current = [];

  const addToRefs = (el) => {
    if (el && !textRefs.current.includes(el)) {
      textRefs.current.push(el);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${projectData.length * 100}%`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      projectData.forEach((project, index) => {
        timeline.to(imageRef.current, {
          duration: 1,
          opacity: 0,
          onComplete: () => {
            imageRef.current.src = project.image;
            imageRef.current.alt = project.title;
          },
        });

        timeline.to(imageRef.current, {
          duration: 1,
          opacity: 1,
        });

        timeline.to(
          textRefs.current[index],
          {
            opacity: 1,
            duration: 0.5,
          },
          "<"
        );
        if (index !== 0) {
          timeline.to(
            textRefs.current[index - 1],
            {
              opacity: 0.3,
              duration: 0.5,
            },
            "<"
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="container my-36 projects-wrapper">
      <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-center leading-tight capitalize">
        Innovative Projects & <br /> Success Stories
      </h2>
      <div className="flex flex-wrap mt-20">
        <div className="w-1/2 space-y-12 sticky top-0" style={{ zIndex: 10 }}>
          {projectData.map((project, index) => (
            <div
              key={project.id}
              ref={addToRefs}
              className={`max-w-[520px] opacity-${index === 0 ? '100' : '30'} transition-opacity duration-300`}
            >
              <h3 className="font-heading capitalize text-6xl" style={{ color: project.color }}>
                <span className="text-4xl">{project.id < 10 ? `0${project.id}` : project.id}. </span>
                {project.title}
              </h3>
              <p className="font-medium mt-4">{project.description}</p>
            </div>
          ))}
        </div>
        <div className="w-1/2">
          <div className="relative">
            <img src={Frame} alt="Frame" />
            <div className="absolute inset-x-4 bottom-5 top-9">
              <img
                ref={imageRef}
                src={projectData[0].image}
                alt={projectData[0].title}
                className="w-full h-full project-image"
              />
            </div>
          </div>
          <div className="mt-6">
            <h5 className="font-bold">{projectData[0].title}</h5>
            <ul className="capitalize text-sm font-medium gap-3 flex flex-wrap mt-5">
              {projectData[0].features.map((feature, index) => (
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