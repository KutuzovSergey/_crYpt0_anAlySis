import React from "react";
import Button from '@mui/material/Button';

import cl from './MyButton.module.scss'

const MyButton = ({children, ...props}) => {
    const buttonStyles = [cl.myButton];

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