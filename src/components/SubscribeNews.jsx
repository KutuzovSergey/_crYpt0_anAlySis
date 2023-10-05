import React, { useState } from 'react';
import { useInputControl } from '../hooks/useInput';
import MyModal from './UI/MyModal/MyModal';

import '../styles/componentStyles/SubscribeNews.scss';
import MessageToUser from './UI/MessageToUser/MessageToUser';

const SubscribeNews = () =>{
    
    const [showMessage, setShowMessage] = useState(false);
    const [messageUser, setMessageUser] = useState('Спасибо за подписку, подписка оформленна!');
    const {valueUserInfo, errorStatus, onChangeInput, validation, formValid, error, resetFormValues} = useInputControl();

    const subscribeSitesNews = (e) =>{
        e.preventDefault();
        validation(e);
        setShowMessage(true);

        console.log(valueUserInfo);
        if (formValid) {
            resetFormValues(true);
        }
    }

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
                    <form action="" className='subscribe__form' onSubmit={subscribeSitesNews}>
                        <div  className='subscribe__form_block'>
                            <input 
                                type='text' 
                                name='mail'
                                className='subscribe__input' placeholder='Введите свой E-Mail'
                                onChange={ (e) => onChangeInput(e)} />
                            <button className='subscribe__button'>Подписаться</button>
                        </div>
                    </form>
                </div>
                <div className='subscribe__notification'>
                    <span>Подписка оформлина</span>
                </div>
            </div>
            <div>
                <MyModal className="modal" active={showMessage} setActive={setShowMessage}>
                    {errorStatus.errorMailPhone ?
                        <MessageToUser>{error.mailPhone}</MessageToUser>
                    :
                        <MessageToUser>{messageUser}</MessageToUser>
                    }
                </MyModal>
            </div>
        </div>
    )
}

export default SubscribeNews;