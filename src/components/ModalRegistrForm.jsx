import React, { useContext } from "react";
import MyInput from "./UI/MyInput/MyInput";
import MyButton from "./UI/MyButton/MyButton";
import user from "../images/user/user.png";
import camera from "../images/icon/camera.svg";
import upload from "../images/icon/upload.svg";
import { AutchContext } from "../context";
import { useInputСontrol, useValidation } from "../hooks/useInput";
import ErrorForm from "./UI/ErrorForm/ErrorForm";

import '../styles/Form.scss';

const ModalRegistrForm = () => {
    const {setIsAuth, setModalRegistr} = useContext(AutchContext);
    const {value, dirty, onChange, onBlur} = useInputСontrol();
    const [validatuon, formValid, error] = useValidation();

    const registration = event => {
        event.preventDefault();
        validatuon(event);

        if(formValid){
            setIsAuth(true);
            localStorage.isAuth = true;
            setModalRegistr(false);
        }
    }

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
                        {error.loginError != '' && <ErrorForm>{error.loginError}</ErrorForm>}
                        <MyInput
                            name='name'
                            type='text'
                            placeholder='имя'
                            autoComplete='name'
                            value={value.valueName} 
                            onChange={ (e) => onChange(e) }
                            onBlur={ (e) => onBlur(e) }/>
                    </div>
                    <div className="form__input">
                        {error.paswordError != '' && <ErrorForm>{error.paswordError}</ErrorForm>}
                        <MyInput 
                            name='password'
                            type='password'
                            placeholder='пароль'
                            autoComplete='new-password'
                            value={value.valuePassword} 
                            onChange={ (e) => onChange(e) }
                            onBlur={ (e) => onBlur(e) }/>
                    </div>
                    <div className="form__input">
                        {error.repeatPassword != '' && <ErrorForm>{error.repeatPassword}</ErrorForm>}
                        <MyInput 
                            name='repeatPassword'
                            type='password'
                            autoComplete='new-password'
                            placeholder='повторите пароль'
                            value={value.valueRepeatPassword} 
                            onChange={ (e) => onChange(e) }
                            onBlur={ (e) => onBlur(e) }/>
                    </div>
                </div>
            </div>
            <div className="form__input">
                {error.mailPhone != '' && <ErrorForm>{error.mailPhone}</ErrorForm>}
                <MyInput 
                    name='mailPhone'
                    type='text'
                    autoComplete='email'
                    placeholder='почта / телефон'
                    value={value.valueMailPhone}
                    onChange={ (e) => onChange(e) }
                    onBlur={ (e) => onBlur(e) }/>
            </div>
            <div className="form__button">
                <MyButton>войти</MyButton>
            </div>
        </form>
    )
}

export default ModalRegistrForm;