import { useState } from "react";
import App from "../App";
var isLoggedIn = true;
function RenderConditionaly(){
    if(isLoggedIn === true){
        return <h1>Hello</h1>
    }else{
        return (<form className="form">
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button type="submit">Login</button>
          </form>
          )}
}

export {RenderConditionaly};

//You can render this directly this is the point