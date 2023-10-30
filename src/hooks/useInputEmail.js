import { useState } from "react";
import { _email } from "../utils/regularExpressions";

export const useEmailControl = () => {
    const [valueEmail, setValueEmail] = useState('');
    const [messageUser, setMessageUser] = useState('');
    const [showMessage, setShowMessage] = useState(false);

    const onChangeEmail = (e) => {
        setValueEmail(e.target.value);
    }

    const validEmail = (e) =>{
        const form = e.target;
        const formValue = form.mail.value.trim();
        let newMessageUser = '';

            if (!formValue) {
                newMessageUser = 'Введите почту';
            } else if (!_email.test(String(formValue.toLowerCase()))) {
                newMessageUser = 'Некорректный E-mail';
            } else {
                newMessageUser = 'Спасибо за подписку, подписка оформлена!';
            }

        setMessageUser(newMessageUser);

        const validCheckResult = () => {
            let emailValid = false;

            if (newMessageUser === 'Спасибо за подписку, подписка оформлена!') {
                emailValid = true;
            } else {
                emailValid = false;
            }

            return emailValid
        }

        return validCheckResult()
    }

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