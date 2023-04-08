import React, { useContext } from "react";
import { AutchContext } from "../../../context";

import cl from "./BurgerMenu.module.scss";

const BurgerMenu = (props) =>{
    const {setMenuAdaptive, menuAdaptive} = useContext(AutchContext);

    const chengeAdapiveMenu = (index) => {
        setMenuAdaptive(index)
    }

    return (
        <div className={cl.menu} onClick={() => {chengeAdapiveMenu(!menuAdaptive)}}>
            <div className={cl.menu__burger_btn}>
                <span></span>
            </div>
        </div>
    )
}

export default BurgerMenu;