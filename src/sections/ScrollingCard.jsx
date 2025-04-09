import React from "react";

const cardData = [
  {
    id: 1,
    color: "#8D50ED",
    bgColor: "#F9F6FD",
    title: "Tailored IT Strategies for Your Business",
    description:
      "We thoroughly analyze your business needs and craft customized IT solutions that align with your goals, ensuring efficiency and scalability.",
  },
  {
    id: 2,
    color: "#C929CC",
    bgColor: "#FFF0FE",
    title: "Innovative Software Development",
    description:
      "We create cutting-edge software tailored to your specific needs, enhancing efficiency and productivity.",
  },
  {
    id: 3,
    color: "#F87979",
    bgColor: "#FFEFEE",
    title: "Cybersecurity & Compliance",
    description:
      "Our security solutions protect your data and ensure compliance with industry regulations.",
  },
  {
    id: 4,
    color: "#22C59C",
    bgColor: "#F1F9F7",
    title: "Cloud Computing Solutions",
    description:
      "Scalable and secure cloud solutions to optimize your IT infrastructure and operations.",
  },
  {
    id: 5,
    color: "#0176BD",
    bgColor: "#ECF5FE",
    title: "24/7 IT Support & Consulting",
    description:
      "Reliable IT support and strategic consulting to keep your business running smoothly.",
  },
];

function ScrollingCard() {
  return (
    <div className="overflow-hidden card-main flex flex-col justify-center items-center cardWrapper">
      <div className="container my-10 md:my-36">
        <div className="max-w-[730px] w-full mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold">
            Empowering Businesses with Cutting-Edge IT Solutions
          </h2>
          <p className="font-medium lg:text-lg capitalize mt-4">
            We are the ideal technology partner for providing scalable solutions.
          </p>
        </div>
        <div
          className="flex mt-10 md:mt-16 flex-wrap lg:flex-nowrap cards md:-mx-3 lg:-mx-6"
        >
          {cardData.map((card) => (
            <div
              key={card.id}
              className="py-11 px-7 rounded-3xl my-3 md:m-3 lg:my-0 lg:mx-6 w-full md:w-[calc(50%-24px)] lg:w-auto lg:min-w-[320px] card"
              style={{ backgroundColor: card.bgColor, color: card.color }}
            >
              <span className="w-9 h-9 flex items-center justify-center bg-white rounded-full font-bold">
                {card.id < 10 ? `0${card.id}` : card.id}
              </span>
              <h3 className="text-4xl my-7 font-heading leading-normal">
                {card.title}
              </h3>
              <p className="font-medium capitalize leading-[20px] lg:leading-[26px]">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ScrollingCard;