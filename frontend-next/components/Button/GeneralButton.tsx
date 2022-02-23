import React from "react";

const GeneralButton = ({ text }: { text: string }) => {
  return (
    <button className="bg-purple text-links inline-block py-[18px] px-[48px] md:px-[81px] text-white rounded-lg cursor-pointer border-[5px] border-buttonBorder">
      {text}
    </button>
  );
};

export default GeneralButton;
