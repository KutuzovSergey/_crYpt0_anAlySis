import React from "react";

import styles from "./ErrorForm.module.scss";

type Parameter = {
    children: string
  }

const ErrorForm:React.FC<Parameter> = ({children}: Parameter) =>{

    return (
        <div className={styles.error}>
            <span className={styles.error__text}>{children}</span>
        </div>
    )
}

export default ErrorForm;