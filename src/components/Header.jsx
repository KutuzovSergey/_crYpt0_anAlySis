import React, { useContext } from 'react';
import { AutchContext } from '../context';
import Login from './Login';

import '../styles/componentStyles/Header.scss';
import MainMenu from './menus/MainMenu/MainMenu';
import MenuExit from './menus/MenuExit/MenuExit';
import EntryMenu from './menus/EntryMenu/EntryMenu';

const Header = () =>{
    const {setModalLogin, setModalRegistr, isAuth, setIsAuth, errorPages, setErrorPages,} = useContext(AutchContext);

    const openModalLogin = () =>{
        setModalLogin(true);
    }

    const openModalRegistration = () =>{
        setModalRegistr(true);
    }

    const logOutAccount = () =>{
        setIsAuth(false);
        localStorage.isAuth = false;
    }

    const showMainPageMenu = () =>{
        setErrorPages(false);
    }
    
    return (
        <div className='header__wrapper'>
            <header className="header">
                <Login />
                <div className="header__menu">
                    {
                        isAuth ?
                        <div className='header__menu__wrapper'>
                            <MainMenu />
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