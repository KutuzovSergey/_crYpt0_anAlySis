import React from "react";

import styles from "./ErrorForm.module.scss";

type Props = {
    children: string
  }

const ErrorForm:React.FC<Props> = ({children}: Props) =>{

    return (
        <div className={styles.error}>
            <span className={styles.error__text}>{children}</span>
        </div>
    )
}

export default ErrorForm;