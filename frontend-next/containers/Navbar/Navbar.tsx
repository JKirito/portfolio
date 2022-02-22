import React from "react";

const Navbar = () => {
  return (
    <div className="col-span-full grid grid-cols-12 gap-x-gridGap mt-11">
      <div className="col-start-2 col-span-2">
        <h1 className="text-title font-bold text-transparent text-gradient bg-gradient-to-r from-purple to-blue">
          COMET
        </h1>
      </div>
      <div className="col-start-10 -ml-20">
        <ul className="list-none flex flex-row text-links">
          <li className="px-[38px]">
            <span className="cursor-pointer">SKILLS</span>
          </li>
          <li className="px-[38px]">
            <span className="cursor-pointer">WORK</span>
          </li>
          <li className="px-[38px]">
            <span className="cursor-pointer">ABOUT</span>
          </li>
          <li className="px-[38px]">
            <span className="cursor-pointer">CONTACT</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
