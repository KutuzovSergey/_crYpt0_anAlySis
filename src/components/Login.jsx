import React from "react";
import logo from "../images/logo.png";

import "../styles/componentStyles/Login.scss";

const Login = () =>{
    return (
        <div className="login">
            <img src={logo} alt="login" className="login__image" />
        </div>
    )
}

export default Login;