import React, { useContext, useEffect, useState } from "react";
import MyInput from "./UI/MyInput/MyInput";
import MyButton from "./UI/MyButton/MyButton";
import ImitationButton from "./UI/ImitationButton/ImitationButton";
import user from "../images/user/user.png";
import camera from "../images/icon/camera.svg";
import upload from "../images/icon/upload.svg";
import { AutchContext } from "../context";
import { useInputControl } from "../hooks/useInput";
import ErrorForm from "./UI/ErrorForm/ErrorForm";

import '../styles/Form.scss';

const ModalRegistrForm = (props) => {
    const {setIsAuth} = useContext(AutchContext);
    const {value, errorStatus, onChange, validation, formValid, error, resetFormValues} = useInputControl();
    
    const registration = event => {
        event.preventDefault();
        validation(event);
        if(formValid){
            setIsAuth(true);
            localStorage.isAuth = true;
        }
    }

    const onChangeInput = (e) =>{
        onChange(e);
    }

    const inputUpload = React.createRef();
    const profilePhoto = React.createRef();
    const [srcProfilePhoto, setSrcProfilePhoto] = useState(user);

    const uploadImage = () =>{
        inputUpload.current.click();
    }

    const showUploadedImage = (e) =>{
        const file = e.target.files[0];

        let reader = new FileReader();

        if (file) {
            reader.readAsDataURL(file);

            reader.onload = function(e) {
                setSrcProfilePhoto(e.target.result);
            };

            reader.onerror = () =>{
                console.log(reader.error);
            }
        }
    }

    const takePhoto = () => {
        console.log("take poto");
    }

    useEffect( () => {
        resetFormValues(props.active);
    }, [props.active]);

    return (
        <form className="form" onSubmit={registration}> 
            <div className="form__title">
                <span className="form__title_text">Зарегистрироваться</span>
            </div>
            <div className="form__wrapper">
                <div className="form__blockImg imgBlock">
                    <div className="imgBlock__userImg__wrapper">
                        <div className="imgBlock__userImg">
                            <img src={srcProfilePhoto} alt="profile photo" ref={profilePhoto} />
                        </div>
                    </div>
                    <div className="imgBlock__buttons">
                        <div className="imgBlock__button">
                            <ImitationButton
                                onClick = {() => {takePhoto()}}>
                                <img src={camera} alt="camera" className="imgBlock__images" />
                            </ImitationButton>
                        </div>
                        <div className="imgBlock__button">
                            <ImitationButton
                                onClick = {() => {uploadImage()}}>
                                <img src={upload} alt="upload" className="imgBlock__images" />
                            </ImitationButton>
                            <input 
                                type="file" 
                                ref={inputUpload} 
                                className="imgBlock__uploadImage" 
                                id="uploadImage"
                                accept="image/jpeg, image/png, image/jpg"
                                onChange={ (e) => {showUploadedImage(e)}}/>
                        </div>
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