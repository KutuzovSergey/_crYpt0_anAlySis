import { useEffect, useState } from "react";

export const useEmailControl = () => {
    const [valueEmail, setValueEmail] = useState('');
    const [messageUser, setMessageUser] = useState('');
    const [emailValid, setEmailValid] = useState(false);
    const [showMessage, setShowMessage] = useState(false);

    const onChangeEmail = (e) => {
        setValueEmail(e.target.value);
    }

    const validEmail = (e) =>{
        const pattern_mail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        const form = e.target;
        const formValue = form.mail.value.trim();
        let newMessageUser = '';

            if (!formValue) {
                newMessageUser = 'Введите почту';
            } else if (!pattern_mail.test(String(formValue.toLowerCase()))) {
                newMessageUser = 'Некорректный E-mail';
            } else {
                newMessageUser = 'Спасибо за подписку, подписка оформленна!';
            }

        setMessageUser(newMessageUser);
    }

    useEffect(() =>{ 
        if (valueEmail != '' && messageUser === 'Спасибо за подписку, подписка оформленна!') {
            console.log(`не было ошибок`);
            setEmailValid(true);
        } else {
            setEmailValid(false);
            console.log(`были ошибки`);
        }
    }, [messageUser, valueEmail]);

    const resetEmail = (reasonDataReset, stateСhange) => {
        if (reasonDataReset) {
            stateСhange('');
        } else {
            return
        }
    }
    const resetEmailValues = (reasonDataReset) => {
        resetEmail(reasonDataReset, setValueEmail);
        // if (reasonDataReset) {
        //     setValueEmail('');
        //     setMessageUser('');
        // } else {
        //     return
        // }
    }

    const changeShowMessage = (stateModalWindow) =>{
        setShowMessage(stateModalWindow);
    }

    return {
        emailValid,
        valueEmail,
        messageUser,
        showMessage,
        validEmail,
        onChangeEmail,
        resetEmailValues,
        changeShowMessage
    }
}