import { useEffect, useState } from "react";
import { _email, _phone } from "../utils/regularExpressions";

export const useLogAccount = (modalLogin) => {

    const [errorMessage, setErrorMessage] = useState({
        loginError: '',
        passwordError: '',
    });

    const [formLogValue, setFormLogValue] = useState({
        login: '',
        password: '',
    });

    const [loginErrorStatus, setLoginErrorStatus] = useState({
        loginStatus: false,
        passwordStatus: false,
    });

    const loginChange = (e) =>{
        let newFormLogValue = { ...formLogValue };
        let newLoginErrorStatus = { ...loginErrorStatus };

        switch (e.target.name){
            case ('login'):
                newFormLogValue = {...formLogValue, login: e.target.value};
                if(newFormLogValue.login){
                    newLoginErrorStatus.loginStatus = false;
                }
                break;
            case ('password'):
                newFormLogValue = {...formLogValue, password: e.target.value};
                if (newFormLogValue.password) {
                    newLoginErrorStatus.passwordStatus = false;
                }
                break;
            default:
                break;
        }

        setFormLogValue(newFormLogValue);
        setLoginErrorStatus(newLoginErrorStatus);
    }

    const validLogin = (e) =>{
        const form = e.target;
        let newErrorMessage = { ...errorMessage };

        for (let i = 0; i < form.length; i++) {
            const element = form[i];
            let valueFormElem = element.value;

            switch(element.name){
                case ('login'):
                    if (!valueFormElem) {
                        newErrorMessage = {...newErrorMessage, loginError: 'Логин не может быть пустым'};
                    } else if(!_email.test(String(valueFormElem).toLowerCase())){
                        newErrorMessage = {...newErrorMessage, loginError: 'Некорректный E-mail'};
                    } else {
                        newErrorMessage = {...newErrorMessage, loginError: ''};
                    }
                    break;
                case ('password'):
                    if (!valueFormElem) {
                        newErrorMessage = {...newErrorMessage, passwordError: 'Пароль не может быть пустым'};
                    } else if (valueFormElem.length < 5) {
                        newErrorMessage = {...newErrorMessage, passwordError: 'Пороль не может быть меньше 6 символов'};
                    } else {
                        newErrorMessage = {...newErrorMessage, passwordError: ''};
                    }
                    break;
                default:
                    break;
            }
        }

        setErrorMessage(newErrorMessage);

        const validCheckResult = () =>{
            let formValid = false;

            for(let indexMessage in newErrorMessage){
                if (newErrorMessage[indexMessage] === '') {
                    formValid = true;
                } else {
                    formValid = false;
                }
            }

            return formValid
        }

        return validCheckResult()
    }

    const resetLog = () =>{
        setFormLogValue({
            login: '',
            password: ''
        });
    }

    useEffect( () => {
        let newLoginErrorStatus = { ...loginErrorStatus };

        if (errorMessage.loginError != '') {
            newLoginErrorStatus.loginStatus = true;
        } else {
            newLoginErrorStatus.loginStatus = false;
        }

        if (errorMessage.passwordError != '') {
            newLoginErrorStatus.passwordStatus = true;
        } else {
            newLoginErrorStatus.passwordStatus = false;
        }

        setLoginErrorStatus(newLoginErrorStatus);
    }, [errorMessage]);

    useEffect( () => {
        if(modalLogin){
            setErrorMessage({
                loginError: '',
                passwordError: '',
            });
        }
    }, [modalLogin]);

    return [
        errorMessage,
        formLogValue,
        loginErrorStatus,
        loginChange,
        validLogin,
        resetLog,
    ]
}

   