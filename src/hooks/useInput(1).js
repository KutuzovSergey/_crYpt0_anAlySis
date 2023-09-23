import { useEffect, useState } from "react";

export const useInputСontrol = () => {
    const [value, setValue] = useState({
        valueName: '',
        valuePassword: '',
        valueRepeatPassword: '',
        valueMailPhone: '',
    });
    
    // const [dirty, setDirty] = useState({
    //     dirtyName: false,
    //     dirtyPassword: false,
    //     dirtyRepeatPassword: false,
    //     dirtyMailPhone: false,
    // });

    const [errorStatus, setErrorStatus] = useState({
        errorName: false,
        errorPassword: false,
        errorRepeatPassword: false,
        errorMailPhone: false,
    });

    // useEffect( () => {
    // }, []);

    const onChange = (e) => {
        console.log(value);
        switch (e.target.name){
            case 'name': 
                setValue({...value, valueName: e.target.value});
                setErrorStatus({...errorStatus, errorName: false});
                break;
            case 'password':
                setValue({...value, valuePassword: e.target.value});
                setErrorStatus({...errorStatus, errorPassword: false});
                break;
            case 'repeatPassword':
                setValue({...value, valueRepeatPassword: e.target.value});
                setErrorStatus({...errorStatus, errorRepeatPassword: false});
                break;
            case 'mailPhone':
                setValue({...value, valueMailPhone: e.target.value});
                setErrorStatus({...errorStatus, errorMailPhone: false});
                break;
            default:
                break;
        }
    }

    // const onBlur = (e) =>{
    //     switch (e.target.name) {
    //         case 'name':
    //             setDirty({...dirty, dirtyName: true});
    //             break;
    //         case 'password':
    //             setDirty({...dirty, dirtyPassword: true});
    //             break;
    //         case 'repeatPassword':
    //             setDirty({...dirty, dirtyRepeatPassword: true});
    //             break;
    //         case 'mailPhone':
    //             setDirty({...dirty, dirtyMailPhone: true});
    //             break;
    //         default:
    //             break;
    //     }
    // }

    const [formValid, setFormValid] = useState(true);

    const [error, setError] = useState({
        loginError: '',
        passwordError: '',
        repeatPassword: '',
        mailPhone: '',
    });

    const addError = () => {
        setError({...error, loginError: 'Логин не моет быть пустым'});
        console.log('hf,j')
    }

    const validatuon = (e) =>{
        let index = 0;
        const form = e.target;

        for (let i = 0; i < form.length; i++) {
            const element = form.elements[i];
            // console.log(element.name);

            if (element.name === 'name') {
                if (!element.value) {
                    ++index;
                    // setError({...error, loginError: 'Логин не моет быть пустым'});
                    addError();
                    setErrorStatus({...errorStatus, errorName: true});
                    console.log(error);
                } else if (element.value.length < 2) {
                    ++index;
                    setError({...error, loginError: 'Логин не моет быть меньше двух символов'});
                    setErrorStatus({...errorStatus, errorName: true});
                } else {
                    setError({...error, loginError: ''});
                    setErrorStatus({...errorStatus, errorName: false});
                } 
            } else if (element.name === 'password') {
                if (!element.value) {
                    ++index;
                    setError({...error, passwordError: 'Пароль не моет быть пустым'});
                    setErrorStatus({...errorStatus, errorPassword: true});
                    console.log(error);
                } else if (element.value < 6) {
                    ++index;
                    setError({...error, passwordError: 'Пароль не моет быть меньше шести символов'});
                    setErrorStatus({...errorStatus, errorPassword: true});
                } else if (element.value !== value.valueRepeatPassword) {
                    ++index;
                    setError({...error, passwordError: 'Пароли не совпадают'});
                    setErrorStatus({...errorStatus, errorPassword: true});
                } else {
                    setError({...error, passwordError: ''});
                    setErrorStatus({...errorStatus, errorPassword: false});
                }
            } else if (element.name === 'repeatPassword') {
                if (element.value !== value.valuePassword) {
                    ++index;
                    setError({...error, repeatPassword: 'Пароли не совпадают'});
                    setErrorStatus({...errorStatus, errorRepeatPassword: true});
                } else {
                    setError({...error, repeatPassword: ''});
                    setErrorStatus({...errorStatus, errorRepeatPassword: false});
                }
            } else if (element.name === 'mailPhone') {
                const pattern_mail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                const pattern_phone = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

                if (!element.value) {
                    ++index;
                    setError({...error, mailPhone: 'Введите почту или телефон'});
                    setErrorStatus({...errorStatus, errorMailPhone: true});
                } else if (pattern_mail.test(String(element.value).toLowerCase())) {
                    ++index;
                    setError({...error, mailPhone: 'E-mail указан не корректно'});
                    setErrorStatus({...errorStatus, errorMailPhone: true});
                } else if (pattern_phone.test(String(element.value).toLowerCase())) {
                    ++index;
                    setError({...error, mailPhone: 'Телефон указан не корректно'});
                    setErrorStatus({...errorStatus, errorMailPhone: true});
                } else {
                    setError({...error, mailPhone: ''});
                    setErrorStatus({...errorStatus, errorMailPhone: false});
                }
            } 


            // switch(element.name) {
            //     case 'name':
                    
            //         if (!element.value) {
            //             ++index;
            //             // setError({...error, loginError: 'Логин не моет быть пустым'});
            //             addError();
            //             setErrorStatus({...errorStatus, errorName: true});
            //             console.log(error);
            //         } else if (element.value.length < 2) {
            //             ++index;
            //             setError({...error, loginError: 'Логин не моет быть меньше двух символов'});
            //             setErrorStatus({...errorStatus, errorName: true});
            //         } else {
            //             setError({...error, loginError: ''});
            //             setErrorStatus({...errorStatus, errorName: false});
            //         }
            //     break;
            //     case 'password':
            //         if (!element.value) {
            //             ++index;
            //             setError({...error, passwordError: 'Пароль не моет быть пустым'});
            //             setErrorStatus({...errorStatus, errorPassword: true});
            //             console.log(error);
            //         } else if (element.value < 6) {
            //             ++index;
            //             setError({...error, passwordError: 'Пароль не моет быть меньше шести символов'});
            //             setErrorStatus({...errorStatus, errorPassword: true});
            //         } else if (element.value !== value.valueRepeatPassword) {
            //             ++index;
            //             setError({...error, passwordError: 'Пароли не совпадают'});
            //             setErrorStatus({...errorStatus, errorPassword: true});
            //         } else {
            //             setError({...error, passwordError: ''});
            //             setErrorStatus({...errorStatus, errorPassword: false});
            //         }
            //         break;
            //     case 'repeatPassword':
            //         if (element.value !== value.valuePassword) {
            //             ++index;
            //             setError({...error, repeatPassword: 'Пароли не совпадают'});
            //             setErrorStatus({...errorStatus, errorRepeatPassword: true});
            //         } else {
            //             setError({...error, repeatPassword: ''});
            //             setErrorStatus({...errorStatus, errorRepeatPassword: false});
            //         }
            //         break;
            //     case 'mailPhone':
            //         const pattern_mail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            //         const pattern_phone = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

            //         if (!element.value) {
            //             ++index;
            //             setError({...error, mailPhone: 'Введите почту или телефон'});
            //             setErrorStatus({...errorStatus, errorMailPhone: true});
            //         } else if (pattern_mail.test(String(element.value).toLowerCase())) {
            //             ++index;
            //             setError({...error, mailPhone: 'E-mail указан не корректно'});
            //             setErrorStatus({...errorStatus, errorMailPhone: true});
            //         } else if (pattern_phone.test(String(element.value).toLowerCase())) {
            //             ++index;
            //             setError({...error, mailPhone: 'Телефон указан не корректно'});
            //             setErrorStatus({...errorStatus, errorMailPhone: true});
            //         } else {
            //             setError({...error, mailPhone: ''});
            //             setErrorStatus({...errorStatus, errorMailPhone: false});
            //         }
            //         break;
            //     default:
            //         break;
            // }
            
        }

        // console.log(index);
        
        index > 0 ? setFormValid(false) : setFormValid(true);
    }

    return {
        value,
        errorStatus,
        onChange,
        validatuon,
        formValid,
        error,
    }

}