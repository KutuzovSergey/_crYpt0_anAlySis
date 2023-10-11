import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { AppContext } from "../../../context";
import home_page_icon from "../../../images/icon/home_page_icon.png";
import person_icon from "../../../images/icon/person_icon.png";
import coin_icon from "../../../images/icon/coin_icon.png";

import cl from "./AdaptiveMenu.module.scss";

const AdaptiveMenu = () =>{
    const {menuAdaptive, setMenuAdaptive} = useContext(AppContext);

    const classMenu = [cl.menu]

    if (menuAdaptive) {
        classMenu.push(cl.active);
    }

    return(
        <div className={classMenu.join(' ')} >
            <div className={cl.menu__blur} onClick={() => {setMenuAdaptive(false)}}></div>
            <nav className={cl.menu__content}>
                <ul className={cl.menu__block}>
                    <li className={cl.menu__item}>
                        <Link to="/" onClick={() => {setMenuAdaptive(false)}} >
                            <div className={cl.menu__item__icon}>
                                <img src={home_page_icon} alt="" />
                            </div>
                            <span className={cl.menu__item__text}>Главная</span> 
                        </Link>
                    </li>
                    <li className={cl.menu__item}>
                        <hr className={cl.menu__line}/>
                    </li>
                    <li className={cl.menu__item}>
                        <Link to="/currences" onClick={() => {setMenuAdaptive(false)}} >
                            <div className={cl.menu__item__icon}>
                                <img src={coin_icon} alt="" />
                            </div>
                            <span className={cl.menu__item__text}>Монеты</span>
                        </Link>
                    </li>
                    <li className={cl.menu__item}>
                        <hr className={cl.menu__line}/>
                    </li>
                    <li className={cl.menu__item}>
                        <Link to="/user-account" onClick={() => {setMenuAdaptive(false)}} >
                            <div className={cl.menu__item__icon}>
                                <img src={person_icon} alt="" />
                            </div>
                            <span className={cl.menu__item__text}>Кабинет</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default AdaptiveMenu;