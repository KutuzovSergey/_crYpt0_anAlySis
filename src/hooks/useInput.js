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

    const onChange = (e) => {
        let nawValue = { ...valueUserInfo };
        let newErrorStatus = { ...errorStatus };

        switch (e.target.name){
            case 'name': 
                nawValue = {...nawValue, valueName: e.target.value};
                newErrorStatus = {...newErrorStatus, errorName: false};
                break;
            case 'password':
                nawValue = {...nawValue, valuePassword: e.target.value};
                newErrorStatus = {...newErrorStatus, errorPassword: false};
                break;
            case 'repeatPassword':
                nawValue = {...nawValue, valueRepeatPassword: e.target.value};
                newErrorStatus = {...newErrorStatus, errorRepeatPassword: false};
                break;
            case 'mailPhone':
                nawValue = {...nawValue, valueMailPhone: e.target.value};
                newErrorStatus = {...newErrorStatus, errorMailPhone: false};
                break;
            default:
            break;
        }

        setValueUserInfo(nawValue);
        setErrorStatus(newErrorStatus);
    }

    const [formValid, setFormValid] = useState(false);

    const [error, setError] = useState({
        loginError: '',
        passwordError: '',
        repeatPassword: '',
        mailPhone: '',
    });

    const [formData, setFormData] = useState({})

    const validation = (e) =>{
        let errorCount = 0;
        const form = e.target;

        let newError = { ...error };
        let newErrorStatus = { ...errorStatus };
        let formDataObject = { ...formData }

        for (let i = 0; i < form.length; i++) {
            const element = form.elements[i];

            switch(element.name){
                case 'name':
                    if (!element.value) {
                        ++errorCount;
                        newError = { ...newError, loginError: 'Логин не может быть пустым'};
                        newErrorStatus = { ...newErrorStatus, errorName: true};
                    } else if (element.value.length < 2) {
                        ++errorCount;
                        newError = { ...newError, loginError: 'Логин меньше 2 символов'};
                        newErrorStatus = { ...newErrorStatus, errorName: true};
                    } else {
                        newError = { ...newError, loginError: ''};
                        newErrorStatus = { ...newErrorStatus, errorName: false};
                        formDataObject = { ...formDataObject, name: element.value};
                    }
                break;
                case 'password':
                    if (!element.value) {
                        ++errorCount;
                        newError = { ...newError, passwordError: 'Пароль не может быть пустым'};
                        newErrorStatus = { ...newErrorStatus, errorPassword: true};
                    } else if (element.value.length < 6) {
                        ++errorCount;
                        newError = { ...newError, passwordError: 'Пароль меньше 6 символов'};
                        newErrorStatus = { ...newErrorStatus, errorPassword: true};
                    } else if (element.value!== valueUserInfo.valueRepeatPassword) {
                        ++errorCount;
                        newError = { ...newError, passwordError: 'Пароли не совпадают'};
                        newErrorStatus = { ...newErrorStatus, errorPassword: true};
                    } else {
                        newError = { ...newError, passwordError: ''};
                        newErrorStatus = { ...newErrorStatus, errorPassword: false};
                        formDataObject = { ...formDataObject, password: element.value};
                    }
                break;
                case 'repeatPassword':
                    if(!element.value){
                        ++errorCount;
                        newError = { ...newError, repeatPassword: 'Поле не может быть пустым'};
                        newErrorStatus = { ...newErrorStatus, errorRepeatPassword: true};
                    } else if (element.value !== valueUserInfo.valuePassword) {
                        ++errorCount;
                        newError = { ...newError, repeatPassword: 'Пароли не совпадают'};
                        newErrorStatus = { ...newErrorStatus, errorRepeatPassword: true};
                    } else {
                        newError = { ...newError, repeatPassword: ''};
                        newErrorStatus = { ...newErrorStatus, errorRepeatPassword: false};
                        formDataObject = { ...formDataObject, repeatPassword: element.value};
                    }
                break;
                case 'mailPhone':
                    const incomplete_phone = /^[0-9-)(+\s]+$/;
                    const incomplete_email = /^[a-zA-Z_.@]+$/;
                    const pattern_mail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
                    const pattern_phone = /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d*)\)?)[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?)+)(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/i;
                    
                    if (!element.value) {
                        ++errorCount;
                        newError = { ...newError, mailPhone: 'Введите почту или телефон'};
                        newErrorStatus = { ...newErrorStatus, errorMailPhone: true};
                    } else if (incomplete_phone.test(String(element.value))) {
                        if (element.value.length > 26 || element.value.length < 9) {
                            ++errorCount;
                            newError = { ...newError, mailPhone: 'Не коректный телефон'};
                            newErrorStatus = { ...newErrorStatus, errorMailPhone: true};
                        } else if (!pattern_phone.test(String(element.value))) {
                            ++errorCount;
                            newError = { ...newError, mailPhone: 'Не коректный телефон'};
                            newErrorStatus = { ...newErrorStatus, errorMailPhone: true};
                        }
                        else {
                            newError = { ...newError, mailPhone: ''};
                            newErrorStatus = { ...newErrorStatus, errorMailPhone: false};
                            formDataObject = { ...formDataObject, mail: element.value};
                        }
                    } else if (incomplete_email.test(String(element.value))) {
                        if (!pattern_mail.test(String(element.value.toLowerCase()))) {
                            ++errorCount;
                            newError = { ...newError, mailPhone: 'Не коректный E-mail'};
                            newErrorStatus = { ...newErrorStatus, errorMailPhone: true};
                        } else {
                            newError = { ...newError, mailPhone: ''};
                            newErrorStatus = { ...newErrorStatus, errorMailPhone: false};
                            formDataObject = { ...formDataObject, mail: element.value};
                        }
                    } else {
                        ++errorCount;
                            newError = { ...newError, mailPhone: 'Не коректный E-mail'};
                            newErrorStatus = { ...newErrorStatus, errorMailPhone: true};
                    }
                break;
            }
        }

        setError(newError);
        setErrorStatus(newErrorStatus);
        setFormData(formDataObject);
        
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
        onChange,
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