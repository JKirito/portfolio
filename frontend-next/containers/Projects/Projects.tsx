import Image from "next/image";
import React from "react";
import projectsData from "./projectsData";

const Projects = () => {
  const renderProjects = () => {
    return projectsData.map((el, index) => {
      return (
        <div
          key={`pr-${index}`}
          className="rounded-lg bg-cardPurple flex flex-col relative min-h-[600px]"
        >
          <Image
            src={el.imageUrl}
            width="100%"
            height="100%"
            layout="fill"
            objectFit="contain"
          />
          <p>{el.title}</p>
          <p>{el.description}</p>
        </div>
      );
    });
  };
  return (
    <>
      <div className="text-center pt-28">
        <h2 className="text-heading font-medium">
          My Creative{" "}
          <span className="text-transparent text-gradient bg-gradient-to-r from-yellow to-orange">
            Portfolio
          </span>{" "}
          Section
        </h2>
        <p className="text-subheading leading-[22px] mt-8">
          <span>Designed seamless interfaces, Built beautiful websites, &</span>
          <br />
          <span>Composed inspiring animations</span>
        </p>
      </div>
      <div className="grid grid-cols-3 gap-y-8 mx-32 mt-[84px]">
        {renderProjects()}
      </div>
    </>
  );
};

export default Projects;
