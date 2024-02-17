import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { changeErrorPages, changeIsAuth, changeMenuAdaptive, changeModalLogin, changeModalRegistr } from "../action/actionCreators";
import { RootState } from '../store';
import Login from './Login';
import MainMenu from './menus/MainMenu/MainMenu';
import MenuExit from './menus/MenuExit/MenuExit';
import EntryMenu from './menus/EntryMenu/EntryMenu';
import BurgerMenu from './menus/BurgerMenu/BurgerMenu';

import '../styles/componentStyles/Header.scss';

const Header:React.FC = () =>{
    const isAuth: boolean = useSelector((state: RootState) => state.generalApp.isAuth);
    const errorPages: boolean = useSelector((state: RootState) => state.generalApp.errorPages);
    const dispatch = useDispatch();

    const openModalLogin = (): void =>{
        dispatch(changeModalRegistr(false));
        dispatch(changeModalLogin(true));
    }

    const openModalRegistration = (): void =>{
        dispatch(changeModalLogin(false));
        dispatch(changeModalRegistr(true));
    }

    const logOutAccount = (): void =>{
        if (errorPages) {
            dispatch(changeErrorPages(false));
        }
        dispatch(changeIsAuth(false));
        localStorage.isAuth = false;
    }

    const showMainPageMenu = (): void =>{
        dispatch(changeErrorPages(false));
    }
    
    return (
        <div className='header__wrapper'>
            <header className="header" onClick={() => {dispatch(changeMenuAdaptive(false))}}>
                <Login />
                <div className="header__menu">
                    {
                        isAuth ?
                        <div className='header__menu__wrapper'>
                            <MainMenu />
                            <div className='header__menu__burger__wrapper'>
                                <div className='header__menu__burger' onClick={(e) => {e.stopPropagation()}}>
                                    <BurgerMenu />
                                </div>
                            </div>
                            <MenuExit logOutAccount={logOutAccount} />
                        </div>
                        :
                        <EntryMenu
                            errorPages={errorPages}
                            openModalLogin={openModalLogin} 
                            showMainPageMenu={showMainPageMenu}
                            openModalRegistration={openModalRegistration}/>
                    }
                </div>
            </header>
        </div>
    )
}

export default Header;