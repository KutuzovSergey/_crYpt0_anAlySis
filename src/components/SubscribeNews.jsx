import React, { useState } from 'react';
import { useEmailControl } from '../hooks/useInputEmail';
import MyModal from './UI/MyModal/MyModal';
import MyInput from './UI/MyInput/MyInput';
import MessageToUser from './UI/MessageToUser/MessageToUser';

import '../styles/componentStyles/SubscribeNews.scss';

const SubscribeNews = () =>{
    
    const {emailValid, 
            valueEmail, 
            messageUser, 
            showMessage, 
            validEmail, 
            onChangeEmail, 
            resetEmailValues, 
            changeShowMessage,
            validationCheck} = useEmailControl();

    const subscribeSitesNews = (e) =>{
        e.preventDefault();
        validEmail(e); 
        changeShowMessage(true);

        // console.log(`formValid: ${emailValid}`);
        if (validationCheck()) {
            resetEmailValues(true);
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
                            <MyInput
                                type='email' 
                                name='mail'
                                value={valueEmail}
                                className='subscribe__input' placeholder='Введите свой E-Mail'
                                onChange={ (e) => onChangeEmail(e)} />
                            <button className='subscribe__button'>Подписаться</button>
                        </div>
                    </form>
                </div>
            </div>
            <MyModal className="modal" active={showMessage} setActive={changeShowMessage}>
                    <MessageToUser>{messageUser}</MessageToUser>   
            </MyModal>
        </div>
    )
}

export default SubscribeNews;