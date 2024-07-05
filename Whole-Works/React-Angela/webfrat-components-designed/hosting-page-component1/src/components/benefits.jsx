import { useState } from "react";
import App from "../App";
import tick from '/tick.svg';

function Benefits(props){
    return (
        
          <p className='flex items-center font-arial font-bold text-base md:text-base lg:text-sm text-[#2D2D2D]  '>
            <img src={tick} alt="Tick" className='mr-2' />{props.text}
          </p>
          
        
    )
}

export default Benefits;