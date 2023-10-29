import React from "react";

import cl from "./MySelect.module.scss"

type Parameter = {
    options: Array<any>,
    defaultVulue: string,
    value: string,
    onChange: (e: string) => void
}
const MySelect:React.FC<Parameter> = ({options, defaultVulue, value, onChange}: Parameter) =>{
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