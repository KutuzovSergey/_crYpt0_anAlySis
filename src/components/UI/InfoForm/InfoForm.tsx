import React from "react";

import styles from "./InfoForm.module.scss"

const InfoForm:React.FC<{infoText: string}> = (props: {infoText: string}) => {
    
    return (
        <div className={styles.info}>
            <div className={styles.info__block}>
                <span className={styles.info__text}>{props.infoText}</span>
            </div>
        </div>
    )
}

export default InfoForm;