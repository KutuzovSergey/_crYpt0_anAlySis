import { FC, useEffect } from "react";
import data_changes from "../../../images/icon/data_changes.png";
import MyInput from "../MyInput/MyInput";
import { useInputEditing } from "../../../hooks/useInputEditing";
import ButtonClose from "../ButtonClose/ButtonClose";
import ErrorForm from "../ErrorForm/ErrorForm";

import cl from "./DataString.module.scss";

type Props = {
    id: string,
    property_text: string,
    description_text: string,
    inputName: string,
    inputType: string,
    inputPlaceholder: string,
    inputAutoComplete: string,
    inputValue: string,
    inputOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    closeInput?: boolean,
    errorText?: string,
    errorStatus?: boolean,
    returningTheStateInput: () => void,
    resetFormValue: (inputId: string) => void,
}

const DataString:FC<Props> = (props: Props) =>{

    const [appearance, showInput, hideInput] = useInputEditing(props.returningTheStateInput, props.resetFormValue, props.closeInput);

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
                    {(props.errorText && props.errorStatus) 
                    &&
                    <ErrorForm>{props.errorText}</ErrorForm>}
                    <MyInput 
                        name={props.inputName}
                        type={props.inputType}
                        placeholder={props.inputPlaceholder}
                        autoComplete={props.inputAutoComplete}
                        value={props.inputValue}
                        onChange={ (e) => props.inputOnChange(e)} />
                    <div className={cl.dataUser__hide_input}>
                        <ButtonClose close={hideInput} id={props.id}/>
                    </div>
                </div>
            }
        </div>
    )
}

export default DataString;