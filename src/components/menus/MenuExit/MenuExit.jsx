import React from "react";
import { Link } from 'react-router-dom';

import cl from "./MenuExit.module.scss";

const MenuExit = (props) =>{
    return (

        <ul className={cl.menu}>
            <li className={cl.menu__block}>
                <Link to="/">
                    <span 
                        className={cl.menu__item} 
                        onClick={() => props.logOutAccount()}>Выход</span>
                </Link>
            </li>
        </ul>
    )
}

export default MenuExit;