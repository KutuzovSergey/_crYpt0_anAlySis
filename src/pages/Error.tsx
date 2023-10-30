import React, { useContext, useEffect } from "react";
import { AppContext } from "../context";
import TitleForPage from "../components/UI/TitleForPage/TitleForPage";

import "../styles/Error.scss";

const Error:React.FC = () => {
    const {setErrorPages,} = useContext<any>(AppContext);

    useEffect(() =>{
        setErrorPages(true);
    }, []);
    return (
        <div className="error">
            <TitleForPage>Этой страницы не существует</TitleForPage>
        </div>
    )
}

export default Error;