import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import '../styles/Header.scss';

const Header = () =>{
    return (
        <header className="header">
            <div className="login">
                <img src={logo} alt="login" className="login__image" />
            </div>
            <nav className="menu">
                <ul className="menu__block">
                    <li className="menu__item"><Link to="/">Главная</Link></li>
                    <li className="menu__item"><Link to="/currences">Монеты</Link></li>
                    <li className="menu__item"><span>Вход</span> / <span>Регистрация</span></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;