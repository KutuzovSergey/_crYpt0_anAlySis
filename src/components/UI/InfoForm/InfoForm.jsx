import React from "react";
import cl from "./InfoForm.module.scss"

const InfoForm = (props) => {

    const infoClasses = [cl.info];
    const infoBlockClasses = [cl.info__block];

    if(props.visible){
        infoClasses.push(cl.info_active);
        infoBlockClasses.push(cl.info__block_active);
    }

    return (
        <div className={infoClasses.join(' ')}>
            {
                props.infoText.map((text) => 
                    <div 
                        className={infoBlockClasses.join(' ')}
                        key={text.id} 
                        onClick={() => {props.transferInput(text.text)}}>
                        <span className={cl.info__text}>{text.text}</span>
                    </div>
                )
            }
        </div>
    )
}

export default InfoForm;