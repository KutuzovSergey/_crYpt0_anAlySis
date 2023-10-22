import { useState } from "react";

export const useEmailControl = () => {
    const [valueEmail, setValueEmail] = useState('');
    const [messageUser, setMessageUser] = useState('');
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

        const validCheckResult = () => {
            let emailValid = false;

            if (newMessageUser === 'Спасибо за подписку, подписка оформленна!') {
                emailValid = true;
            } else {
                emailValid = false;
            }

            return emailValid
        }

        return validCheckResult()
    }

    // const validationCheck = () =>{
    //     let emailValid = false;

    //     if (valueEmail != '' && messageUser === 'Спасибо за подписку, подписка оформленна!') {
    //         emailValid = true;
    //     } else {
    //         emailValid = false;
    //     }

    //     return emailValid
    // }

    const resetEmail = (reasonDataReset, stateСhange) => {
        if (reasonDataReset) {
            stateСhange('');
        } else {
            return
        }
    }
    const resetEmailValues = (reasonDataReset) => {
        resetEmail(reasonDataReset, setValueEmail);
    }

    const changeShowMessage = (stateModalWindow) =>{
        setShowMessage(stateModalWindow);
    }

    return {
        valueEmail,
        messageUser,
        showMessage,
        validEmail,
        onChangeEmail,
        resetEmailValues,
        changeShowMessage,
    }
}