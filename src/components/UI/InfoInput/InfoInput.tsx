import React from "react";

import cl from "./InfoInput.module.scss";

type Props = {
    visible: boolean,
    datalistId: string | undefined,
    valueList: Array< any >,
    transferInput: (text: string) => void
}

const InfoInput:React.FC<Props> = (props: Props) =>{

    const infoClasses: Array<string> = [cl.info];
    const infoBlockClasses: Array<string> = [cl.info__block];

    if(props.visible){
        infoClasses.push(cl.info_active);
        infoBlockClasses.push(cl.info__block_active);
    }

    return (
        <datalist 
            id={props.datalistId}
            className={infoClasses.join(' ')}>
            {
                props.valueList.map( val => 
                    <option 
                        key={val.id} 
                        value={val.text} 
                        onClick={() => props.transferInput(val.text)}
                        className={infoBlockClasses.join(' ')}>{val.text}</option>
                )
            }
        </datalist>
    )
}

export default InfoInput;