import { useEffect, useState } from "react";
import { _email, _phone } from "../utils/regularExpressions";
import { ValueUserType, ErrorStatusType, ErrorType, CheckValidErrorsType, UseInputControlType, UseUploadImageType } from "../type/typesUseInput";



export const useInputControl = (): UseInputControlType => {
    const [valueUserInfo, setValueUserInfo] = useState<ValueUserType>({
        valueName: '',
        valuePassword: '',
        valueRepeatPassword: '',
        valueMail: '',
        valuePhone: '',
    });

    const [errorStatus, setErrorStatus] = useState<ErrorStatusType>({
        errorName: false,
        errorPassword: false,
        errorRepeatPassword: false,
        errorMail: false,
        errorPhone: false,
    });

    const [error, setError] = useState<ErrorType>({
        errorName: '',
        errorPassword: '',
        errorRepeatPassword: '',
        errorMail: '',
        errorPhone: '',
    });

    const onChangeInput = (e: React.ChangeEvent): void => {
        let newValue = { ...valueUserInfo };
        let newErrorStatus = { ...errorStatus };
        const formElem = e.target as HTMLInputElement;

        switch (formElem.name){
            case 'name': 
                newValue = {...newValue, valueName: formElem.value};
                if (newErrorStatus.errorName) {
                    newErrorStatus = {...newErrorStatus, errorName: false};
                }
                break;
            case 'password':
                newValue = {...newValue, valuePassword: formElem.value};
                if (newErrorStatus.errorPassword) {
                    newErrorStatus = {...newErrorStatus, errorPassword: false};
                }
                break;
            case 'repeatPassword':
                newValue = {...newValue, valueRepeatPassword: formElem.value};
                if (newErrorStatus.errorRepeatPassword) {
                    newErrorStatus = {...newErrorStatus, errorRepeatPassword: false};
                }
                break;
            case 'mail':
                newValue = {...newValue, valueMail: formElem.value};
                if (newErrorStatus.errorMail) {
                    newErrorStatus = {...newErrorStatus, errorMail: false};
                }
                break;
            case 'phone':
                newValue = {...newValue, valuePhone: formElem.value};
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

        let errorCount: number = 0;

        for (let i = 0; i < form.length; i++) {
            const element = form.elements[i] as HTMLInputElement;
            const elementValue: string = element.value.trim();
            
            switch(element.name){
                case 'name':
                    if (!elementValue) {
                        ++errorCount;
                        newError = { ...newError, errorName: 'Логин не может быть пустым'};
                    } else if (elementValue.length < 2) {
                        ++errorCount;
                        newError = { ...newError, errorName: 'Логин меньше 2 символов'};
                    } else {
                        newError = { ...newError, errorName: ''};
                    }
                break;
                case 'password':
                    if (!elementValue) {
                        ++errorCount;
                        newError = { ...newError, errorPassword: 'Пароль не может быть пустым'};
                    } else if (elementValue.length < 6) {
                        ++errorCount;
                        newError = { ...newError, errorPassword: 'Пароль меньше 6 символов'};
                    } else if (elementValue!== valueUserInfo.valueRepeatPassword) {
                        ++errorCount;
                        newError = { ...newError, errorPassword: 'Пароли не совпадают'};
                    } else {
                        newError = { ...newError, errorPassword: ''};
                    }
                break;
                case 'repeatPassword':
                    if(!elementValue){
                        ++errorCount;
                        newError = { ...newError, errorRepeatPassword: 'Поле не может быть пустым'};
                    } else if (elementValue !== valueUserInfo.valuePassword) {
                        ++errorCount;
                        newError = { ...newError, errorRepeatPassword: 'Пароли не совпадают'};
                    } else {
                        newError = { ...newError, errorRepeatPassword: ''};
                    }
                break;
                case 'mail':
                    if (!elementValue) {
                        newError = { ...newError, errorMail: 'Введите почту'};
                    } else if (!_email.test(String(elementValue.toLowerCase()))) {
                        newError = { ...newError, errorMail: 'Некорректный E-mail'};
                    } else {
                        newError = { ...newError, errorMail: ''};
                    }
                    break;
                case 'phone':
                    if (!elementValue) {
                        newError = { ...newError, errorPhone: 'Введите телефон'};
                    } else if (elementValue.length > 26) {
                        newError = { ...newError, errorPhone: 'Номер слишком длинный'};
                    } else if (elementValue.length < 9) {
                        newError = { ...newError, errorPhone: 'Номер слишком короткий'};
                    } else if (!_phone.test(String(elementValue))) {
                        newError = { ...newError, errorPhone: 'Некорректный номер телефона'};
                    } else {
                        newError = { ...newError, errorPhone: ''};
                    }
                    break;
                default:
                    break;
            }
        }
 
        setError(newError);

        const checkValidErrors = (): boolean =>{
            let counterError = 0;
            let validResultForm =false;

            for(let indexError in newError){
                if (newError[indexError] === '') {
                    counterError = ++counterError;
                }
            }

            if (counterError === Object.keys(newError).length) {
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

        if (error.errorName !== '') {
            newErrorStatus.errorName = true;
        } else {
            newErrorStatus.errorName = false;
        }

        if (error.errorPassword !== '') {
            newErrorStatus.errorPassword = true;
        } else {
            newErrorStatus.errorPassword = false;
        }

        if (error.errorRepeatPassword !== '') {
            newErrorStatus.errorRepeatPassword = true;
        } else {
            newErrorStatus.errorRepeatPassword = false;
        }

        if (error.errorMail !== '') {
            newErrorStatus.errorMail = true;
        } else {
            newErrorStatus.errorMail = false;
        }

        if (error.errorPhone !== '') {
            newErrorStatus.errorPhone = true;
        } else {
            newErrorStatus.errorPhone = false;
        }

        setErrorStatus(newErrorStatus);
       
    }, [error]);

    const resetFormValues = (reasonDataReset: boolean): void => {
        if (reasonDataReset) {
            setValueUserInfo({
                valueName: '',
                valuePassword: '',
                valueRepeatPassword: '',
                valueMail: '',
                valuePhone: '',
            });
            setError({
                errorName: '',
                errorPassword: '',
                errorRepeatPassword: '',
                errorMail: '',
                errorPhone: '',
            });
        } else {
            return
        }
    }

    return {
        valueUserInfo,
        errorStatus,
        onChangeInput,
        validation,
        error,
        resetFormValues,
    }

}

export const useUploadImage = (user: HTMLImageElement, inputUpload: any):any => {

    const [srcProfilePhoto, setSrcProfilePhoto] = useState<HTMLImageElement | any>(user);

    const uploadImage = (): void =>{
        inputUpload.current.click();
    }

    const showUploadedImage = (e: React.ChangeEvent<HTMLInputElement>): void =>{
        const inputFile: any = e.target as HTMLInputElement;
        const file = inputFile.files[0];

        let reader = new FileReader();

        if (file) {
            reader.readAsDataURL(file);

            reader.onload = function(e) {
                setSrcProfilePhoto(inputFile.result);
            }

            reader.onerror = () =>{
                console.error(reader.error);
            }
        }
    }

    const resetInputFile = (user: HTMLImageElement): void =>{
        setSrcProfilePhoto(user);
    }

    return [
        srcProfilePhoto,
        uploadImage,
        showUploadedImage,
        resetInputFile,
    ] as const
}