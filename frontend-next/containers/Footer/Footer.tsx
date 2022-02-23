import React from "react";

const Footer = () => {
  return (
    <div className="bg-white rounded-[20px] min-h-[360px] p-16 flex flex-row justify-between">
      <div>
        <h2 className="text-[36px] font-medium">Discribe your project</h2>
        <p className="text-projecthead">
          Let{"'"}s create your beautiful product 🌈
        </p>
      </div>
      <div className="text-center">
        <button className="bg-ultraLightPurple rounded-lg px-[175px] py-12 text-projecthead">
          Get in touch
        </button>
        <p className="mt-[23px] text-right">
          or mail us at{" "}
          <span className="text-purple font-bold">
            byrxarpitsingh@gmail.com
          </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
