import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AutchContext } from '../context';
import logo from '../images/logo.png';

import '../styles/componentStyles/Header.scss';

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
        <header className="header">
            <div className="login">
                <img src={logo} alt="login" className="login__image" />
            </div>
            <nav className="menu">
                {
                    isAuth ?
                    <ul className="menu__block">
                        <li className="menu__item"><Link to="/">Главная</Link></li>
                        <li className="menu__item"><Link to="/currences">Монеты</Link></li>
                        <li className="menu__item">
                            <Link to="/"><span className='menu__item__text menu__item__link' onClick={() => logOutAccount()}>Выход</span></Link>
                        </li>
                    </ul>
                    :
                    <ul className="menu__block">
                        {
                            errorPages ?
                            <li className="menu__item"><Link to="/" onClick={() => showMainPageMenu()}>Главная</Link></li>
                            :
                            <li className="menu__item">
                                <span className='menu__item__text menu__item__link' 
                                    onClick={() => openModalLogin()}>Вход</span>
                                <span className='menu__item__text'> / </span>
                                <span className='menu__item__text menu__item__link' 
                                    onClick={() => openModalRegistration()}>Регистрация</span>
                            </li>
                        }
                    </ul>
                }
            </nav>
        </header>
    )
}

export default Header;