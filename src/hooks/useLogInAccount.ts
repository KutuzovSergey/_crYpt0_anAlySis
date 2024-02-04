import { useEffect, useState } from "react";
import { _email, _phone } from "../utils/regularExpressions";
import { ErrorType, ValueType, ErrorStatusType, CheckResultType, LogAccountType } from "../type/typeHooks/typesUseLogAccount";

export const useLogAccount = (modalLogin: boolean): LogAccountType => {

    const [errorMessage, setErrorMessage] = useState<ErrorType>({
        loginError: '',
        passwordError: '',
    });

    const [formLogValue, setFormLogValue] = useState<ValueType>({
        login: '',
        password: '',
    });

    const [loginErrorStatus, setLoginErrorStatus] = useState<ErrorStatusType>({
        loginStatus: false,
        passwordStatus: false,
    });

    const loginChange = (e: React.FormEvent<HTMLInputElement>): void =>{
        let newFormLogValue = { ...formLogValue };
        let newLoginErrorStatus = { ...loginErrorStatus };
        const inputElem = e.target as HTMLInputElement;

        switch (inputElem.name){
            case ('login'):
                newFormLogValue = {...formLogValue, login: inputElem.value};
                if(newFormLogValue.login){
                    newLoginErrorStatus.loginStatus = false;
                }
                break;
            case ('password'):
                newFormLogValue = {...formLogValue, password:inputElem.value};
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

    const validLogin = (e: React.FormEvent): CheckResultType =>{
        const form = e.target as HTMLFormElement;
        let newErrorMessage: ErrorType = { ...errorMessage };

        for (let i = 0; i < form.length; i++) {
            const element = form[i] as HTMLInputElement;
            let valueFormElem: string = element.value;

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

        const validCheckResult: CheckResultType = () =>{
            let formValid: boolean = false;

            for(let indexMessage in newErrorMessage){
                if (newErrorMessage[indexMessage as keyof ErrorType] === '') {
                    formValid = true;
                } else {
                    formValid = false;
                }
            }

            return formValid
        }

        return validCheckResult
    }

    const resetLog = (): void =>{
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

    useEffect( () => {
        if (modalLogin) {
            resetLog();
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

   