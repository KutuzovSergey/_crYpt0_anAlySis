import React from "react";

import cl from './TitleMediumSized.module.scss'

const TitleMediumSized = ({children, ...props}) => {

    return (
        <div {...props} className={cl.title}>
            <h1 className={cl.title__text}>{children}</h1>
        </div>
    )
}

export default TitleMediumSized;