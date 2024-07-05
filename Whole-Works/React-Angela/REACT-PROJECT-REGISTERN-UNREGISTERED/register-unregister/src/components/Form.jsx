import { useState } from "react";
import App from "../App";

function Form(props) {
    return (
      <form className="form">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        {props.registered === false &&
        <input type="password" placeholder="Confirm Password" />}
        <button type="submit">{props.registered === false ? "Register" : "Login"}</button>
      </form>
    );
  }
  
  export default Form;