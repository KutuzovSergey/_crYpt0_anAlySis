import { useEffect, useState, MouseEvent } from "react";
import { _email, _phone } from "../utils/regularExpressions";
import {  InputEditingType } from "../type/typeHooks/typesInputEditing";

export const useInputEditing = (returningTheStateInput: () => void, resetFormValue: (inputId: string) => void, closeInput?: boolean,): InputEditingType => {
    const [appearance, getAppearance] = useState(false);

    const showInput = (): void =>{
        getAppearance(true);
        returningTheStateInput();
    }

    const hideInput = (e: MouseEvent<HTMLDivElement>): void => {
        getAppearance(false);
        const target = e.target as HTMLElement;
        let inputId: string;

        if (target.id === '') {
            const parent = target.parentNode as HTMLElement;
            inputId = parent.id;
        } else {
            inputId = target.id;
        }

        resetFormValue(inputId);
    }

    useEffect( () => {
        if (closeInput) {
            getAppearance(false);
        }
    }, [closeInput]);
    
    return [appearance, showInput, hideInput] 
}