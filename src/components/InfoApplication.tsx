import React from "react";
import imgFon from '../images/home/imgFon.jpg';
import imgFon_second from '../images/home/imgFon_second.jpg';

import '../styles/componentStyles/InfoApplication.scss';

const InfoApplication:React.FC = () => {

    return (
        <div className="info">
            <div className="info__title">
                <span>О ресурсе</span>
            </div>
            <div className="info__wrapper">
                <div className="info__block info__block-reverse">
                    <div className="info__text">
                        <div className="info__text__block">
                            <p>Для того, чтобы повысить доходность сделок, трейдеры должны использовать все доступные им средства для снижения риска.</p>
                            <p>Обычно для этой цели проводят анализ выбранных активов с применением методов технического и фундаментального анализа.</p>
                            <p>Нашь ресурс предоставляет полноценный набор инструментов для тчательного анализа рынка и отдельных криптовалют.</p>
                        </div>
                    </div>
                    <div className="info__picture">
                        <img src={imgFon} alt="" />
                    </div>
                </div>
                <div className="info__block">
                    <div className="info__picture">
                        <img src={imgFon_second} alt="" />
                    </div>
                    <div className="info__text">
                        <div className="info__text__block">
                            <p>Для того, чтобы повысить доходность сделок, трейдеры должны использовать все доступные им средства для снижения риска.</p>
                            <p>Обычно для этой цели проводят анализ выбранных активов с применением методов технического и фундаментального анализа.</p>
                            <p>Нашь ресурс предоставляет полноценный набор инструментов для тчательного анализа рынка и отдельных криптовалют.</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoApplication;