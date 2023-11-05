import React from "react";

import cl from './MyInput.module.scss';

type Props = {
    type: string,
    name: string,
    value: string,
    placeholder: string,
    autoComplete?: string,
    onChange: (e: React.FormEvent<HTMLInputElement>) => void
}

const MyInput:React.FC<Props> = (props: Props) => {
    return (
        <input className={cl.myInput} {...props}/>
    )
}

export default MyInput;