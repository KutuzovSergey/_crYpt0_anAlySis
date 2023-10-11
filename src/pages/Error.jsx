import React, { useContext, useEffect } from "react";
import { AppContext } from "../context";

import "../styles/Error.scss";

const Error = () => {
    const {setErrorPages,} = useContext(AppContext);

    useEffect(() =>{
        setErrorPages(true);
    }, []);
    return (
        <div className="error">
            <span className="error__text">Этой страницы не существует</span>
        </div>
    )
}

export default Error;