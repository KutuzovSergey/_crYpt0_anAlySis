import { FC } from "react";
import data_changes from "../../../images/icon/data_changes.png";
import MyInput from "../MyInput/MyInput";
import { useInputEditing } from "../../../hooks/useInputEditing";
import ButtonClose from "../ButtonClose/ButtonClose";

import cl from "./DataString.module.scss";

type Props = {
    property_text: string,
    description_text: string,
    inputName: string,
    inputType: string,
    inputPlaceholder: string,
    inputAutoComplete: string,
    inputValue: string,
    inputOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const DataString:FC<Props> = (props: Props) =>{

    const [appearance, showInput, hideInput] = useInputEditing();

    return (
        <div className={cl.dataUser}>
            <div className={cl.dataUser__property}>
                <span className={cl.dataUser__property_text}>{props.property_text}</span>
            </div>
            { !appearance ?
                <div className={cl.dataUser__description}>
                    <div className={cl.dataUser__description_block}>
                        <span className={cl.dataUser__description_text}>{props.description_text}</span>
                    </div>
                    <div className={cl.dataUser__button} onClick={showInput}>
                        <img src={data_changes} alt="search" />
                    </div>
                </div>
            :
                <div className={cl.dataUser__input}>
                    <MyInput 
                        name={props.inputName}
                        type={props.inputType}
                        placeholder={props.inputPlaceholder}
                        autoComplete={props.inputAutoComplete}
                        value={props.inputValue}
                        onChange={ (e) => props.inputOnChange(e) } />
                    <div className={cl.dataUser__hide_input}>
                        <ButtonClose close={hideInput}/>
                    </div>
                </div>
            }
        </div>
    )
}

export default DataString;