import React, { FC } from "react";
import LinkButton from "./UI/LinkButton/LinkButton";
import { useSelector } from "react-redux";
// import user from "../images/user/user.png";
import { ProfilePhotoType, StateType, StateUserDataType, UserDataType } from "../type/typeStore/typesStore";
import UserImage from "./UI/UserImage/UserImage";

import "../styles/componentStyles/UserCard.scss";

const UserCard: FC = () => {

    const userData: UserDataType = useSelector((state: StateType) => {
        return state.userData.userData
    });
    
    const srcImages: string = `${userData.userPhoto}`;
    return (
        <div className="user-card">
            <UserImage srcImages={srcImages}/>
            {/* <div className="user-card__photo">
                <img src={srcImages} alt="logo" />
            </div> */}
            <div className="user-card__name">
                <span className="footer__name__text">{userData.userName}</span>
            </div>
            <div className="user-card__button">
                <LinkButton 
                    activityIndicator={true}
                    link="/editProfile">Редактировать</LinkButton>
            </div>
        </div>
    )
}

export default UserCard;