import React from "react";
import arrowIcon from "../assets/images/icon-arrow.svg";

const Input = ({placeholder}) => {
  return (
    <div className="flex w-full justify-center ">
      <input
        placeholder={placeholder}
        className="w-4/5 sm:w-5/12 border-none text-gray-200 caret-gray-200 outline-none p-4 text-lg py-2 sm:py-4 rounded-l-lg"
      />
      <button className="bg-gray-200 flex items-center p-4 px-5 rounded-r-lg text-center">
        <img src={arrowIcon} alt="arrow" />
      </button>
    </div>
  );
};

export default Input;
