import React from "react";
import '../styles/Home.scss';
import baner from "../images/home/baner_1.jpeg";

const Home = () => {
    return (
        <div className="home">
            <div className="home__banner">
                <img src={baner} alt="baner image" />
            </div>
            <div className="home__text">
                <p>Для того, чтобы повысить доходность сделок, трейдеры должны использовать все доступные им средства для снижения риска. Обычно для этой цели проводят анализ выбранных активов с применением методов технического и фундаментального анализа.</p>
            </div>
        </div>
    )
}

export default Home;