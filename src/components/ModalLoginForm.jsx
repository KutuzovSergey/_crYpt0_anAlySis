import React, { useContext, useState, useEffect } from "react";
import MyInput from "./UI/MyInput/MyInput";
import MyButton from "./UI/MyButton/MyButton";
import { AppContext } from "../context";
import ErrorForm from "./UI/ErrorForm/ErrorForm";
import { useLogAccount } from "../hooks/useLogInAccount";

const ModalLoginForm = () => {
    const {setIsAuth, setModalLogin, modalLogin} = useContext(AppContext);
    const [dirty, error, formLog, formValid, blurHandler, loginChange, passwordChange] = useLogAccount(modalLogin);

    const logAccount = event => {
        console.log(formValid);
        if(formValid){
            event.preventDefault();
            setIsAuth(true);
            localStorage.isAuth = true;
            setModalLogin(false);
        }
    }

    return (
        <form className="form" onSubmit={logAccount}> 
            <div className="form__title">
                <span className="form__title_text">Войти в аккаунт</span>
            </div>
            <div className="form__input">
                {(dirty.loginDirty && error.loginError) && <ErrorForm>{error.loginError}</ErrorForm>}
                <MyInput
                    type='text'
                    name='login'
                    value={formLog.login}
                    onChange={ (e) => loginChange(e)}
                    onBlur={ (e) => blurHandler(e)}
                    placeholder='почта'
                    autoComplete='email' />
            </div>
            <div className="form__input">
                {(dirty.passwordDirty && error.passwordError) && <ErrorForm>{error.passwordError}</ErrorForm>}
                <MyInput 
                    type='password'
                    name='password'
                    value={formLog.password}
                    onChange={ (e) => passwordChange(e)}
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