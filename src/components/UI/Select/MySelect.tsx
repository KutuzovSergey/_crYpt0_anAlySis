import React from "react";

import cl from "./MySelect.module.scss"

type Props = {
    options: Array<any>,
    defaultVulue: string,
    value: string,
    onChange: (e: string) => void
}
const MySelect:React.FC<Props> = ({options, defaultVulue, value, onChange}: Props) =>{
    return (
        <select
            value={value}
            className={cl.select}
            onChange={(e) => onChange(e.target.value)}>
            <option disabled value=''>{defaultVulue}</option>
            {options.map((item) => 
                <option value={item.vulue} key={item.vulue}>{item.name}</option>
            )}
        </select>
    )
}

export default MySelect;