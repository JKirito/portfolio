import Image from "next/image";
import Link from "next/link";
import React from "react";
import projectsData from "./projectsData";
import { ArrowRightIcon } from "@heroicons/react/outline";

const Projects = () => {
  const renderProjects = () => {
    return projectsData.map((el, index) => {
      return (
        <div
          key={`pr-${index}`}
          className="rounded-3xl  flex p-3 py-4 w-[450px] bg-cardPurple flex-col items-center justify-center relative"
        >
          <div className="p-2 h-[413px] w-[413px]  relative">
            <Image
              src={el.imageUrl}
              // width="413px"
              // height="413px"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <hr className="mt-7 w-[96%] h-1" />
          <div className="text-left mt-3 w-[96%]">
            <p className="text-projecthead font-bold">{el.title}</p>
            <p className="mt-1 text-projectsub text-grey">{el.description}</p>
            <Link href="/">
              <div className="mt-4 flex flex-row text-purple text-projectsub font-bold">
                <a className="cursor-pointer">visit website</a>
                <ArrowRightIcon className="w-4 ml-1 cursor-pointer" />
              </div>
            </Link>
          </div>
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
      <div className="grid grid-cols-3 gap-y-8 gap-x-[108px] mt-[84px]">
        {renderProjects()}
      </div>
    </>
  );
};

export default Projects;
