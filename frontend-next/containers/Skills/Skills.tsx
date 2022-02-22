import Image from "next/image";
import React from "react";
import skillData from "./skillData";

const renderSkills = () => {
  return skillData.map((el, idx) => {
    return (
      <div
        key={idx}
        className="w-full flex flex-col items-center justify-between mx-auto"
      >
        <div className="relative">
          <div
            style={{ backgroundColor: `${el.color}33` }}
            className="w-[100px] h-[100px] rounded-full flex items-center justify-center"
          >
            <Image
              src={el.url}
              width={el.width}
              height={el.height}
              className="select-none pointer-events-none"
            />
          </div>
        </div>
        <span className="mt-6 text-subheading">{el.title}</span>
      </div>
    );
  });
};

const Skills = () => {
  return (
    <>
      <div className="text-center pt-28">
        <h2 className="text-heading font-medium">Skill & Experiences</h2>
        <p className="text-subheading leading-[22px] mt-8">
          <span>Designed seamless interfaces, Built beautiful websites, &</span>
          <br />
          <span>Composed inspiring animations</span>
        </p>
      </div>
      <div className="grid grid-cols-8 gap-y-8 mx-32 mt-[84px]">
        {renderSkills()}
      </div>
    </>
  );
};

export default Skills;
