import React from "react";
import { Link } from 'react-router-dom';

import cl from "./EntryMenu.module.scss";

type Parameters = {
    errorPages: boolean,
    showMainPageMenu: () => boolean,
    openModalLogin: () => void,
    openModalRegistration: () => void,
}

const EntryMenu:React.FC<Parameters> = (props: Parameters) =>{
   
    return (
        <ul className={cl.menu}>
            { props.errorPages ?
                <li className={cl.menu__item}>
                    <Link to="/" onClick={() => props.showMainPageMenu()}>Главная</Link>
                </li>
                :
                <li className={cl.menu__item}>
                    <span className={cl.menu__item__link}
                        onClick={() => props.openModalLogin()}>Вход</span>
                    <span className={cl.menu__item__text}> / </span>
                    <span className={cl.menu__item__link} 
                        onClick={() => props.openModalRegistration()}>Регистрация</span>
                </li>
            }
        </ul>
    )
}

export default EntryMenu;