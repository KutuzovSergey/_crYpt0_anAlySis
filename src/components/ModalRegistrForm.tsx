import React, { useEffect, useRef, ChangeEvent, FC, FormEvent } from "react";
import { useDispatch } from "react-redux";
import MyInput from "./UI/MyInput/MyInput";
import MyButton from "./UI/MyButton/MyButton";
import ImitationButton from "./UI/ImitationButton/ImitationButton";
import MyInputFile from "./UI/MyInputFile/MyInputFile";
import ErrorForm from "./UI/ErrorForm/ErrorForm";
import CapturingPhotosWebcam from "./CapturingPhotosWebcam";
import user from "../images/user/user.png";
import camera from "../images/icon/camera.png";
import upload from "../images/icon/upload.png";
import { useInputControl } from "../hooks/useInput";
import { useUploadImage } from "../hooks/useUploadingImage";
import { addUser, changeDisableModal, changeIsAuth } from "../action/actionCreators";
import { UserDataType } from "../type/typeStore/typesStore";
import { ProfilePhotoType } from "../type/typesMain";
import { useSelector } from "react-redux";
import { RootState } from "../store";

import '../styles/Form.scss';

type Props = {
    setActive: (activ: boolean) => void,
    active: boolean
}

const ModalRegistrForm:FC<Props> = (props: Props) => {

    const dispatch = useDispatch();

    const takingPhotos: boolean = useSelector((state: RootState) => state.generalApp.isDisableModal);

    const inputUpload = useRef<HTMLInputElement>(null);
    const profilePhoto = useRef<HTMLImageElement | null>(null);
    
    const styleTakingPhotosHide: string[] = ['takingPhotos'];
    const styleTakingPhotosShow: string[] = ['takingPhotos', 'takingPhotos_active'];

    const {valueUserInfo, 
        errorStatus, 
        onChangeInput, 
        validation, 
        error, 
        resetFormValues
    } = useInputControl();
    const [srcProfilePhoto, 
        uploadImage, 
        showUploadedImage, 
        resetInputFile,
        dirtyInput,
        setSrcProfilePhoto
    ] = useUploadImage(user, inputUpload);
    
    const registration = (e: FormEvent) => {
        e.preventDefault();
        
        if(validation(e)()){
            const fullUserInfo: UserDataType = {...valueUserInfo, userPhoto: srcProfilePhoto};

            dispatch(addUser(fullUserInfo));
            dispatch(changeIsAuth(true));
            localStorage.isAuth = true;
            props.setActive(false);
        }
    }

    const uploadedImage = (e: ChangeEvent<HTMLInputElement>) => {
        showUploadedImage(e);
    }
    
    const openTakePhoto = () => {
        dispatch(changeDisableModal(true));
    }

    const closeTakePhoto = () => {
        dispatch(changeDisableModal(false));
    }

    const installingSnapshot = (snapshot: ProfilePhotoType): void =>{
        setSrcProfilePhoto!(snapshot);
    }
    
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
                        <div className="imgBlock__button">
                            <ImitationButton
                                onClick = {() => {openTakePhoto()}}>
                                <img src={camera} alt="camera" className="imgBlock__images" />
                            </ImitationButton>
                        </div>
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
                        {(error.errorName && errorStatus.errorName) && <ErrorForm bottom="40px" left="0">{error.errorName}</ErrorForm>}
                        <MyInput
                            name="name"
                            type="text"
                            placeholder="имя"
                            autoComplete="name"
                            value={valueUserInfo.userName} 
                            onChange={ (e) => onChangeInput(e) }/>
                    </div>
                    <div className="form__input">
                        {(error.errorPassword && errorStatus.errorPassword) && 
                            <ErrorForm bottom="40px" left="0">{error.errorPassword}</ErrorForm>}
                        <MyInput 
                            name="password"
                            type="password"
                            placeholder="пароль"
                            autoComplete="new-password"
                            value={valueUserInfo.userPassword} 
                            onChange={ (e) => onChangeInput(e) }/>
                    </div>
                    <div className="form__input">
                        {(error.errorRepeatPassword && errorStatus.errorRepeatPassword) && 
                            <ErrorForm bottom="40px" left="0">{error.errorRepeatPassword}</ErrorForm>}
                        <MyInput
                            name="repeatPassword"
                            type="password"
                            autoComplete="new-password"
                            placeholder="повторите пароль"
                            value={valueUserInfo.userRepeatPassword} 
                            onChange={ (e) => onChangeInput(e) }/>
                    </div>
                </div>
            </div>
            <div className="form__input">
                {(error.errorMail && errorStatus.errorMail) && 
                    <ErrorForm bottom="40px" left="0">{error.errorMail}</ErrorForm>}
                <MyInput 
                    name="mail"
                    type="email"
                    autoComplete="email"
                    placeholder="почта"
                    value={valueUserInfo.userMail}
                    onChange={ (e) => onChangeInput(e) }/>
            </div>
            <div className="form__input">
                {(error.errorPhone && errorStatus.errorPhone) && 
                    <ErrorForm bottom="40px" left="0">{error.errorPhone}</ErrorForm>}
                <MyInput 
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="телефон"
                    value={valueUserInfo.userPhone}
                    onChange={ (e) => onChangeInput(e) }/>
            </div>
            <div className="form__button">
                <MyButton>войти</MyButton>
            </div>
            <div className={ !takingPhotos ? styleTakingPhotosHide.join(' ') : styleTakingPhotosShow.join(' ')} >
                <CapturingPhotosWebcam closeWebcam={closeTakePhoto} installingSnapshot={installingSnapshot} />
            </div>
            {/* {takingPhotos ? 
            <div className="takingPhotos">
                <CapturingPhotosWebcam closeWebcam={closeTakePhoto} installingSnapshot={installingSnapshot} />
            </div>
            :
            ''
            } */}
            
        </form>
    )
}

export default ModalRegistrForm;