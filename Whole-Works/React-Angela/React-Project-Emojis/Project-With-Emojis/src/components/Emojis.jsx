import { useState } from "react";
import App from "../App";

function Emojis(props){
    return (
        
        <div className='card'>
          <div className='Biceps-container'>
            <p>{props.id}</p>
            <span className='tense-Biceps'>{props.emojis}</span>
            <p className='text-biceps'>{props.text}</p>
            <p className='biceps-des'>{props.des}</p>
          </div>
    
         </div>

    )
}
export default Emojis