import React from "react";
import { Link } from 'react-router-dom';

import cl from "./MainMenu.module.scss";

const MainMenu:React.FC = () =>{
    return (
        <nav className={cl.menu}>
            <ul className={cl.menu__block}>
                <li className={cl.menu__item}><Link to="/">Главная</Link></li>
                <li className={cl.menu__item}><Link to="/currences">Монеты</Link></li>
                <li className={cl.menu__item}><Link to="/user-account">Кабинет</Link></li>
            </ul>
        </nav>
    )
}

export default MainMenu;