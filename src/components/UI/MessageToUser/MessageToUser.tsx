import React from "react";

import cl from './MessageToUser.module.scss';

type Props = {
    children: string,
}

const MessageToUser:React.FC<Props> = ({children}: Props) =>{
    return (
        <div className={cl.message}>
            <span className={cl.message__text}>{children}</span>
        </div>
    )
}

export default MessageToUser;