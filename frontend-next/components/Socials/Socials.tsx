import React from "react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "..";

const Socials = () => {
  return (
    <div className="fixed left-[2.68rem] bottom-[9.1rem] flex flex-col z-10">
      <div className="flex justify-center items-center mt-[43px] relative cursor-pointer">
        <div className="absolute -left-2 -top-[13px] w-[48px] h-[48px] border border-black rounded-full"></div>
        <TwitterIcon color="black" width={24} height={24} />
      </div>
      <div className="flex justify-center items-center mt-[43px] relative cursor-pointer">
        <div className="absolute -left-2 -top-2 w-[48px] h-[48px] border border-black rounded-full"></div>
        <GithubIcon color="black" width={32} height={32} />
      </div>
      <div className="flex justify-center items-center mt-[43px] relative cursor-pointer">
        <div className="absolute -left-2 -top-3 w-[48px] h-[48px] border border-black rounded-full"></div>
        <LinkedinIcon color="black" width={22} height={22} />
      </div>
    </div>
  );
};

export default Socials;
