import React from "react";
import cl from './MyButtonSmall.module.scss';

const  MyButtonSmall = ({children, activityIndicator, ...props}) =>{

    const classButtons = [cl.myButtonSmall];

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