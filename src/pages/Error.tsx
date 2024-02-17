import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import TitleForPage from "../components/UI/TitleForPage/TitleForPage";

import "../styles/Error.scss";
import { changeErrorPages } from "../action/actionCreators";

const Error:React.FC = () => {
    const dispatch = useDispatch()

    useEffect(() =>{
        dispatch(changeErrorPages(true));
    }, []);

    return (
        <div className="error">
            <TitleForPage>Этой страницы не существует</TitleForPage>
        </div>
    )
}

export default Error;