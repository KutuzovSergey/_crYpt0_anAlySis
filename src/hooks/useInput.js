import { useEffect, useState } from "react";

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

    const [error, setError] = useState({
        errorName: '',
        errorPassword: '',
        errorRepeatPassword: '',
        errorMailPhone: '',
    });

    const [formValid, setFormValid] = useState(false);

    const onChangeInput = (e) => {
        let newValue = { ...valueUserInfo };
        let newErrorStatus = { ...errorStatus };

        switch (e.target.name){
            case 'name': 
                newValue = {...newValue, valueName: e.target.value};
                if (newErrorStatus.errorName) {
                    newErrorStatus = {...newErrorStatus, errorName: false};
                }
                break;
            case 'password':
                newValue = {...newValue, valuePassword: e.target.value};
                if (newErrorStatus.errorPassword) {
                    newErrorStatus = {...newErrorStatus, errorPassword: false};
                }
                break;
            case 'repeatPassword':
                newValue = {...newValue, valueRepeatPassword: e.target.value};
                if (newErrorStatus.errorRepeatPassword) {
                    newErrorStatus = {...newErrorStatus, errorRepeatPassword: false};
                }
                break;
            case 'mailPhone':
                newValue = {...newValue, valueMailPhone: e.target.value};
                if (newErrorStatus.errorMailPhone) {
                    newErrorStatus = {...newErrorStatus, errorMailPhone: false};
                }
                break;
            case 'mail':
                newValue = {...newValue, valueMailPhone: e.target.value};
                // !newErrorStatus.errorMailPhone ?
                //     newErrorStatus = {...newErrorStatus, errorMailPhone: false}
                // :
                //     ''
                break;
            default:
                break;
        }

        setValueUserInfo(newValue);
        setErrorStatus(newErrorStatus);
    }

    const checkingFormValidity = (numberValidErrors) =>{
        console.log(`Количество ошибок: ${numberValidErrors}`);
        if (numberValidErrors > 0) {
            setFormValid(false);
            console.log(`были ошибки`);
        } else {
            setFormValid(true);
            console.log(`небыло ошибок`);
        }
    }
    const validation = (e) =>{
        const incomplete_phone = /^[0-9-)(+\s]+$/;
        const incomplete_email = /^[a-zA-Z_.@]+$/;
        const pattern_mail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        const pattern_phone = /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d*)\)?)[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?)+)(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/i;
                    
        const form = e.target;

        let newError = { ...error };
        let errorCount = 0;

        for (let i = 0; i < form.length; i++) {
            const element = form.elements[i];
            const elementValue = element.value.trim();
            
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
                case 'mailPhone':
                    if (!elementValue) {
                        ++errorCount;
                        newError = { ...newError, errorMailPhone: 'Введите почту или телефон'};
                    } else if (incomplete_phone.test(String(elementValue))) {
                        if (elementValue.length > 26 || elementValue.length < 9) {
                            ++errorCount;
                            newError = { ...newError, errorMailPhone: 'Не коректный телефон'};
                        } else if (!pattern_phone.test(String(elementValue))) {
                            ++errorCount;
                            newError = { ...newError, errorMailPhone: 'Не коректный телефон'};
                        }
                        else {
                            newError = { ...newError, errorMailPhone: ''};
                        }
                    } else if (incomplete_email.test(String(elementValue))) {
                        if (!pattern_mail.test(String(elementValue.toLowerCase()))) {
                            ++errorCount;
                            newError = { ...newError, mailPhone: 'Не коректный E-mail'};
                        } else {
                            newError = { ...newError, mailPhone: ''};
                        }
                    } else {
                        ++errorCount;
                            newError = { ...newError, errorMailPhone: 'Не коректный E-mail'};
                    }
                    break;
                case 'mail':
                    
                    if (!elementValue) {
                        ++errorCount;
                        newError = { ...newError, errorMailPhone: 'Введите почту'};
                    } else if (!pattern_mail.test(String(elementValue.toLowerCase()))) {
                        ++errorCount;
                        newError = { ...newError, errorMailPhone: 'Некорректный E-mail'};
                    } else {
                        newError = { ...newError, errorMailPhone: ''};
                    }
                    break;
                default:
                    break;
            }
        }
 
        setError(newError);

        checkingFormValidity(errorCount);
    }

    useEffect(() => {
        console.log(error);
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

        if (error.errorMailPhone !== '') {
            newErrorStatus.errorMailPhone = true;
        } else {
            newErrorStatus.errorMailPhone = false;
        }

        setErrorStatus(newErrorStatus);
       
    }, [error]);

    const resetFormValues = (reasonDataReset) => {
        if (reasonDataReset) {
            setValueUserInfo({
                valueName: '',
                valuePassword: '',
                valueRepeatPassword: '',
                valueMailPhone: '',
            });
            setError({
                errorName: '',
                errorPassword: '',
                errorRepeatPassword: '',
                errorMailPhone: '',
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