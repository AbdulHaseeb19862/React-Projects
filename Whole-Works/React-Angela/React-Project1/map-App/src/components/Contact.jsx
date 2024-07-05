import { useState } from "react";
import App from "../App";

function ContactCard(props) {
    return (
    <div className='Card'>

        <div className='top'>
            <p>{props.id}</p>
            <h2>{props.name}</h2>
            <img className='img1'
            src={props.img} 
            alt="my-picture" />
            </div>

            <div className='Bottom'>
                 <p>{props.email}</p>
                  <p>{props.phone}</p>
                  </div>

        </div>
    )
}

export default ContactCard