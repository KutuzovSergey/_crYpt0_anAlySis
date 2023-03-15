import React from "react";

const InfoInput = (props) =>{
    // console.log(props.valueList);
    return (
        <datalist>
            {
                props.valueList.map(val => 
                    <option value={val.text} />
                )
            }
        </datalist>
    )
}

export default InfoInput;