import React from "react";
import MyButtonSmall from "../MyButtonSmall/MyButtonSmall";

import cl from "./MyModal.module.scss";

const MyModal = ({children, ...props}) =>{
    const modalClass = [cl.myModal];
    const modalClassBlock = [cl.myModal__block];

    if (props.active) {
        modalClass.push(cl.active);
        modalClassBlock.push(cl.active);
    }
    
    return (
        <div 
            className={modalClass.join(' ')} 
            onClick={() => {props.setActive(false)}}>
            <div onClick={(e) => e.stopPropagation()} className={modalClassBlock.join(' ')}>
                <div className={cl.myModal__close}>
                    <MyButtonSmall onClick={() => props.setActive(false)}>&#10006;</MyButtonSmall>
                </div>
                {children}
            </div>
        </div>
    )
}

export default MyModal;