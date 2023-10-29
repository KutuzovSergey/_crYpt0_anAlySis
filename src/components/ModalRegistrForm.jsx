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
import { AppContext } from "../context";
import { useInputControl, useUploadImage } from "../hooks/useInput";
import { addUser } from "../action/actionCreators";

import '../styles/Form.scss';

const ModalRegistrForm = (props) => {

    const dispatch = useDispatch();

    const {setIsAuth} = useContext(AppContext);
    const [takingPhotos, getTakingPhotos] = useState(false);

    const inputUpload = React.createRef();
    const profilePhoto = React.createRef();

    const {valueUserInfo, 
        errorStatus, 
        onChangeInput, 
        validation, 
        error, 
        resetFormValues} = useInputControl();
    const [srcProfilePhoto, 
        uploadImage, 
        showUploadedImage, 
        resetInputFile] = useUploadImage(user, inputUpload);
    
    const registration = event => {
        event.preventDefault();

        if(validation(event)){
            valueUserInfo.userPhoto = srcProfilePhoto;
            dispatch(addUser(valueUserInfo));
            setIsAuth(true);
            localStorage.isAuth = true;
            props.setActive(false);
        }
    }

    const uploadedImage = (e) => {
        showUploadedImage(e);
    }

    // const openTakePhoto = () => {
    //     getTakingPhotos(true);
    // }

    // const closeTakePhoto = () => {
    //     getTakingPhotos(false);
    // }

    useEffect( () => {
        resetFormValues(props.active);
        resetInputFile(user);
        
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
                                id="uploadImage"
                                accept="image/jpeg, image/png, image/jpg"
                                onChange={uploadedImage}
                                ref={inputUpload} />
                        </div>
                    </div>
                </div>
                <div className="form__block__input">
                    <div className="form__input">
                        {(error.errorName && errorStatus.errorName) && <ErrorForm>{error.errorName}</ErrorForm>}
                        <MyInput
                            name='name'
                            type='text'
                            placeholder='имя'
                            autoComplete='name'
                            value={valueUserInfo.valueName} 
                            onChange={ (e) => onChangeInput(e) }/>
                    </div>
                    <div className="form__input">
                        {(error.errorPassword && errorStatus.errorPassword) && 
                            <ErrorForm>{error.errorPassword}</ErrorForm>}
                        <MyInput 
                            name='password'
                            type='password'
                            placeholder='пароль'
                            autoComplete='new-password'
                            value={valueUserInfo.valuePassword} 
                            onChange={ (e) => onChangeInput(e) }/>
                    </div>
                    <div className="form__input">
                        {(error.errorRepeatPassword && errorStatus.errorRepeatPassword) && 
                            <ErrorForm>{error.errorRepeatPassword}</ErrorForm>}
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
                {(error.errorMail && errorStatus.errorMail) && 
                    <ErrorForm>{error.errorMail}</ErrorForm>}
                <MyInput 
                    name='mail'
                    type='email'
                    autoComplete='email'
                    placeholder='почта'
                    value={valueUserInfo.valueMail}
                    onChange={ (e) => onChangeInput(e) }/>
            </div>
            <div className="form__input">
                {(error.errorPhone && errorStatus.errorPhone) && 
                    <ErrorForm>{error.errorPhone}</ErrorForm>}
                <MyInput 
                    name='phone'
                    type='tel'
                    autoComplete='tel'
                    placeholder='телефон'
                    value={valueUserInfo.valuePhone}
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