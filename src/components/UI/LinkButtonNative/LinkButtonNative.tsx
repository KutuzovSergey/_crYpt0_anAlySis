import React from "react";
import { Link } from 'react-router-dom';

import cl from './LinkButtonNative.module.scss';

type Props = {
    children: string,
    link: string,
    target: string,
    activityIndicator: boolean
}

const  LinkButtonNative:React.FC<Props> = ({children, ...props}: Props) =>{

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