import React from "react";
import '../styles/componentStyles/InfoApplication.scss';
import imgFon from '../images/home/imgFon.jpg';

const InfoApplication = () => {
    return (
        <div className="info">
            <div className="info__title">
                <span>О ресурсе</span>
            </div>
            <div className="info__block">
                <div className="info__text">
                    <p>Для того, чтобы повысить доходность сделок, трейдеры должны использовать все доступные им средства для снижения риска.</p>
                    <p>Обычно для этой цели проводят анализ выбранных активов с применением методов технического и фундаментального анализа.</p>
                    <p>Нашь ресурс предоставляет полноценный набор инструментов для тчательного анализа рынка и отдельных криптовалют.</p>
                </div>
                <div className="info__picture">
                    <img src={imgFon} alt="background picture" />
                </div>
            </div>
        </div>
    )
}

export default InfoApplication;