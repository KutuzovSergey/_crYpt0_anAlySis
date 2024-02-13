import React, {FC} from "react";

import styles from './ImitationButton.module.scss';

type Props = {
    children: string | React.ReactNode,
    activityIndicator?: boolean,
    onClick: () => void,
    id?: string
}

const  ImitationButton:FC<Props> = ({children, activityIndicator, ...props}: Props) =>{

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