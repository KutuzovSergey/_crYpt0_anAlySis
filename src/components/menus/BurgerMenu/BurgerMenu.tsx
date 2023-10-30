import React, { useContext } from "react";
import { AppContext } from "../../../context";

import cl from "./BurgerMenu.module.scss";

const BurgerMenu:React.FC = () =>{
    const {setMenuAdaptive, menuAdaptive} = useContext<any>(AppContext);

    const chengeAdapiveMenu = (index: boolean) => {
        setMenuAdaptive(index);
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