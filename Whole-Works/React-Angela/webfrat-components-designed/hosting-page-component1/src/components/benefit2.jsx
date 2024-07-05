import { useState } from "react";
import App from "../App";

function Benefit2(props) {
  return (
    <div className="flex justify-center items-center gap-4 md:flex md:justify-center">
      <div className="bg-gray-100 w-24 h-12 lg:w-28 lg:h-14 rounded-full flex justify-center items-center">
        <img className="w-8" src={props.image} alt="" />
      </div>
      <div className="lg:mt-0 md:flex-col">
        <h1 className="text-[#3A86FF] font-bold text-xl">{props.heading}</h1>
        <p className="text-sm lg:text-base">{props.text}</p>
      </div>
      
    </div>
  );
}

export { Benefit2 };