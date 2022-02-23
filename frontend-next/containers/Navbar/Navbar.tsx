import React from "react";

const Navbar = ({ className }: { className: string }) => {
  return (
    <div className="col-span-full grid grid-cols-12 gap-x-gridGap mt-11 overflow-hidden">
      <div className="col-start-2 col-span-4 lg:col-span-2">
        <h1 className="text-title font-bold text-transparent text-gradient bg-gradient-to-r from-purple to-blue select-none cursor-pointer">
          COMET
        </h1>
      </div>
      <div className={`${className} ml-auto hidden xl:flex`}>
        <ul className="list-none flex flex-row text-links h-full">
          <li className="px-[38px] my-auto">
            <span className="cursor-pointer hover:text-purple transition-colors">
              SKILLS
            </span>
          </li>
          <li className="px-[38px] my-auto">
            <span className="cursor-pointer hover:text-purple transition-colors">
              WORK
            </span>
          </li>
          <li className="px-[38px] my-auto">
            <span className="cursor-pointer hover:text-purple transition-colors">
              ABOUT
            </span>
          </li>
          <li className="pl-[38px] my-auto">
            <span className="cursor-pointer hover:text-purple transition-colors">
              CONTACT
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
