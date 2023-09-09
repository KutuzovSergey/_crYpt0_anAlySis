import React from "react";
import MyButtomSmall from "../MyButtomSmall/MyButtomSmall";

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
                    <MyButtomSmall onClick={() => props.setActive(false)}>&#10006;</MyButtomSmall>
                </div>
                {children}
            </div>
        </div>
    )
}

export default MyModal;