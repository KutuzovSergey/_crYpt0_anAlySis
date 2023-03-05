import React, { useEffect, useState } from "react";
import cl from './MyButtomSmall.module.scss';

const  MyButtonSmall = ({children, ...props}) =>{

    const classButtons = [cl.myButtonSmall];

    console.log(props.activityIndicator);

    if (props.activityIndicator) {
        classButtons.push(cl.myButtonSmall__active);
    }

    return (
        <div {...props} className={classButtons.join(' ')}>
            <span className={cl.myButtonSmall__text}>{children}</span>
        </div>
    )
}

export default MyButtonSmall;