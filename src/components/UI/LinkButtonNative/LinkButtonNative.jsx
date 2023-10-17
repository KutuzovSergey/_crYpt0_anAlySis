import React from "react";

import cl from './LinkButtonNative.module.scss';

const  LinkButtonNative = ({children, ...props}) =>{

    const classButtons = [cl.LinkButton];

    if (props.activityIndicator) {
        classButtons.push(cl.LinkButton__active);
    }

    return (
        <div className={classButtons.join(' ')}>
            <a 
                className={cl.LinkButton__text} 
                target={props.target} 
                to={props.link}>{children}</a>
        </div>
    )
}

export default LinkButtonNative;