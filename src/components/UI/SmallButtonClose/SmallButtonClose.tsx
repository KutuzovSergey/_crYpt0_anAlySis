import React from "react";

import cl from "./ErrorForm.module.scss";

type Props = {
    children: string
  }

const ErrorForm:React.FC<Props> = ({children}: Props) =>{

    return (
        <div className={cl.error}>
            <span className={cl.error__text}>{children}</span>
        </div>
    )
}

export default ErrorForm;