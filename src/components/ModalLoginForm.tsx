import React, { useContext, useState, useEffect } from "react";
import MyInput from "./UI/MyInput/MyInput";
import MyButton from "./UI/MyButton/MyButton";
import { AppContext } from "../context";
import ErrorForm from "./UI/ErrorForm/ErrorForm";
import { useLogAccount } from "../hooks/useLogInAccount";

const ModalLoginForm:React.FC = () => {
    const { setIsAuth, modalLogin, setModalLogin } = useContext<any>(AppContext);
    const [errorMessage,
        formLogValue,
        loginErrorStatus,
        loginChange,
        validLogin,
        resetLog,] = useLogAccount(modalLogin);

    const logAccount = (e: React.FormEvent): void => {
        e.preventDefault();

        if(validLogin(e)){
            resetLog();
            e.preventDefault();
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
                {(loginErrorStatus.loginStatus && errorMessage.loginError) && <ErrorForm>{errorMessage.loginError}</ErrorForm>}
                <MyInput
                    type='text'
                    name='login'
                    value={formLogValue.login}
                    onChange={ (e) => loginChange(e)}
                    placeholder='почта'
                    autoComplete='email' />
            </div>
            <div className="form__input">
                {(loginErrorStatus.passwordStatus && errorMessage.passwordError) && <ErrorForm>{errorMessage.passwordError}</ErrorForm>}
                <MyInput 
                    type='password'
                    name='password'
                    value={formLogValue.password}
                    onChange={ (e) => loginChange(e)}
                    placeholder='пароль'
                    autoComplete='current-password'/>
            </div>
            <div className="form__button">
                <MyButton>войти</MyButton>
            </div>
        </form>
    )
}

export default ModalLoginForm;