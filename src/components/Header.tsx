import React, { useContext } from 'react';
import { AppContext } from '../context';
import Login from './Login';
import MainMenu from './menus/MainMenu/MainMenu';
import MenuExit from './menus/MenuExit/MenuExit';
import EntryMenu from './menus/EntryMenu/EntryMenu';
import BurgerMenu from './menus/BurgerMenu/BurgerMenu';

import '../styles/componentStyles/Header.scss';

const Header:React.FC = () =>{
    const {setModalLogin, setModalRegistr, isAuth, setIsAuth, errorPages, setErrorPages, setMenuAdaptive} = useContext<any>(AppContext);

    const openModalLogin = (): void =>{
        setModalRegistr(false);
        setModalLogin(true);
    }

    const openModalRegistration = (): void =>{
        setModalLogin(false);
        setModalRegistr(true);
    }

    const logOutAccount = (): void =>{
        setIsAuth(false);
        localStorage.isAuth = false;
    }

    const showMainPageMenu = (): void =>{
        setErrorPages(false);
    }
    
    return (
        <div className='header__wrapper'>
            <header className="header" onClick={() => {setMenuAdaptive(false)}}>
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