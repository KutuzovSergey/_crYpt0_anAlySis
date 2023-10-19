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

    const validationCheck = () =>{
        let emailValid = false;

        if (valueEmail != '' && messageUser === 'Спасибо за подписку, подписка оформленна!') {
            emailValid = true;
        } else {
            emailValid = false;
        }

        return emailValid
    }

    // useEffect(() =>{ 
    //     let errorValid = false;

    //     if (valueEmail != '' && messageUser === 'Спасибо за подписку, подписка оформленна!') {
    //         errorValid = true;
    //     } else {
    //         errorValid = false;
    //     }

    //     if (errorValid) {
    //         console.log(errorValid);
    //         setEmailValid(true);
    //     } else {
    //         setEmailValid(false);
    //     }
    // }, [showMessage]);

    const resetEmail = (reasonDataReset, stateСhange) => {
        if (reasonDataReset) {
            stateСhange('');
        } else {
            return
        }
    }
    const resetEmailValues = (reasonDataReset) => {
        console.log(reasonDataReset);
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
        changeShowMessage,
        validationCheck
    }
}