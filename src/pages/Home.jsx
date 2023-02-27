import React, { useState } from "react";
import '../styles/Home.scss';
import baner from "../images/home/baner_4.jpg";
import MyModal from "../components/UI/MyModal/MyModal";
import MyInput from "../components/UI/MyInput/MyInput";
import MyButton from "../components/UI/MyButton/MyButton";

const Home = () => {
    const [modalLogin, setModalLogin] = useState(false);
    const [modalRegistration, setModalRegistration] = useState(false);

    const getLogin = () =>{
        setModalLogin(true);
    }
    return (
        <div className="home">
            <div className="home__banner" onClick={() => getLogin()}>
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
            <MyModal className="modal" active={modalRegistration} setActive={setModalRegistration}>
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
                            type='password'
                            placeholder='пароль'/>
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