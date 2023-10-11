import React, { useState } from 'react';
import { useInputControl } from '../hooks/useInput';
import MyModal from './UI/MyModal/MyModal';
import MyInput from './UI/MyInput/MyInput';
import MessageToUser from './UI/MessageToUser/MessageToUser';

import '../styles/componentStyles/SubscribeNews.scss';

const SubscribeNews = () =>{
    
    const [showMessage, setShowMessage] = useState(false);
    const [messageUser, setMessageUser] = useState('Спасибо за подписку, подписка оформленна!');
    const {valueUserInfo, errorStatus, onChangeInput, validation, formValid, error, resetFormValues} = useInputControl();

    const subscribeSitesNews = (e) =>{
        e.preventDefault();
        validation(e);
        setShowMessage(true);

        console.log(`formValid: ${formValid}`);
        if (formValid) {
            console.log(`formValid: ${formValid}`);
            resetFormValues(true);
            // console.log(error);
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
                                value={valueUserInfo.valueMailPhone}
                                className='subscribe__input' placeholder='Введите свой E-Mail'
                                onChange={ (e) => onChangeInput(e)} />
                            <button className='subscribe__button'>Подписаться</button>
                        </div>
                    </form>
                </div>
            </div>
            <MyModal className="modal" active={showMessage} setActive={setShowMessage}>
                {error.errorMailPhone === '' ?
                    <MessageToUser>{messageUser}</MessageToUser>   
                :
                    <MessageToUser>{error.errorMailPhone}</MessageToUser>
                }
            </MyModal>
        </div>
    )
}

export default SubscribeNews;