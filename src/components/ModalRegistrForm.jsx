import React, { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { store } from "../store";
import MyInput from "./UI/MyInput/MyInput";
import MyButton from "./UI/MyButton/MyButton";
import ImitationButton from "./UI/ImitationButton/ImitationButton";
import MyInputFile from "./UI/MyInputFile/MyInputFile";
import ErrorForm from "./UI/ErrorForm/ErrorForm";
// import CapturingPhotosWebcam from "./CapturingPhotosWebcam";
import user from "../images/user/user.png";
import camera from "../images/icon/camera.svg";
import upload from "../images/icon/upload.svg";
import { AutchContext } from "../context";
import { useInputControl, useUploadImage } from "../hooks/useInput";
import { addUser } from "../action/actionCreators";

import '../styles/Form.scss';

const ModalRegistrForm = (props) => {

    const dispatch = useDispatch();

    const {setIsAuth} = useContext(AutchContext);
    const {valueUserInfo, errorStatus, onChangeInput, validation, formValid, error, resetFormValues} = useInputControl();
    const [takingPhotos, getTakingPhotos] = useState(false);

    const inputUpload = React.createRef();
    const profilePhoto = React.createRef();

    const [srcProfilePhoto, uploadImage, showUploadedImage, resetImputFile] = useUploadImage(user, inputUpload);
    
    const registration = event => {
        event.preventDefault();
        validation(event);
        if(formValid){
            dispatch(addUser(valueUserInfo));
            setIsAuth(true);
            localStorage.isAuth = true;
            props.setActive(false);
        }
    }

    // const openTakePhoto = () => {
    //     getTakingPhotos(true);
    // }

    // const closeTakePhoto = () => {
    //     getTakingPhotos(false);
    // }

    useEffect( () => {
        resetFormValues(props.active);
        resetImputFile(user);
        
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
                        {/* <div className="imgBlock__button">
                            <ImitationButton
                                onClick = {() => {openTakePhoto()}}>
                                <img src={camera} alt="camera" className="imgBlock__images" />
                            </ImitationButton>
                        </div> */}
                        <div className="imgBlock__button">
                            <ImitationButton
                                onClick = {() => {uploadImage()}}>
                                <img src={upload} alt="upload" className="imgBlock__images" />
                            </ImitationButton>
                            <MyInputFile
                                type="file" 
                                ref={inputUpload} 
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
                            value={valueUserInfo.valueName} 
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
                            value={valueUserInfo.valuePassword} 
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
                            value={valueUserInfo.valueRepeatPassword} 
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
                    value={valueUserInfo.valueMailPhone}
                    onChange={ (e) => onChangeInput(e) }/>
            </div>
            <div className="form__button">
                <MyButton>войти</MyButton>
            </div>
            {takingPhotos ? 
            <div className="takingPhotosv">
                {/* <CapturingPhotosWebcam closeTakePhoto={closeTakePhoto}/> */}
            </div>
            :
            ''
            }
            
        </form>
    )
}

export default ModalRegistrForm;