import React from "react";
import Button from '@mui/material/Button';

import cl from './MyButton.module.scss'

type Props = {
    children: string,
    disabled?: boolean,
    onClick?: () => void
}

const MyButton:React.FC<Props> = ({children, ...props}: Props) => {
    const buttonStyles: string[] = [cl.myButton];

    if (props.disabled) {
        buttonStyles.push(cl.myButton_disabled);
    }

    return (
        <button {...props} className={buttonStyles.join(' ')}>
            {children}
        </button>
    )
}

export default MyButton;