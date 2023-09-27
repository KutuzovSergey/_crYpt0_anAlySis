import React from "react";
import cl from './ImitationButton.module.scss';

const  ImitationButton = ({children, activityIndicator, ...props}) =>{

    const classButtons = [cl.ImitationButton];

    if (props.activityIndicator) {
        classButtons.push(cl.ImitationButton__active);
    }

    return (
        <div {...props} className={classButtons.join(' ')}>
            <span className={cl.ImitationButton__text}>{children}</span>
        </div>
    )
}

export default ImitationButton;