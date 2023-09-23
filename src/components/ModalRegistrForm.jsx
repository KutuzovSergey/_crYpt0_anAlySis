import React, { useContext, useEffect, useState } from "react";
import MyInput from "./UI/MyInput/MyInput";
import MyButton from "./UI/MyButton/MyButton";
import user from "../images/user/user.png";
import camera from "../images/icon/camera.svg";
import upload from "../images/icon/upload.svg";
import { AutchContext } from "../context";
import { useInputControl } from "../hooks/useInput";
import ErrorForm from "./UI/ErrorForm/ErrorForm";

import '../styles/Form.scss';

const ModalRegistrForm = () => {
    const {setIsAuth, setModalRegistr, modalRegistr, errorPages} = useContext(AutchContext);
    const {value, errorStatus, onChange, validation, formValid, error, resetFormValues} = useInputControl();  

    const registration = event => {
        event.preventDefault();
        validation(event);
        console.log(formValid);
        if(formValid){
            setIsAuth(true);
            localStorage.isAuth = true;
            setModalRegistr(false);
        }
    }

    const onChangeInput = (e) =>{
        onChange(e);
    }

    useEffect( (modalRegistr) => {
        console.log(modalRegistr);
        console.log(errorPages);
        resetFormValues(modalRegistr);
    }, [modalRegistr])

    return (
        <form className="form" onSubmit={registration}> 
            <div className="form__title">
                <span className="form__title_text">Зарегистрироваться</span>
            </div>
            <div className="form__wrapper">
                <div className="form__block__get__img">
                    <div className="form__user__img">
                        <img src={user} alt="user" />
                    </div>
                    <div className="form__block__get__img__button">
                        <MyButton><img src={camera} alt="camera" /></MyButton>
                        <MyButton><img src={upload} alt="upload" /></MyButton>
                    </div>
                </div>
                <div className="form__block__input">
                    <div className="form__input">
                        {(error.loginError && errorStatus.errorName) && <ErrorForm>{error.loginError}</ErrorForm>}
                        <MyInput
                            name='name'
                            type='text'
                            placeholder='имя'
                            autoComplete='name'
                            value={value.valueName} 
                            onChange={ (e) => onChangeInput(e) }/>
                    </div>
                    <div className="form__input">
                        {(error.passwordError && errorStatus.errorPassword) && 
                            <ErrorForm>{error.passwordError}</ErrorForm>}
                        <MyInput 
                            name='password'
                            type='password'
                            placeholder='пароль'
                            autoComplete='new-password'
                            value={value.valuePassword} 
                            onChange={ (e) => onChangeInput(e) }/>
                    </div>
                    <div className="form__input">
                        {(error.repeatPassword && errorStatus.errorRepeatPassword) && 
                            <ErrorForm>{error.repeatPassword}</ErrorForm>}
                        <MyInput
                            name='repeatPassword'
                            type='password'
                            autoComplete='new-password'
                            placeholder='повторите пароль'
                            value={value.valueRepeatPassword} 
                            onChange={ (e) => onChangeInput(e) }/>
                    </div>
                </div>
            </div>
            <div className="form__input">
                {(error.mailPhone && errorStatus.errorMailPhone) && 
                    <ErrorForm>{error.mailPhone}</ErrorForm>}
                <MyInput 
                    name='mailPhone'
                    type='text'
                    autoComplete='email'
                    placeholder='почта / телефон'
                    value={value.valueMailPhone}
                    onChange={ (e) => onChangeInput(e) }/>
            </div>
            <div className="form__button">
                <MyButton>войти</MyButton>
            </div>
        </form>
    )
}

export default ModalRegistrForm;