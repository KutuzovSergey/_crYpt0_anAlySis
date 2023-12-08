import React, { useRef, ChangeEvent, FormEvent } from "react";
import { useSelector } from "react-redux";
import UserImage from "../components/UI/UserImage/UserImage";
import { StateUserDataType } from "../type/typeStore/typesStore";
import DataString from "../components/UI/DataString/DataString";
import MyInput from "../components/UI/MyInput/MyInput";
import { useInputControl, useUploadImage } from "../hooks/useInput";
import MyButton from "../components/UI/MyButton/MyButton";
import ImitationButton from "../components/UI/ImitationButton/ImitationButton";
import MyInputFile from "../components/UI/MyInputFile/MyInputFile";
import uploadImg from "../images/icon/upload.png";

import "../styles/EditProfile.scss";

const EditProfile:React.FC = () => {

    const inputUpload = useRef<HTMLInputElement>(null);
    const data = useSelector((state: any) => state.userData);
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
        resetInputFile] = useUploadImage(data.userData.userPhoto, inputUpload);
    
    const uploadedImage = (e: ChangeEvent<HTMLInputElement>) => {
        showUploadedImage(e);
    }

    const publishChanges = (e: FormEvent) =>{
        e.preventDefault();
        console.log(e);
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
                        property_text="Имя:" 
                        description_text={data.userData.userName}
                        inputName="name"
                        inputType="text"
                        inputPlaceholder="новое имя"
                        inputAutoComplete="name"
                        inputValue={valueUserInfo.userName}
                        inputOnChange={onChangeInput} />
                    <DataString 
                        property_text="Телефон:" 
                        description_text={data.userData.userPhone} 
                        inputName="phone"
                        inputType="tel"
                        inputPlaceholder="новый телефон"
                        inputAutoComplete="tel"
                        inputValue={valueUserInfo.userPhone}
                        inputOnChange={onChangeInput}/>
                    <DataString 
                        property_text="E-mail:" 
                        description_text={data.userData.userMail}
                        inputName="mail"
                        inputType="email"
                        inputPlaceholder="новая почта"
                        inputAutoComplete="email"
                        inputValue={valueUserInfo.userMail}
                        inputOnChange={onChangeInput} />
                    <div className="profile__change_password">
                        <MyInput
                            name="password"
                            type="password"
                            placeholder="новый пароль"
                            autoComplete="new-password"
                            value={valueUserInfo.userName}
                            onChange={ (e) => onChangeInput(e) }/>
                    </div>
                    <div className="profile__change_password">
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