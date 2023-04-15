import React from "react";
import cl from './MyButton.module.scss'

const MyButton = ({children, ...props}) => {
    const buttonStyles = [cl.myButton];

    console.log(props.disabled);

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