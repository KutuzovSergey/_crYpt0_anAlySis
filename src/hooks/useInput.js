import { useEffect, useState } from "react";
import { _email, _phone } from "../utils/regularExpressions";

export const useInputControl = () => {
    const [valueUserInfo, setValueUserInfo] = useState({
        valueName: '',
        valuePassword: '',
        valueRepeatPassword: '',
        valueMail: '',
        valuePhone: '',
    });

    const [errorStatus, setErrorStatus] = useState({
        errorName: false,
        errorPassword: false,
        errorRepeatPassword: false,
        errorMail: false,
        errorPhone: false,
    });

    const [error, setError] = useState({
        errorName: '',
        errorPassword: '',
        errorRepeatPassword: '',
        errorMail: '',
        errorPhone: '',
    });

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
            case 'mail':
                newValue = {...newValue, valueMail: e.target.value};
                if (newErrorStatus.errorMail) {
                    newErrorStatus = {...newErrorStatus, errorMail: false};
                }
                break;
            case 'phone':
                newValue = {...newValue, valuePhone: e.target.value};
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

    const validation = (e) =>{
                    
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

        const checkValidErrors = () =>{
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

        return checkValidErrors()
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

    // const validCheckForm = () => {
    //     let validErrorStatus = false;
    //     let validValueInfo = false;
    //     let errorValid = false;
    //     let counterErrorStatus = 0;
    //     let counterValueInfo = 0;


    //     for(let indexStatus in errorStatus){
    //         if (!errorStatus[indexStatus]) {
    //             counterErrorStatus = ++counterErrorStatus;
    //         }
    //     }
    
    //     for(let indexValue in valueUserInfo){
    //         if (valueUserInfo[indexValue] != '') {
    //             counterValueInfo = ++counterValueInfo;
    //         }
    //     }

    //     const installVerificationCounter = (count, obj, validResult) =>{
    
    //         if (count === Object.keys(obj).length) {
    //             validResult = true;
    //         } else {
    //             count = 0;
    //         }

    //         return validResult
    //     }

    //     if (installVerificationCounter(counterErrorStatus, errorStatus, validErrorStatus) 
    //     && installVerificationCounter(counterValueInfo, valueUserInfo, validValueInfo)) {
    //         errorValid = true;
    //     }

    //     return errorValid
    // }

    const resetFormValues = (reasonDataReset) => {
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
                console.error(reader.error);
            }
        }
    }

    const resetInputFile = (user) =>{
        setSrcProfilePhoto(user);
    }

    return [
        srcProfilePhoto,
        uploadImage,
        showUploadedImage,
        resetInputFile,
    ]
}