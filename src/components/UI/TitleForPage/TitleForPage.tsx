import React from "react";

import cl from './TitleForPage.module.scss';

type Parameters = {
    children: string,
    props: Array<string | number>
}

const TitleForPage:React.FC<Parameters> = ({children, ...props}: Parameters) => {

    return (
        <div {...props} className={cl.title}>
            <h1 className={cl.title__text}>{children}</h1>
        </div>
    )
}

export default TitleForPage;