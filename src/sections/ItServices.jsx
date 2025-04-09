import React from "react";

const services = [
  {
    title: "Web Design",
    description:
      "We build high-performance eCommerce websites for retail, fashion, electronics, and more, ensuring smooth functionality across all devices.",
    image: "web-design.svg",
    bgcolor: "#F9F6FD",
    color: "#8D50ED",
    tools: [
      { src: "html.svg", alt: "HTML" },
      { src: "css.svg", alt: "CSS" },
      { src: "javascript.svg", alt: "JavaScript" },
      { src: "angular.svg", alt: "Angular" },
      { src: "vue.svg", alt: "Vue" },
    ],
  },
  {
    title: "Web Development",
    description:
      "We build high-performance eCommerce websites for retail, fashion, electronics, and more, ensuring smooth functionality across all devices.",
    image: "web-development.svg",
    bgcolor: "#FFF0FE",
    color: "#C929CC",
    tools: [
      { src: "nodejs.svg", alt: "Node.js" },
      { src: "reactjs.svg", alt: "React.js" },
      { src: "expressjs.svg", alt: "Express.js" },
      { src: "php.svg", alt: "PHP" },
      { src: "nextjs.svg", alt: "Next.js" },
      { src: "mysql.svg", alt: "MySQL" },
    ],
  },
  {
    title: "Mobile App Developement",
    description:
      "We build high-performance eCommerce websites for retail, fashion, electronics, and more, ensuring smooth functionality across all devices.",
    image: "mobile-app-developement.svg",
    bgcolor: "#FFF8EE",
    color: "#EDA623",
    tools: [
      { src: "flutter.svg", alt: "flutter" },
      { src: "android.svg", alt: "android" },
      { src: "java.svg", alt: "java" },
      { src: "kotlin.svg", alt: "kotlin" },
      { src: "swift.svg", alt: "swift" },
      { src: "ios.svg", alt: "ios" },
    ],
  },
  {
    title: "UI / UX Designing",
    description:
      "We build high-performance eCommerce websites for retail, fashion, electronics, and more, ensuring smooth functionality across all devices.",
    image: "ui-ux-designing.svg",
    bgcolor: "#FFEFEE",
    color: "#F87979",
    tools: [
      { src: "photoshop.svg", alt: "photoshop" },
      { src: "illustrator.svg", alt: "illustrator" },
      { src: "figma.svg", alt: "figma" },
      { src: "sketch.svg", alt: "sketch" },
    ],
  },
  {
    title: "E-commerce",
    description:
      "We build high-performance eCommerce websites for retail, fashion, electronics, and more, ensuring smooth functionality across all devices.",
    image: "e-commerce.svg",
    bgcolor: "#F1F9F7",
    color: "#22C59C",
    tools: [
      { src: "shopify.svg", alt: "shopify" },
      { src: "wordpress.svg", alt: "wordpress" },
    ],
  },
  {
    title: "Content management system",
    description:
      "We build high-performance eCommerce websites for retail, fashion, electronics, and more, ensuring smooth functionality across all devices.",
    image: "content-management-system.svg",
    bgcolor: "#ECF5FE",
    color: "#0176BD",
    tools: [
      { src: "laravel.svg", alt: "laravel" },
      { src: "codeigniter.svg", alt: "codeigniter" },
      { src: "figma.svg", alt: "figma" },
      { src: "sketch.svg", alt: "sketch" },
    ],
  },
  // Add other services here...
];

const ServiceCard = ({ title, description, image, color, tools, bgcolor }) => (
  <div
    className={`bg-[${bgcolor}] px-4 py-4 md:py-8 md:px-8 lg:px-20 lg:py-14 rounded-3xl flex items-center flex-wrap servicecards`}
  >
    <div className="w-full md:w-1/3 md:order-1">
      <img
        src={`/it-services/${image}`}
        alt={title}
        className="max-w-60 sm:max-w-80 mx-auto w-full"
      />
    </div>
    <div className="w-full md:w-2/3 md:pr-5 lg:pr-20 pt-10 md:pt-0 text-center md:text-left">
      <h3
        className={`text-[${color}] font-heading text-2xl lg:text-4xl mb-4 lg:mb-10`}
      >
        {title}
      </h3>
      <p className="font-medium text-base lg:text-lg capitalize">
        {description}
      </p>
      <ul className="text-sm lg:text-base space-y-3 lg:ml-7 my-5 lg:my-9">
        <li>Custom eCommerce websites designed for your business</li>
        <li>Custom eCommerce websites designed for your business</li>
        <li>Custom eCommerce websites designed for your business</li>
      </ul>
      <ul className="flex -mx-1 md:-mx-2 justify-center md:justify-start">
        {tools.map((tool, index) => (
          <li key={index} className="p-1 md:p-2">
            <span
              href="#"
              className={`bg-[${color}] drop-shadow-lg w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 flex items-center justify-center rounded-full`}
            >
              <img
                src={`/it-services/${tool.src}`}
                alt={tool.alt}
                className="w-6 h-6 lg:w-8 lg:h-8 mix-blend-luminosity"
              />
            </span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

function ItServices() { 
  return (
    <div className="container my-10 md:my-36 servicecontainer">
      <div className="sticky top-0 overlap-text">
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold leading-tight max-w-[600px] w-full mx-auto text-center">
          Innovative IT Services for Your Business Growth
        </h2>
        <h4 className="text-[14vh] md:text-[20vh] lg:text-[30vh] text-center font-heading text-[#F3F8FD] leading-tight">
          ABOUT <br /> SERVICE
        </h4>
      </div>
      <div className="max-w-[1300px] mx-auto space-y-20 md:space-y-40 lg:space-y-50 servicewrapper relative z-40">
        {services.map((service, index) => (
          <div key={index} className="servicecard-wrapper">
            <ServiceCard {...service} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItServices;
