import React, { useState } from "react";
import LinkButton from "./UI/LinkButton/LinkButton";
import { useSelector } from "react-redux";
import user from "../images/user/user.png";

import "../styles/componentStyles/UserCard.scss";

const UserCard = () => {

    const userData = useSelector((state: any) => state.userData);

    return (
        <div className="user-card">
            <div className="user-card__photo">
                <img src={userData.userPhoto ? userData.userPhoto : user} alt="logo" />
            </div>
            <div className="user-card__name">
                <span className="footer__name__text">{userData.valueName ? userData.valueName : "Ivan Petrov"}</span>
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