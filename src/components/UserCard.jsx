import React, { useState } from "react";
import logo from "../images/logo.png";
import LinkButton from "./UI/LinkButton/LinkButton";
import { useSelector } from "react-redux";

import "../styles/componentStyles/UserCard.scss";

const UserCard = () => {

    // const [userData, setUserData] = useState();
    const userData = useSelector(state => state.userData.userData[0]);

    return (
        <div className="user-card">
            <div className="user-card__photo">
                <img src={userData.userPhoto} alt="logo" />
            </div>
            <div className="user-card__name">
                <span className="footer__name__text">{userData.valueName}</span>
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