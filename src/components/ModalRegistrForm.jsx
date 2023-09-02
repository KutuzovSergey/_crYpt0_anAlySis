import React, { useContext } from "react";
import MyInput from "./UI/MyInput/MyInput";
import MyButton from "./UI/MyButton/MyButton";
import user from "../images/user/user.png";
import camera from "../images/icon/camera.svg";
import upload from "../images/icon/upload.svg";
import { AutchContext } from "../context";

import '../styles/Form.scss';

const ModalRegistrForm = () => {
    const {setIsAuth, setModalRegistr} = useContext(AutchContext);

    const registration = event => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.isAuth = true;
        setModalRegistr(false);
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
                        <MyInput
                            type='text'
                            placeholder='имя'
                            autoComplete='name'/>
                    </div>
                    <div className="form__input">
                        <MyInput 
                            type='password'
                            placeholder='пароль'
                            autoComplete='new-password'/>
                    </div>
                    <div className="form__input">
                        <MyInput 
                            type='password'
                            autoComplete='new-password'
                            placeholder='повторите пароль'/>
                    </div>
                </div>
            </div>
            <div className="form__input">
                <MyInput 
                    type='text'
                    autoComplete='email'
                    placeholder='почта / телефон'/>
            </div>
            <div className="form__button">
                <MyButton>войти</MyButton>
            </div>
        </form>
    )
}

export default ModalRegistrForm;