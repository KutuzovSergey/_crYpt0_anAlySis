import React, { useRef, ChangeEvent, FormEvent } from "react";
import { useSelector } from "react-redux";
import UserImage from "../components/UI/UserImage/UserImage";
import { StateUserDataType, UserDataType } from "../type/typeStore/typesStore";
import DataString from "../components/UI/DataString/DataString";
import MyInput from "../components/UI/MyInput/MyInput";
import { useInputControl } from "../hooks/useInputEditProfile";
import { useUploadImage } from "../hooks/useUploadingImage";
import MyButton from "../components/UI/MyButton/MyButton";
import ImitationButton from "../components/UI/ImitationButton/ImitationButton";
import MyInputFile from "../components/UI/MyInputFile/MyInputFile";
import uploadImg from "../images/icon/upload.png";
import ErrorForm from "../components/UI/ErrorForm/ErrorForm";
import { useDispatch } from "react-redux";
import { changeUserData } from "../action/actionCreators";

import "../styles/EditProfile.scss";
import { RootState } from "../store";

const EditProfile:React.FC = () => {

    const inputUpload = useRef<HTMLInputElement>(null);
    const data = useSelector((state: RootState) => state.userData);
    const {valueUserInfo,
        errorStatus, 
        onChangeInput, 
        validation, 
        error, 
        resetFormValues,
        closingTtheInput,
        returningTheStateInput,
        closeInput,
        resetFormValue
    } = useInputControl();

    const [srcProfilePhoto, 
        uploadImage, 
        showUploadedImage, 
        resetInputFile] = useUploadImage(data.userData.userPhoto, inputUpload);

    const dispatch = useDispatch();
    
    const uploadedImage = (e: ChangeEvent<HTMLInputElement>): void => {
        showUploadedImage(e);
    }

    const publishChanges = (e: FormEvent): void =>{
        e.preventDefault();

        if (validation(e)()) {
            const fullUserInfo: UserDataType = {...valueUserInfo, userPhoto: srcProfilePhoto};
            dispatch(changeUserData(fullUserInfo));
            resetFormValues();
            closingTtheInput();
        }
    }
    
    return (
        <form className="profile" onSubmit={publishChanges}>
            <div>
                <div className="profile__photo">
                    <UserImage srcImages={srcProfilePhoto}/>
                    <div className="profile__take_photo_button">
                        <ImitationButton onClick={() => {uploadImage()}}>
                            <img src={uploadImg} alt="upload" className="profile__images" />
                        </ImitationButton>
                        <MyInputFile 
                            type="file" 
                            id="uploadImage"
                            accept="image/jpeg, image/png, image/jpg"
                            onChange={uploadedImage}
                            ref={inputUpload}/>
                    </div>
                </div>
            </div>
            
            <div className="profile__data">
                <div className="profile__data_wrapper">
                    <DataString 
                        id="userName"
                        property_text="Имя:" 
                        description_text={data.userData.userName}
                        inputName="name"
                        inputType="text"
                        inputPlaceholder="новое имя"
                        inputAutoComplete="name"
                        inputValue={valueUserInfo.userName}
                        inputOnChange={onChangeInput}
                        closeInput={closeInput.current}
                        errorText={error.userName}
                        errorStatus={errorStatus.errorName}
                        returningTheStateInput={returningTheStateInput}
                        resetFormValue={resetFormValue}/>
                    <DataString 
                        id="userPhone"
                        property_text="Телефон:" 
                        description_text={data.userData.userPhone} 
                        inputName="phone"
                        inputType="tel"
                        inputPlaceholder="новый телефон"
                        inputAutoComplete="tel"
                        inputValue={valueUserInfo.userPhone}
                        inputOnChange={onChangeInput}
                        closeInput={closeInput.current}
                        errorText={error.userPhone}
                        errorStatus={errorStatus.errorPhone}
                        returningTheStateInput={returningTheStateInput}
                        resetFormValue={resetFormValue}/>
                    <DataString 
                        id="userMail"
                        property_text="E-mail:" 
                        description_text={data.userData.userMail}
                        inputName="mail"
                        inputType="email"
                        inputPlaceholder="новая почта"
                        inputAutoComplete="email"
                        inputValue={valueUserInfo.userMail}
                        inputOnChange={onChangeInput}
                        closeInput={closeInput.current}
                        errorText={error.userMail}
                        errorStatus={errorStatus.errorMail}
                        returningTheStateInput={returningTheStateInput}
                        resetFormValue={resetFormValue}/>
                    <div className="profile__change_password">
                        {(error.userPassword && errorStatus.errorPassword) 
                        && 
                        <ErrorForm>{error.userPassword}</ErrorForm>}
                        <MyInput
                            name="password"
                            type="password"
                            placeholder="новый пароль"
                            autoComplete="new-password"
                            value={valueUserInfo.userPassword}
                            onChange={ (e) => onChangeInput(e) }/>
                    </div>
                    <div className="profile__change_password">
                        {(error.userRepeatPassword && errorStatus.errorRepeatPassword) 
                        && 
                        <ErrorForm>{error.userRepeatPassword}</ErrorForm>}
                        <MyInput
                            name="repeatPassword"
                            type="password"
                            placeholder="повторите пароль"
                            autoComplete="new-password"
                            value={valueUserInfo.userRepeatPassword}
                            onChange={ (e) => onChangeInput(e) }/>
                    </div>
                </div>
            </div>
            <div className="profile__button">
                <MyButton>Внести изменения</MyButton>
            </div>
        </form>
    )
}

export default EditProfile;