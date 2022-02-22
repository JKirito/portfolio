import React, { useState } from "react";

const Navigation = () => {
  const [active, setActive] = useState(1);
  const scrollToElement = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const attribute = e.currentTarget.getAttribute("data-id");
    const currentNumber = e.currentTarget.getAttribute("data-number");
    const element = document.querySelector(attribute);
    setActive(Number(currentNumber));
    element.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  };
  return (
    <div className="fixed right-8 top-0 flex items-center justify-center min-h-screen">
      <div>
        <div
          className={`w-3 h-3 my-5 rounded-full cursor-pointer transition-colors ${
            active === 1 ? "bg-purple" : "bg-dotPurpleLight"
          }`}
          onClick={scrollToElement}
          data-number="1"
          data-id="#navbar"
        >
          <a href="#navbar"></a>
        </div>
        <div
          className={`w-3 h-3 my-5 rounded-full cursor-pointer transition-colors ${
            active === 2 ? "bg-purple" : "bg-dotPurpleLight"
          }`}
          onClick={scrollToElement}
          data-id="#skills"
          data-number="2"
        >
          <a href="#skills"></a>
        </div>
        <div
          className={`w-3 h-3 my-5 rounded-full cursor-pointer transition-colors ${
            active === 3 ? "bg-purple" : "bg-dotPurpleLight"
          }`}
          onClick={scrollToElement}
          data-id="#projects"
          data-number="3"
        >
          <a href="#projects"></a>
        </div>
        <div
          className={`w-3 h-3 my-5 rounded-full cursor-pointer transition-colors ${
            active === 4 ? "bg-purple" : "bg-dotPurpleLight"
          }`}
          onClick={scrollToElement}
          data-id="#footer"
          data-number="4"
        >
          <a href="#footer"></a>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
