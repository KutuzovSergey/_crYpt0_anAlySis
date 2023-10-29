import React from "react";

import styles from './ImitationButton.module.scss';

type Parameters = {
    children: string,
    activityIndicator: boolean,
    onClick: () => void,
}

const  ImitationButton:React.FC<Parameters> = ({children, activityIndicator, ...props}: Parameters) =>{

    const classButtons: string[] = [styles.ImitationButton];

    if (activityIndicator) {
        classButtons.push(styles.ImitationButton__active);
    }

    return (
        <div {...props} className={classButtons.join(' ')}>
            <span className={styles.ImitationButton__text}>{children}</span>
        </div>
    )
}

export default ImitationButton;