import React from "react";
import { useLogAccount } from "../hooks/useLogInAccount";
import { useDispatch } from "react-redux";
import { changeIsAuth, changeModalLogin } from "../action/actionCreators";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import MyInput from "./UI/MyInput/MyInput";
import MyButton from "./UI/MyButton/MyButton";
import ErrorForm from "./UI/ErrorForm/ErrorForm";

const ModalLoginForm:React.FC = () => {
    const modalLogin: boolean = useSelector((state: RootState) => state.generalApp.modalLogin);
    const dispatch = useDispatch();
    
    const [errorMessage,
        formLogValue,
        loginErrorStatus,
        loginChange,
        validLogin,
        resetLog,] = useLogAccount(modalLogin);

    const logAccount = (e: React.FormEvent): void => {
        e.preventDefault();

        if(validLogin(e)()){
            resetLog();
            dispatch(changeIsAuth(true));
            localStorage.isAuth = true;
            dispatch(changeModalLogin(false));
        }
    }

    return (
        <form className="form" onSubmit={logAccount}> 
            <div className="form__title">
                <span className="form__title_text">Войти в аккаунт</span>
            </div>
            <div className="form__input">
                {(loginErrorStatus.loginStatus && errorMessage.loginError) && <ErrorForm bottom="40px" left="0">{errorMessage.loginError}</ErrorForm>}
                <MyInput
                    type='text'
                    name='login'
                    value={formLogValue.login}
                    onChange={ (e) => loginChange(e)}
                    placeholder='почта'
                    autoComplete='email' />
            </div>
            <div className="form__input">
                {(loginErrorStatus.passwordStatus && errorMessage.passwordError) && <ErrorForm bottom="40px" left="0">{errorMessage.passwordError}</ErrorForm>}
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