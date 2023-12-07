import { useEffect, useState, ChangeEvent } from "react";
import { _email, _phone } from "../utils/regularExpressions";
import {  InputEditingType } from "../type/typeHooks/typesInputEditing";



export const useInputEditing = (): InputEditingType => {
    const [appearance, getAppearance] = useState(false);

    const showInput = (): void =>{
        getAppearance(true);
    }

    const hideInput = (): void => {
        getAppearance(false);
    }
    
    return [appearance, showInput, hideInput] 
}