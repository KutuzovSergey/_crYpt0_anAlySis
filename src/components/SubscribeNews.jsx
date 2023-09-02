import React, { useContext } from 'react';

import '../styles/componentStyles/SubscribeNews.scss';

const SubscribeNews = () =>{
    
    return (
        <div className='subscribe subscribe-margins'>
            <div className='subscribe__wrapper'>
                <div className='subscribe__title'>
                    <span>Подписаться на рассылку ресурса</span>
                </div>
                <div className='subscribe__info subscribe__info-margins'>
                    <span>Для того чтобы быть в курсе последних новостей мира криптоволют </span>
                    <span>вы можите оформить подписку на нашь сайт.</span>
                    <span>Подписка предусматривает возможность отптсаться</span>
                </div>
                <div className='subscribe__block'>
                    <form action="" className='subscribe__form'>
                        <div  className='subscribe__form_block'>
                            <input type="text" className='subscribe__input' placeholder='Введите свой E-Mail' />
                            <button className='subscribe__button'>Подписаться</button>
                        </div>
                    </form>
                </div>
                <div className='subscribe__notification'>
                    <span>Подписка оформлина</span>
                </div>
            </div>
        </div>
    )
}

export default SubscribeNews;