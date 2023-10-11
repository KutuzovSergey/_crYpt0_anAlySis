import { useEffect, useState } from "react";

export const useLogAccount = (modalLogin) => {

    const [formLog, setFormLog] = useState({
        login: '',
        password: ''
    });

    const [dirty, setDirty] = useState({
        loginDirty: false,
        passwordDirty: false
    })

    const [error, setError] = useState({
        loginError: 'Логин не моет быть пустым',
        passwordError: 'Пароль не может быть пустым'
    });

    const [formValid, setFormValid] = useState(false);

    const loginChange = (e) =>{
        setFormLog({...formLog, login: e.target.value});

        const reEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

        if(!reEmail.test(String(e.target.value).toLowerCase())){
            setError({...error, loginError: 'Логин указан не коректно, введите телефон или email'});
            if (!e.target.value) {
                setError({...error, loginError: 'Пароль не может быть пустым'});
            }
        } else {
            setError({...error, loginError: ''});
        } 
    }

    const passwordChange = (e) =>{
        setFormLog({...formLog, password: e.target.value});

        if (formLog.password.length < 5) {
            setError({...error, passwordError: 'Пороль не может быть меньше 6 символов'});
            if (!e.target.value) {
                setError({...error, passwordError: 'Пароль не может быть пустым'});
            }
        } else {
            setError({...error, passwordError: ''});
        }
    }

    const blurHandler = (e) =>{
        switch (e.target.name){
            case 'login':
                setDirty({...dirty, loginDirty: true})
                break;
            case 'password':
                setDirty({...dirty, passwordDirty: true})
                break;
            default: 
        }
    }

        useEffect( () => {
            if (error.loginError || error.passwordError) {
                setFormValid(false);
            } else {
                setFormValid(true);
            }

        }, [error]);

        useEffect( () => {
            if(modalLogin){
                setFormLog({...formLog, login: '', password: ''});
                setDirty({...dirty, loginDirty: false, passwordDirty: false});
            }
        }, [modalLogin]);

        return [
            dirty,
            error,
            formLog,
            formValid,
            blurHandler,
            loginChange,
            passwordChange,
        ]
}

   