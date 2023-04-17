import React, { useContext, useState, useEffect } from "react";
import MyInput from "./UI/MyInput/MyInput";
import MyButton from "./UI/MyButton/MyButton";
import { AutchContext } from "../context";
import ErrorForm from "./UI/ErrorForm/ErrorForm";

const ModalLoginForm = () => {

    const {setIsAuth, setModalLogin, modalLogin} = useContext(AutchContext);

    const [form, setForm] = useState({
        login: '',
        pasword: ''
    });

    // const useValidation = (value, validations) =>{

    //     const [isEmpty, setIsEmpty] = useState(true)

    //     useEffect(() => {
    //         for(const validation in validations){
    //             switch (validation){
    //                 case 'minLength':
    //                     break;
    //                 case 'isEmpty':
    //                     value ? setIsEmpty(false) : setIsEmpty(true);
    //                     break;
    //                     default: 
    //             }
    //         }
    //     }, [value])

    // }

    const [dirty, setDirty] = useState({
        loginDirty: false,
        paswordDirty: false
    })

    const [error, setError] = useState({
        loginError: 'Логин не моет быть пустым',
        paswordError: 'Пароль не может быть пустым'
    });

    const [formValid, setFormValid] = useState(false);

    const loginChange = (e) =>{
        setForm({...form, login: e.target.value});

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

    const paswordChange = (e) =>{
        setForm({...form, pasword: e.target.value});

        if (form.pasword.length < 6) {
            setError({...error, paswordError: 'Пороль не может быть меньше 6 символов'});
            if (!e.target.value) {
                setError({...error, paswordError: 'Пароль не может быть пустым'});
            }
        } else {
            setError({...error, paswordError: ''});
        }
    }

    const login = event =>{
        event.preventDefault();
        setIsAuth(true);
        localStorage.isAuth = true;
        setModalLogin(false);
    }

    const blurHandler = (e) =>{
        switch (e.target.name){
            case 'login':
                setDirty({...dirty, loginDirty: true})
                break;
            case 'pasword':
                setDirty({...dirty, paswordDirty: true})
                break;
                default: 
        }
    }

    useEffect( () => {
        if (error.loginError || error.paswordError) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }

    }, [error]);

    useEffect( () => {
        if(modalLogin){
            setForm({...form, login: '', pasword: ''});
            setDirty({...dirty, loginDirty: false, paswordDirty: false})
        }
    }, [modalLogin]);

    return (
        <form className="form" onSubmit={login}> 
            <div className="form__title">
                <span className="form__title_text">Войти в аккаунт</span>
            </div>
            <div className="form__input">
                {(dirty.loginDirty && error.loginError) && <ErrorForm>{error.loginError}</ErrorForm>}
                <MyInput
                    type='text'
                    name='login'
                    value={form.login}
                    onChange={ (e) => loginChange(e)}
                    onBlur={ (e) => blurHandler(e)}
                    placeholder='почта'
                    autoComplete='email' />
            </div>
            <div className="form__input">
                {(dirty.paswordDirty && error.paswordError) && <ErrorForm>{error.paswordError}</ErrorForm>}
                <MyInput 
                    type='pasword'
                    name='pasword'
                    value={form.pasword}
                    onChange={ (e) => paswordChange(e)}
                    onBlur={ (e) => blurHandler(e)}
                    placeholder='пароль'
                    autoComplete='current-password'/>
            </div>
            <div className="form__button">
                <MyButton disabled={!formValid} >войти</MyButton>
            </div>
        </form>
    )
}

export default ModalLoginForm;