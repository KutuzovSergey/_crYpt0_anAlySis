import React from "react";
import { Link } from 'react-router-dom';

import cl from './LinkButtonNative.module.scss';

const  LinkButtonNative = ({children, ...props}) =>{

    const classButtons = [cl.LinkButton];

    if (props.activityIndicator) {
        classButtons.push(cl.LinkButton__active);
    }

    return (
        <div className={classButtons.join(' ')}>
            <Link 
                className={cl.LinkButton__text} 
                target={props.target} 
                to={props.link}>{children}</Link>
        </div>
    )
}

export default LinkButtonNative;