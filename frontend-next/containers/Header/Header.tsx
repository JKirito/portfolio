import React from "react";
import { GeneralButton } from "../../components";

const Header = () => {
  return (
    <div className="col-span-full grid grid-cols-12 gap-x-gridGap">
      <div className="col-start-2 col-span-6 flex flex-col mt-[203px]">
        <div className="text-bigHeading font-medium">
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
          <p className="text-subheading">
            I’m also an open-source, DevOps enthusiast and learned a lot from
            <br />
            the open-source community and also looking forword to collaberate
            <br />
            and contribute to the community.
          </p>
        </div>
        <div className="mt-[95px]">
          {/* Button Here */}
          <GeneralButton text="Get in touch!" />
        </div>
      </div>
      <div className="col-start-9 w-full col-span-full mt-6">
        <div className="w-[520px] h-[490px] rounded-3xl overflow-hidden relative mt-[109px] ml-auto">
          <video
            id="vdo"
            autoPlay={true}
            muted={true}
            loop={true}
            className="h-full absolute -left-[0.22rem] max-w-none ml-auto"
          >
            <source src={"/assets/codevid.mp4"} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default Header;
