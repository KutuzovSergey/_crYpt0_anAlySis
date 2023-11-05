import React from "react";

import cl from './TitleMediumSized.module.scss'

type Props = {
    children: string,
}

const TitleMediumSized:React.FC<Props> = ({children}: Props) => {

    return (
        <div className={cl.title}>
            <h1 className={cl.title__text}>{children}</h1>
        </div>
    )
}

export default TitleMediumSized;