import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { AutchContext } from "../../../context";

import cl from "./AdaptiveMenu.module.scss";

const AdaptiveMenu = () =>{
    const {menuAdaptive, setMenuAdaptive} = useContext(AutchContext);

    // const closeMenuAdaptive = () =>{
    //     console.log('работает')
    //     setMenuAdaptive(false)
    // }

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
                        <Link to="/" onClick={() => {setMenuAdaptive(false)}} >Главная</Link>
                    </li>
                    <li className={cl.menu__item}>
                        <hr className={cl.menu__line}/>
                    </li>
                    <li className={cl.menu__item}>
                        <Link to="/currences" onClick={() => {setMenuAdaptive(false)}} >Монеты</Link>
                    </li>
                    <li className={cl.menu__item}>
                        <hr className={cl.menu__line}/>
                    </li>
                    <li className={cl.menu__item}>
                        <Link to="/user-account" onClick={() => {setMenuAdaptive(false)}} >Кабинет</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default AdaptiveMenu;