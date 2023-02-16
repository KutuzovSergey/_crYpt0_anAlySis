import React from 'react';
import logo from '../images/logo.png'
import '../styles/Header.scss';

const Header = () =>{
    return (
        <header className="header">
            <div className="login">
                <img src={logo} alt="login" className="login__image" />
            </div>
            <nav className="menu">
                <ul className="menu__block">
                    <li className="menu__item">Главная</li>
                    <li className="menu__item">О проекте</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;