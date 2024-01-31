import React from "react";

import cl from "./ErrorForm.module.scss";

type Props = {
    children: string
    bottom: string,
    left: string
  }

const ErrorForm:React.FC<Props> = ({children, bottom, left}: Props) =>{

    const style = {
        bottom: bottom,
        left: left
    }

    return (
        <div className={cl.error} style={style}>
            <span className={cl.error__text}>{children}</span>
        </div>
    )
}

export default ErrorForm;