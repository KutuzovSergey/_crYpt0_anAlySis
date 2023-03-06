import React, { useContext } from "react";
import MyInput from "./UI/MyInput/MyInput";
import MyButton from "./UI/MyButton/MyButton";
import { AutchContext } from "../context";

const ModalLoginForm = () => {
    const {setIsAuth, setModalLogin} = useContext(AutchContext);

    const login = event =>{
        event.preventDefault();
        setIsAuth(true);
        setModalLogin(false);
    }

    return (
        <form className="form" onSubmit={login}> 
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
    )
}

export default ModalLoginForm;