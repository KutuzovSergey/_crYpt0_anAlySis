import { useEffect, useState, ChangeEvent, useRef } from "react";
import { _email, _phone } from "../utils/regularExpressions";
import { ValueUserType, ErrorStatusType, ErrorType, CheckValidErrorsType, NewUseInputControlType } from "../type/typeHooks/typesUseInput";
import { ProfilePhotoType } from "../type/typesMain";

export const useInputControl = (srcProfilePhoto: ProfilePhotoType, dirtyInput: boolean | undefined): NewUseInputControlType => {
    const [valueUserInfo, setValueUserInfo] = useState<ValueUserType>({
        userName: '',
        userPassword: '',
        userRepeatPassword: '',
        userMail: '',
        userPhone: '',
        userPhoto: ''
    });

    const [errorStatus, setErrorStatus] = useState<ErrorStatusType>({
        errorName: false,
        errorPassword: false,
        errorRepeatPassword: false,
        errorMail: false,
        errorPhone: false,
    });

    const [error, setError] = useState<ErrorType>({
        userName: '',
        userPassword: '',
        userRepeatPassword: '',
        userMail: '',
        userPhone: '',
    });

    const closeInput = useRef(false);

    const onChangeInput = (e: ChangeEvent): void => {
        let newValue = { ...valueUserInfo };
        let newErrorStatus = { ...errorStatus };
        const formElem = e.target as HTMLInputElement;

        switch (formElem.name){
            case 'name': 
                newValue = {...newValue, userName: formElem.value};
                if (newErrorStatus.errorName) {
                    newErrorStatus = {...newErrorStatus, errorName: false};
                }
                break;
            case 'password':
                newValue = {...newValue, userPassword: formElem.value};
                if (newErrorStatus.errorPassword) {
                    newErrorStatus = {...newErrorStatus, errorPassword: false};
                }
                break;
            case 'repeatPassword':
                newValue = {...newValue, userRepeatPassword: formElem.value};
                if (newErrorStatus.errorRepeatPassword) {
                    newErrorStatus = {...newErrorStatus, errorRepeatPassword: false};
                }
                break;
            case 'mail':
                newValue = {...newValue, userMail: formElem.value};
                if (newErrorStatus.errorMail) {
                    newErrorStatus = {...newErrorStatus, errorMail: false};
                }
                break;
            case 'phone':
                newValue = {...newValue, userPhone: formElem.value};
                if (newErrorStatus.errorPhone) {
                    newErrorStatus = {...newErrorStatus, errorPhone: false};
                }
                break;
            default:
                break;
        }
        setValueUserInfo(newValue);
        setErrorStatus(newErrorStatus);
    }

    const validation = (e:  React.FormEvent): CheckValidErrorsType =>{
        const form = e.target as HTMLFormElement;

        let newError: ErrorType = { ...error };

        for (let i = 0; i < form.length; i++) {
            const element = form.elements[i] as HTMLInputElement;
            const elementValue: string = element.value.trim();
            
            switch(element.name){
                case 'name':
                    if (elementValue.length < 2) {
                        newError = { ...newError, userName: 'Логин меньше 2 символов'};
                    } else {
                        newError = { ...newError, userName: '' };
                    }
                break;
                case 'password':
                    if (elementValue.length < 6 && elementValue.length > 1) {
                        newError = { ...newError, userPassword: 'Пароль меньше 6 символов'};
                    } else if (elementValue !== valueUserInfo.userRepeatPassword) {
                        newError = { ...newError, userPassword: 'Пароли не совпадают'};
                    } else {
                        newError = { ...newError, userPassword: ''};
                    }
                break;
                case 'repeatPassword':
                    if (elementValue !== valueUserInfo.userPassword) {
                        newError = { ...newError, userRepeatPassword: 'Пароли не совпадают'};
                    } else {
                        newError = { ...newError, userRepeatPassword: ''};
                    }
                break;
                case 'mail':
                    if (!_email.test(String(elementValue.toLowerCase()))) {
                        newError = { ...newError, userMail: 'Некорректный E-mail'};
                    } else {
                        newError = { ...newError, userMail: ''};
                    }
                    break;
                case 'phone':
                    if (elementValue.length > 26) {
                        newError = { ...newError, userPhone: 'Номер слишком длинный'};
                    } else if (elementValue.length < 9) {
                        newError = { ...newError, userPhone: 'Номер слишком короткий'};
                    } else if (!_phone.test(String(elementValue))) {
                        newError = { ...newError, userPhone: 'Некорректный номер телефона'};
                    } else {
                        newError = { ...newError, userPhone: ''};
                    }
                    break;
                default:
                    break;
            }
        }
 
        setError(newError);

        const checkValidErrors = (): boolean =>{
            let counterError: number = 0;
            let validResultForm: boolean = false;

            for(let indexError in newError){
                if (newError[indexError] === '') {
                    counterError = ++counterError;
                }
            }

            if (counterError === Object.keys(newError).length && 
            Object.keys(valueUserInfo).length !== 0) {
                validResultForm = true;
            } else {
                counterError = 0;
                validResultForm = false;
            }
            return validResultForm
        }

        return checkValidErrors
    }

    useEffect(() => {
        let newErrorStatus = { ...errorStatus };

        if (error.userName !== '') {
            newErrorStatus.errorName = true;
        } else {
            newErrorStatus.errorName = false;
        }

        if (error.userPassword !== '') {
            newErrorStatus.errorPassword = true;
        } else {
            newErrorStatus.errorPassword = false;
        }

        if (error.userRepeatPassword !== '') {
            newErrorStatus.errorRepeatPassword = true;
        } else {
            newErrorStatus.errorRepeatPassword = false;
        }

        if (error.userMail !== '') {
            newErrorStatus.errorMail = true;
        } else {
            newErrorStatus.errorMail = false;
        }

        if (error.userPhone !== '') {
            newErrorStatus.errorPhone = true;
        } else {
            newErrorStatus.errorPhone = false;
        }

        setErrorStatus(newErrorStatus);
       
    }, [error]);

    const resetFormValues = (): void => {
        setValueUserInfo({
            userName: '',
            userPassword: '',
            userRepeatPassword: '',
            userMail: '',
            userPhone: '',
        });
        setError({
            userName: '',
            userPassword: '',
            userRepeatPassword: '',
            userMail: '',
            userPhone: '',
        });
    }
 
    const closingTtheInput = (): void => {
        closeInput.current = true
    }

    const resetFormValue = (inputId: string) => {
        const newError = { ...error };
        const newValueUserInfo: any = { ...valueUserInfo };
        let id: any = inputId;
        
        if(id in newValueUserInfo ){
            newValueUserInfo[id] = '';
            newError[id] = '';
        }

        setValueUserInfo(newValueUserInfo);
        setError(newError);
    }

    const returningTheStateInput = (): void => {
        closeInput.current = false;
    }

    const checkingDataChanges = (): ValueUserType =>{
        const newValueUserInfo: ValueUserType = { ...valueUserInfo }
        let value: keyof ValueUserType;
        
        if (dirtyInput) {
            newValueUserInfo.userPhoto = srcProfilePhoto;
        }

        for(value in newValueUserInfo) {
            if (newValueUserInfo[value] === '') {
                delete newValueUserInfo[value]
            }
        }
        
        return newValueUserInfo
    }

    return {
        valueUserInfo,
        errorStatus,
        onChangeInput,
        validation,
        error,
        resetFormValues,
        closingTtheInput,
        returningTheStateInput,
        closeInput,
        resetFormValue,
        checkingDataChanges
    }
}