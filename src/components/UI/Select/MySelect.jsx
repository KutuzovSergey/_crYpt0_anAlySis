import React from "react";
import cl from "./MySelect.module.scss"

const MySelect = ({options, defaultVulue, value, onChange}) =>{
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