import { useState } from "react";

export const useInputСontrol = () => {
    const [value, setValue] = useState({
        valueName: '',
        valuePassword: '',
        valueRepeatPassword: '',
        valueMailPhone: '',
    });
    
    const [dirty, setDirty] = useState({
        dirtyName: false,
        dirtyPassword: false,
        dirtyRepeatPassword: false,
        dirtyMailPhone: false,
    });

    // const iteratingOccurrences = (e, setingFunction, mean, objMean, resultValue=true) => {

    //     switch (e.target.name){

    //         case 'name': 
    //             const name = `${mean}Name`;
    //             setingFunction({...objMean, name: resultValue});
    //             break;
    //         case 'password':
    //             const password = `${mean}Password`;
    //             setingFunction({...objMean, password: resultValue});
    //             break;
    //         case 'repeatPassword':
    //             const repeatPassword = `${mean}RepeatPassword`;
    //             setingFunction({...objMean, repeatPassword: resultValue});
    //             break;
    //         case 'mailPhone':
    //             const mailPhone = `${mean}MailPhone`;
    //             setingFunction({...objMean, mailPhone: resultValue});
    //             break;
    //         default:
    //             break;
    //     }
    // }

    const onChange = (e) => {
        console.log(value);
        // iteratingOccurrences(e, setValue, 'value', value,  e.target.value);
        switch (e.target.name){
            case 'name': 
                setValue({...value, valueName: e.target.value});
                break;
            case 'password':
                setValue({...value, valuePassword: e.target.value});
                break;
            case 'repeatPassword':
                setValue({...value, valueRepeatPassword: e.target.value});
                break;
            case 'mailPhone':
                setValue({...value, valueMailPhone: e.target.value});
                break;
            default:
                break;
        }
    }

    const onBlur = (e) =>{
        console.log(dirty)
        // iteratingOccurrences(e, setDirty, 'dirty', dirty);
        switch (e.target.name) {
            case 'name':
                setDirty({...dirty, dirtyName: true});
                break;
            case 'password':
                setDirty({...dirty, dirtyPassword: true});
                break;
            case 'repeatPassword':
                setDirty({...dirty, dirtyRepeatPassword: true});
                break;
            case 'mailPhone':
                setDirty({...dirty, dirtyMailPhone: true});
                break;
            default:
                break;
        }
    }

    return {
        value,
        dirty,
        onChange,
        onBlur,
    }

}

export const useValidation = (dirtyForm, valueForm) => {
    const [formValid, setFormValid] = useState(true);

    const [error, setError] = useState({
        loginError: '',
        paswordError: '',
        repeatPassword: '',
        mailPhone: '',
    });

    const validatuon = (e) =>{
        let index = 0;
        switch (e.target.name){
            case 'name':
                if (!e.target.value && dirtyForm.dirtyName) {
                    ++index;
                    setError({...error, loginError: 'Логин не моет быть пустым'});
                } else if (e.target.value.length < 2) {
                    ++index;
                    setError({...error, loginError: 'Логин не моет быть меньше двух символов'});
                } else {
                    setError({...error, loginError: ''});
                }
                break;
            case 'password':
                if (!e.target.value && dirtyForm.dirtyPassword) {
                    ++index;
                    setError({...error, paswordError: 'Пароль не моет быть пустым'});
                } else if (e.target.value.length < 6) {
                    ++index;
                    setError({...error, paswordError: 'Пароль не моет быть меньше шести символов'});
                } else if (e.target.value.length !== valueForm.valueRepeatPassword) {
                    ++index;
                    setError({...error, paswordError: 'Пароли не совпадают'});
                } else {
                    setError({...error, paswordError: ''});
                }
                break;
            case 'repeatPassword':
                if (e.target.value !== valueForm.valuePassword) {
                    ++index;
                    setError({...error, repeatPassword: 'Пароли не совпадают'});
                } else {
                    setError({...error, repeatPassword: ''});
                }
                break;
            case 'mailPhone':
                const pattern_mail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                const pattern_phone = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

                if (!e.target.value && dirtyForm.dirtyMailPhone) {
                    ++index;
                    setError({...error, mailPhone: 'Введите почту или телефон'});
                } else if (pattern_mail.test(String(e.target.value).toLowerCase())) {
                    ++index;
                    setError({...error, mailPhone: 'E-mail указан не корректно'});
                } else if (pattern_phone.test(String(e.target.value).toLowerCase())) {
                    ++index;
                    setError({...error, mailPhone: 'Телефон указан не корректно'});
                } else {
                    setError({...error, mailPhone: ''});
                }
                break;
            default:
                break;
        }
        
        index > 0 ? setFormValid(false) : setFormValid(true);
    }

    return [
        validatuon,
        formValid,
        error,
    ]
}