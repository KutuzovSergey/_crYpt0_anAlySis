import React from "react";
import { Link } from 'react-router-dom';

import cl from "./MenuExit.module.scss";

type Props = {
    logOutAccount: () => void
}

const MenuExit:React.FC<Props> = (props: Props) =>{
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