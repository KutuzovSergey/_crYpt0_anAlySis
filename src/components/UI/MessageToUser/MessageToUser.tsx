import React from "react";

import cl from './MessageToUser.module.scss';

type Parameters = {
    children: string,
}

const MessageToUser:React.FC<Parameters> = ({children}:Parameters) =>{
    return (
        <div className={cl.message}>
            <span className={cl.message__text}>{children}</span>
        </div>
    )
}

export default MessageToUser;