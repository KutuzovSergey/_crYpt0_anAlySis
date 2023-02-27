import React from "react";
import cl from "./MyModal.module.scss"

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
            <div className={modalClassBlock.join(' ')}>
                {children}
            </div>
        </div>
    )
}

export default MyModal;