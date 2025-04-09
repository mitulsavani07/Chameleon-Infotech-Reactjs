import React, { useState, useEffect } from "react";
import gsap from "gsap";
import Frame from "/project-frame.png";

const projectData = [
  {
    id: 1,
    title: "Signaturia",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    image: "/projects/signaturia.jpg",
    features: ["logo", "website design", "Shopify", "pOD Products"],
    color: "#8D50ED",
  },
  {
    id: 2,
    title: "Ticket Booking",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    image: "/projects/ticket-booking.jpg",
    features: ["booking system", "user management", "payment integration"],
    color: "#C929CC",
  },
  {
    id: 3,
    title: "Jewelry Design",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    image: "/projects/jewelry-design.jpg",
    features: ["custom designs", "3D modeling", "e-commerce"],
    color: "#EDA623",
  },
  {
    id: 4,
    title: "Office Management",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    image: "/projects/office-management.jpg",
    features: ["task management", "team collaboration", "reporting"],
    color: "#F87979",
  },
];

function Projects() {
  const [activeProject, setActiveProject] = useState(projectData[0]);

  const handleProjectClick = (project) => {
    setActiveProject(project);
  };

  useEffect(() => {
    gsap.fromTo(
      ".project-image",
      { opacity: 0 },
      { opacity: 1, duration: 1 }
    );
  }, [activeProject]);

  return (
    <div className="container my-10 md:my-36">
      <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-center leading-tight capitalize">
        Innovative Projects & <br /> Success Stories
      </h2>
      <div className="flex flex-wrap mt-20">
        <div className="w-1/2 space-y-12 sticky top-0" style={{ zIndex: 10 }}>
          {projectData.map((project) => (
            <div
              key={project.id}
              className={`max-w-[520px] transition-opacity duration-300 ${activeProject.id === project.id ? 'opacity-100' : 'opacity-30 cursor-pointer'}`}
              onClick={() => handleProjectClick(project)}
            >
              <h3 className="font-heading capitalize text-6xl" style={{ color: project.color }}>
                <span className="text-4xl">{project.id < 10 ? `0${project.id}` : project.id}. </span>
                {project.title}
              </h3>
              <p className={`font-medium mt-4 ${activeProject.id === project.id ? '' : 'hidden'}`}>
                {project.description}
              </p>
            </div>
          ))}
        </div>
        <div className="w-1/2">
          <div className="relative">
            <img src={Frame} alt="Frame" />
            <div className="absolute inset-x-4 bottom-5 top-9">
              <img src={activeProject.image} alt={activeProject.title} className="w-full h-full project-image" />
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
    </div>
  );
}

export default Projects;