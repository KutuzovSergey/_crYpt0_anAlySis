import React from "react";
import { SelectProps } from "@mui/material";

import cl from "./MySelect.module.scss"

type Props = {
    options: any,
    defaultValue: string,
    value: string,
    onChange: (e: string) => void
}
const MySelect:React.FC<Props> = ({options, defaultValue, value, onChange}: Props) =>{
    return (
        <select
            value={value}
            className={cl.select}
            onChange={(e) => onChange(e.target.value)}>
            <option disabled value=''>{defaultValue}</option>
            {
                options.map((item: any) => 
                    <option value={item.value} key={item.value}>{item.name}</option>
                )
            }
        </select>
    )
}

export default MySelect;