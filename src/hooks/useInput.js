import { useState } from "react";

export const useInputControl = (modalRegistr) => {
    const [valueUserInfo, setValueUserInfo] = useState({
        valueName: '',
        valuePassword: '',
        valueRepeatPassword: '',
        valueMailPhone: '',
    });

    const [errorStatus, setErrorStatus] = useState({
        errorName: false,
        errorPassword: false,
        errorRepeatPassword: false,
        errorMailPhone: false,
    });

    const onChangeInput = (e) => {
        let newValue = { ...valueUserInfo };
        let newErrorStatus = { ...errorStatus };

        switch (e.target.name){
            case 'name': 
                newValue = {...newValue, valueName: e.target.value};
                newErrorStatus = {...newErrorStatus, errorName: false};
                break;
            case 'password':
                newValue = {...newValue, valuePassword: e.target.value};
                newErrorStatus = {...newErrorStatus, errorPassword: false};
                break;
            case 'repeatPassword':
                newValue = {...newValue, valueRepeatPassword: e.target.value};
                newErrorStatus = {...newErrorStatus, errorRepeatPassword: false};
                break;
            case 'mailPhone':
                newValue = {...newValue, valueMailPhone: e.target.value};
                newErrorStatus = {...newErrorStatus, errorMailPhone: false};
                break;
            case 'mail':
                newValue = {...newValue, valueMailPhone: e.target.value};
                newErrorStatus = {...newErrorStatus, errorMailPhone: false};
                break;
            default:
                break;
        }

        setValueUserInfo(newValue);
        setErrorStatus(newErrorStatus);
    }

    const [formValid, setFormValid] = useState(false);

    const [error, setError] = useState({
        loginError: '',
        passwordError: '',
        repeatPassword: '',
        mailPhone: '',
    });

    const validation = (e) =>{
        const incomplete_phone = /^[0-9-)(+\s]+$/;
        const incomplete_email = /^[a-zA-Z_.@]+$/;
        const pattern_mail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        const pattern_phone = /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d*)\)?)[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?)+)(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/i;
                    
        
        let errorCount = 0;
        const form = e.target;

        let newError = { ...error };
        let newErrorStatus = { ...errorStatus };
        // let newFormValid = formValid;

        for (let i = 0; i < form.length; i++) {
            const element = form.elements[i];
            const elementValue = element.value.trim();

            switch(element.name){
                case 'name':
                    if (!elementValue) {
                        ++errorCount;
                        newError = { ...newError, loginError: 'Логин не может быть пустым'};
                        newErrorStatus = { ...newErrorStatus, errorName: true};
                    } else if (elementValue.length < 2) {
                        ++errorCount;
                        newError = { ...newError, loginError: 'Логин меньше 2 символов'};
                    } else {
                        newError = { ...newError, loginError: ''};
                        newErrorStatus = { ...newErrorStatus, errorName: false};
                    }
                break;
                case 'password':
                    if (!elementValue) {
                        ++errorCount;
                        newError = { ...newError, passwordError: 'Пароль не может быть пустым'};
                        newErrorStatus = { ...newErrorStatus, errorPassword: true};
                    } else if (elementValue.length < 6) {
                        ++errorCount;
                        newError = { ...newError, passwordError: 'Пароль меньше 6 символов'};
                        newErrorStatus = { ...newErrorStatus, errorPassword: true};
                    } else if (elementValue!== valueUserInfo.valueRepeatPassword) {
                        ++errorCount;
                        newError = { ...newError, passwordError: 'Пароли не совпадают'};
                        newErrorStatus = { ...newErrorStatus, errorPassword: true};
                    } else {
                        newError = { ...newError, passwordError: ''};
                        newErrorStatus = { ...newErrorStatus, errorPassword: false};
                    }
                break;
                case 'repeatPassword':
                    if(!elementValue){
                        ++errorCount;
                        newError = { ...newError, repeatPassword: 'Поле не может быть пустым'};
                        newErrorStatus = { ...newErrorStatus, errorRepeatPassword: true};
                    } else if (elementValue !== valueUserInfo.valuePassword) {
                        ++errorCount;
                        newError = { ...newError, repeatPassword: 'Пароли не совпадают'};
                        newErrorStatus = { ...newErrorStatus, errorRepeatPassword: true};
                    } else {
                        newError = { ...newError, repeatPassword: ''};
                        newErrorStatus = { ...newErrorStatus, errorRepeatPassword: false};
                    }
                break;
                case 'mailPhone':
                    if (!elementValue) {
                        ++errorCount;
                        newError = { ...newError, mailPhone: 'Введите почту или телефон'};
                        newErrorStatus = { ...newErrorStatus, errorMailPhone: true};
                    } else if (incomplete_phone.test(String(elementValue))) {
                        if (elementValue.length > 26 || elementValue.length < 9) {
                            ++errorCount;
                            newError = { ...newError, mailPhone: 'Не коректный телефон'};
                            newErrorStatus = { ...newErrorStatus, errorMailPhone: true};
                        } else if (!pattern_phone.test(String(elementValue))) {
                            ++errorCount;
                            newError = { ...newError, mailPhone: 'Не коректный телефон'};
                            newErrorStatus = { ...newErrorStatus, errorMailPhone: true};
                        }
                        else {
                            newError = { ...newError, mailPhone: ''};
                            newErrorStatus = { ...newErrorStatus, errorMailPhone: false};
                        }
                    } else if (incomplete_email.test(String(elementValue))) {
                        if (!pattern_mail.test(String(elementValue.toLowerCase()))) {
                            ++errorCount;
                            newError = { ...newError, mailPhone: 'Не коректный E-mail'};
                            newErrorStatus = { ...newErrorStatus, errorMailPhone: true};
                        } else {
                            newError = { ...newError, mailPhone: ''};
                            newErrorStatus = { ...newErrorStatus, errorMailPhone: false};
                        }
                    } else {
                        ++errorCount;
                            newError = { ...newError, mailPhone: 'Не коректный E-mail'};
                            newErrorStatus = { ...newErrorStatus, errorMailPhone: true};
                    }
                    break;
                case 'mail':
                    
                    if (!elementValue) {
                        ++errorCount;
                        newError = { ...newError, mailPhone: 'Введите почту'};
                        newErrorStatus = { ...newErrorStatus, errorMailPhone: true};
                    } else if (!pattern_mail.test(String(elementValue.toLowerCase()))) {
                        ++errorCount;
                        newError = { ...newError, mailPhone: 'Некорректный E-mail'};
                        newErrorStatus = { ...newErrorStatus, errorMailPhone: true};
                    } else {
                        newError = { ...newError, mailPhone: ''};
                        newErrorStatus = { ...newErrorStatus, errorMailPhone: false};
                    }
                    break;
                default:
                    break;
            }
        }

        setError(newError);
        setErrorStatus(newErrorStatus);
        
        // console.log(valueUserInfo.valueMailPhone);
        // console.log(newErrorStatus);
        
        // console.log(errorCount);
        errorCount > 0 ? setFormValid(false) : setFormValid(true);
    }

    const resetFormValues = (reasonDataReset) => {
        if (reasonDataReset) {
            setValueUserInfo({
                valueName: '',
                valuePassword: '',
                valueRepeatPassword: '',
                valueMailPhone: '',
            });
            setError({
                loginError: '',
                passwordError: '',
                repeatPassword: '',
                mailPhone: '',
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
        formValid,
        error,
        resetFormValues,
    }

}

export const useUploadImage = (user, inputUpload) => {

    const [srcProfilePhoto, setSrcProfilePhoto] = useState(user);

    const uploadImage = () =>{
        inputUpload.current.click();
    }

    const showUploadedImage = (e) =>{
        const file = e.target.files[0];

        let reader = new FileReader();

        if (file) {
            reader.readAsDataURL(file);

            reader.onload = function(e) {
                setSrcProfilePhoto(e.target.result);
            }

            reader.onerror = () =>{
                console.log(reader.error);
            }
        }
    }

    const resetImputFile = (user) =>{
        setSrcProfilePhoto(user);
    }

    return [
        srcProfilePhoto,
        uploadImage,
        showUploadedImage,
        resetImputFile,
    ]
}