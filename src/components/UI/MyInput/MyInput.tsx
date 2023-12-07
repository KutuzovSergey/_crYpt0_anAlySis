import React, {FC} from "react";

import cl from './MyInput.module.scss';

type Props = {
    type: string,
    name: string,
    value: string,
    placeholder: string,
    autoComplete?: string,
    onFocus?: () => void,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const MyInput:FC<Props> = (props: Props) => {
    return (
        <input className={cl.myInput} {...props}/>
    )
}

export default MyInput;