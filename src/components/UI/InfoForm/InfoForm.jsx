import React from "react";
import cl from "./InfoForm.module.scss"

const InfoForm = (props) => {

    return (
        <div className={cl.info}>
            <div className={cl.info__block}>
                <span className={cl.info__text}>{props.infoText}</span>
            </div>
        </div>
    )
}

export default InfoForm;