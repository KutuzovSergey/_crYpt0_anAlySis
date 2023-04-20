import React, { useContext, useEffect, useState } from "react";
import MyInput from "./UI/MyInput/MyInput";
import MyButton from "./UI/MyButton/MyButton";
import user from "../images/user/user.png";
import camera from "../images/icon/camera.svg";
import upload from "../images/icon/upload.svg";
import { AutchContext } from "../context";
import ErrorForm from "./UI/ErrorForm/ErrorForm";


const useValidation = (value, validations) =>{
    const [isEmpty, setIsEmpty] = useState(true);
    const [minLengthError, setMinLengthError] = useState(false);
    const [battonValid, setBattinValid] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [repeatPassword, setRepeatPassword] = useState(false);
    const reEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

    const [errorText, setErrorText] = useState('');

    useEffect( () => {
        for (const validation in validations){
            switch (validation) {
                case 'minLength':
                    value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false);
                    break;
                case 'isEmpty':
                    value ? setIsEmpty(false) : setIsEmpty(true);
                    break;
                case 'email':
                    !reEmail.test(String(value).toLowerCase()) ? setEmailError(true) : setEmailError(false);
                    break;
                case 'secondPassword':
                    console.log(validations.secondPassword);
                    value === validations.secondPassword ? setRepeatPassword(false) : setRepeatPassword(true);
                    break;
                default:
            }
        }
    }, [value]);

    useEffect( () => {
        if (isEmpty || minLengthError) {
            setBattinValid(true);
        } else {
            setBattinValid(false);
        }

    }, [isEmpty, minLengthError]);

    return {
        isEmpty,
        minLengthError,
        battonValid,
        emailError,
        errorText,
        repeatPassword,
    }
}

const useInput = (initialValue, validations) => {
    const [ value, setValue ] = useState(initialValue);
    const [ isDirty, setIsDirty] = useState(false);
    const valid = useValidation(value, validations);

    const onChange = (e) =>{
        setValue(e.target.value);
    }

    const onBlur = () => {
        setIsDirty(true)
    }

    return {
        value,
        onChange,
        onBlur,
        ...valid,
        isDirty,
    }
}

const ModalRegistrForm = () => {
    const {setIsAuth, setModalRegistr} = useContext(AutchContext);

    const name = useInput('', {isEmpty: true, minLength: 2,});
    const email = useInput('', {isEmpty: true, email: true});
    const password = useInput('', {isEmpty: true, minLength: 8});
    const repeatPassword = useInput('', {isEmpty: true, secondPassword: password.value});
    const phone = useInput('', {isEmpty: true,})

    const registration = (e) => {
        e.preventDefault();
        setIsAuth(true);
        localStorage.isAuth = true;
        setModalRegistr(false);
    }

    return (
        <form className="form" onSubmit={ (e) => registration(e)}> 
            <div className="form__title">
                <span className="form__title_text">Зарегистрироваться</span>
            </div>
            <div className="form__wrapper">
                <div className="form__block__get__img">
                    <div className="form__user__img">
                        <img src={user} alt="user" />
                    </div>
                    <div className="form__block__get__img__button">
                        <MyButton>
                            <img src={camera} alt="camera" />
                        </MyButton>
                        <MyButton>
                            <img src={upload} alt="upload" />
                        </MyButton>
                    </div>
                </div>
                <div className="form__block__input">
                    <div className="form__input">
                        {(name.isDirty && name.isEmpty) && <ErrorForm>Поле не может быть пустым</ErrorForm>}
                        <MyInput
                            type='text'
                            placeholder='имя'
                            autoComplete='name'
                            onBlur={ (e) => name.onBlur(e)}
                            onChange={ (e) => name.onChange(e)} />
                    </div>
                    <div className="form__input">
                        {(password.isDirty && password.isEmpty) && <ErrorForm>Поле не может быть пустым</ErrorForm>}
                        {(password.minLengthError && !password.isEmpty) && <ErrorForm>Пороль должен быть больше 8 символов</ErrorForm>}
                        <MyInput 
                            type='password'
                            placeholder='пароль'
                            autoComplete='new-password'
                            value={password.value}
                            onBlur={ (e) => password.onBlur(e)}
                            onChange={ (e) => password.onChange(e)} />
                    </div>
                    <div className="form__input">
                        {(repeatPassword.isDirty && repeatPassword.isEmpty) && <ErrorForm>Поле не может быть пустым</ErrorForm>}
                        {(repeatPassword.repeatPassword && !repeatPassword.isEmpty) && <ErrorForm>Пароли не совпадают</ErrorForm>}
                        <MyInput 
                            type='password'
                            autoComplete='new-password'
                            placeholder='повторите пароль' 
                            onBlur={ (e) => repeatPassword.onBlur(e)}
                            onChange={ (e) => repeatPassword.onChange(e)} />
                    </div>
                </div>
            </div>
            <div className="form__input">
                {(email.isDirty && email.isEmpty) && <ErrorForm>Поле не может быть пустым</ErrorForm>}
                {(email.emailError && !email.isEmpty) && <ErrorForm>Email указан не коректно</ErrorForm>}
                <MyInput 
                    type='email'
                    name='email'
                    autoComplete='email'
                    placeholder='почта'
                    value={email.value} 
                    onBlur={(e) => email.onBlur(e)}
                    onChange={ (e) => email.onChange(e)} />
            </div>
            <div className="form__input">
                {(phone.isDirty && phone.isEmpty) && <ErrorForm>Поле не может быть пустым</ErrorForm>}
                <MyInput 
                    type='tel' 
                    name='phone'
                    autoComplete='phone'
                    placeholder='телефон'
                    onBlur={(e) => phone.onBlur(e)}
                    onChange={ (e) => phone.onChange(e)} />
            </div>
            <div className="form__button">
                <MyButton disabled={!email.battonValid || !password.battonValid || !phone.battonValid || name.battonValid}>войти</MyButton>
            </div>
        </form>
    )
}

export default ModalRegistrForm;