import React from "react";

import cl from './TitleForPage.module.scss'

const TitleForPage = ({children, ...props}) => {

    return (
        <div {...props} className={cl.title}>
            <h1 className={cl.title__text}>{children}</h1>
        </div>
    )
}

export default TitleForPage;