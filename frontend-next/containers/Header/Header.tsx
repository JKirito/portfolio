import React from "react";
import { GeneralButton } from "../../components";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div className="col-span-full grid grid-cols-12 gap-x-gridGap">
      <div className="col-start-2 -ml-[20px] md:ml-0 col-span-full lg:col-span-full xl:col-span-6 flex flex-col mt-[100px] md:mt-[203px]">
        <div className="text-[32px] leading-8 sm:text-[32px] md:text-smallHeading text-center md:text-left lg:text-bigHeading font-medium">
          <p>Hi I{"'"}m Arpit </p>
          <p>
            <span className="text-transparent text-gradient bg-gradient-to-r from-yellow to-orange">
              FullStack
            </span>{" "}
            <span className="text-transparent text-gradient bg-gradient-to-r from-purple to-blue">
              Developer
            </span>
          </p>
        </div>
        <div className="mt-[28px]">
          <p className="md:text-subheading text-[14px] text-center md:text-left pr-8 md:pr-0">
            I’m also an open-source, DevOps enthusiast and learned a lot from
            <br className="hidden md:block" />
            the open-source community and also looking forword to collaberate
            <br className="hidden md:block" />
            and contribute to the community.
          </p>
        </div>
        <div className="mt-[64px] md:mt-[95px] flex sm:items-center justify-center md:justify-start">
          {/* Button Here */}
          <GeneralButton text="Get in touch!" />
        </div>
      </div>
      <div className="col-start-3 lg:col-start-6 xl:col-start-7 2xl:col-start-8 w-full col-span-full mt-6 hidden xl:block">
        <div className="w-[420px] h-[490px] 2xl:w-[520px] 2xl:h-[490px] rounded-3xl overflow-hidden relative mt-[109px] ml-auto">
          <video
            id="vdo"
            autoPlay={true}
            muted={true}
            loop={true}
            className="h-full absolute -left-[3.30rem] 2xl:-left-[0.22rem] max-w-none ml-auto"
          >
            <source src={"/assets/codevid.mp4"} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default Header;
