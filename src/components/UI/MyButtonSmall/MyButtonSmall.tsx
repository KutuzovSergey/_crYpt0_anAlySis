import React from "react";

import cl from './MyButtonSmall.module.scss';

type Parameters = {
    key?: number,
    children: string | number,
    activityIndicator: boolean,
    onClick: () => void,
}

const  MyButtonSmall:React.FC<Parameters> = ({children, activityIndicator, ...props}: Parameters) =>{

    const classButtons = [cl.myButtonSmall];

    if (activityIndicator) {
        classButtons.push(cl.myButtonSmall__active);
    }

    return (
        <div {...props} className={classButtons.join(' ')}>
            <span className={cl.myButtonSmall__text}>{children}</span>
        </div>
    )
}

export default MyButtonSmall;