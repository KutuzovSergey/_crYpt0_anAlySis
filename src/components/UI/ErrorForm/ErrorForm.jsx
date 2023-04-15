import React from "react";

import cl from './ErrorForm.module.scss';

const ErrorForm = ({children}) =>{
    return (
        <div className={cl.error}>
            <span className={cl.error__text}>{children}</span>
        </div>
    )
}

export default ErrorForm;