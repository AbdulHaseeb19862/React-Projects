import { useState } from "react";
import App from "../App";

function noteDetail(props){
    return (
        <div className='container'>
        <h3>{props.title}</h3>
        <h3>{props.content}</h3>
      </div>
    )
}

export default noteDetail