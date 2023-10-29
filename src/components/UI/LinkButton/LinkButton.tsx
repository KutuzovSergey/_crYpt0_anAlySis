import React from "react";
import { Link } from 'react-router-dom';

import cl from './LinkButton.module.scss';

type Parameters = {
    children: string,
    link: string,
    activityIndicator: boolean
}

const  LinkButton:React.FC<Parameters> = ({children, ...props}:Parameters) =>{

    const classButtons: string[]= [cl.LinkButton];

    if (props.activityIndicator) {
        classButtons.push(cl.LinkButton__active);
    }

    return (
        <div className={classButtons.join(' ')}>
            <Link className={cl.LinkButton__text} to={props.link}>{children}</Link>
        </div>
    )
}

export default LinkButton;