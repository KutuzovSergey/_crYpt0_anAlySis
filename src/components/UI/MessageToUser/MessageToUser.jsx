import React from "react";

import cl from './MessageToUser.module.scss';

const MessageToUser = ({children}) =>{
    return (
        <div className={cl.message}>
            <span className={cl.message__text}>{children}</span>
        </div>
    )
}

export default MessageToUser;