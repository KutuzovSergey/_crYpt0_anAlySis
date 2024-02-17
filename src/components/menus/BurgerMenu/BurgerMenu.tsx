import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { changeMenuAdaptive } from "../../../action/actionCreators";

import cl from "./BurgerMenu.module.scss";


const BurgerMenu:FC = () =>{
    const dispatch = useDispatch();
    const menuAdaptive: boolean = useSelector((state: RootState) => state.generalApp.menuAdaptive);

    const chengeAdapiveMenu = (index: boolean) => {
        dispatch(changeMenuAdaptive(index));
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