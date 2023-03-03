import React, { useEffect, useState } from "react";
import cl from './MyButtomSmall.module.scss';

const  MyButtonSmall = ({children, ...props}) =>{

    return (
        <div {...props} className={cl.myButtonSmall}>
            <span className={cl.myButtonSmall__text}>{children}</span>
        </div>
    )
}

export default MyButtonSmall;