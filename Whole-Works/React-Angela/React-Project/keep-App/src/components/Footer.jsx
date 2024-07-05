import { useState } from "react";
import App from "../App";

function Footer() {
    const date = new Date()
    const currentYear = date.getFullYear();
    return <footer>
        <p>Copyright© {currentYear} </p>
    </footer>
}
export default Footer;
