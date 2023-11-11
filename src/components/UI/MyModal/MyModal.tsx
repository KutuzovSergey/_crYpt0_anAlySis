import React from "react";
import MyButtonSmall from "../MyButtonSmall/MyButtonSmall";

import cl from "./MyModal.module.scss";

type Props = {
    children: React.ReactNode | string,
    active: boolean,
    setActive: (bool: boolean) => void,
    activityIndicator?: boolean,
    className?: string
}

const MyModal:React.FC<Props> = ({children, ...props}: Props) =>{
    const modalClass: string[] = [cl.myModal];
    const modalClassBlock: string[] = [cl.myModal__block];

    if (props.active) {
        modalClass.push(cl.active);
        modalClassBlock.push(cl.active);
    }

    const closeMyModal = (): void => {
        props.setActive(false);
    }
    
    return (
        <div 
            className={modalClass.join(' ')} 
            onClick={() => {props.setActive(false)}}>
            <div onClick={(e) => e.stopPropagation()} className={modalClassBlock.join(' ')}>
                <div className={cl.myModal__close}>
                    <MyButtonSmall onClick={closeMyModal} activityIndicator={true}>&#10006;</MyButtonSmall>
                </div>
                {children}
            </div>
        </div>
    )
}

export default MyModal;