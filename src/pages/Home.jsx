import React, { useState } from "react";
import '../styles/Home.scss';
import camera from '../images/icon/camera.svg';
import upload from '../images/icon/upload.svg';
import baner from "../images/home/baner_4.jpg";
import user from "../images/user/user.png";
import MyModal from "../components/UI/MyModal/MyModal";
import MyInput from "../components/UI/MyInput/MyInput";
import MyButton from "../components/UI/MyButton/MyButton";

const Home = () => {
    const [modalLogin, setModalLogin] = useState(false);
    const [modalRegistr, setModalRegistr] = useState(false);

    const getLogin = () =>{
        setModalLogin(true);
    }

    const getRegistr = () =>{
        setModalRegistr(true);
    }
    return (
        <div className="home">
            <div className="home__banner" onClick={() => getRegistr()}>
                <img src={baner} alt="baner image" />
            </div>
            <div className="home__text">
                <p>Для того, чтобы повысить доходность сделок, трейдеры должны использовать все доступные им средства для снижения риска. Обычно для этой цели проводят анализ выбранных активов с применением методов технического и фундаментального анализа.</p>
            </div>
            <MyModal className="modal" active={modalLogin} setActive={setModalLogin}>
                <form className="form"> 
                    <div className="form__title">
                        <span className="form__title_text">Войти в аккаунт</span>
                    </div>
                    <div className="form__input">
                        <MyInput
                            type='text'
                            placeholder='логин' />
                    </div>
                    <div className="form__input">
                        <MyInput 
                            type='pasword'
                            placeholder='пароль'/>
                    </div>
                    <div className="form__button">
                        <MyButton>войти</MyButton>
                    </div>
                </form>
            </MyModal>
            <MyModal className="modal" active={modalRegistr} setActive={setModalRegistr}>
                <form className="form"> 
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
                                    placeholder='имя' />
                            </div>
                            <div className="form__input">
                                <MyInput 
                                    type='password'
                                    placeholder='пароль'/>
                            </div>
                            <div className="form__input">
                                <MyInput 
                                    type='password'
                                    placeholder='повторите пароль'/>
                            </div>
                        </div>
                    </div>
                    <div className="form__input">
                        <MyInput 
                            type='password'
                            placeholder='почта / телефон'/>
                    </div>
                    <div className="form__button">
                        <MyButton>войти</MyButton>
                    </div>
                </form>
            </MyModal>
        </div>
    )
}

export default Home;