import React from "react";
import logo from "../images/logo.png";

import "../styles/componentStyles/Footer.scss";

const Footer:React.FC = () => {

    return (
        <div className="footer">
            <div className="footer__logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="footer__app__name">
                <span className="footer__name__text">Crypto analysis</span>
            </div>
        </div>
    )
}

export default Footer;