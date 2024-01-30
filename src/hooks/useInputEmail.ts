import { useState } from "react";
import { _email } from "../utils/regularExpressions";
import { EmailControlType, ValidCheckResultType } from "../type/typeHooks/typesUseInputEmail";

export const useEmailControl = (): EmailControlType => {
    const [valueEmail, setValueEmail] = useState<string>('');
    const [messageUser, setMessageUser] = useState<string>('');
    const [showMessage, setShowMessage] = useState<boolean>(false);

    const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setValueEmail(e.target.value);
    }

    const validEmail = (e: React.FormEvent<HTMLFormElement>): ValidCheckResultType =>{
        const form = e.target as HTMLFormElement;
        const formValue: string = form.mail.value.trim();
        let newMessageUser: string = '';

        if (!formValue) {
            newMessageUser = 'Введите почту';
        } else if (!_email.test(String(formValue.toLowerCase()))) {
            newMessageUser = 'Некорректный E-mail';
        } else {
            newMessageUser = 'Спасибо за подписку, подписка оформлена!';
        }

        setMessageUser(newMessageUser);

        const validCheckResult = (): boolean => {
            let emailValid: boolean = false;

            if (newMessageUser === 'Спасибо за подписку, подписка оформлена!') {
                emailValid = true;
            } else {
                emailValid = false;
            }

            return emailValid
        }

        return validCheckResult
    }

    // const resetEmail = (reasonDataReset, stateСhange) => {
    //     if (reasonDataReset) {
    //         stateСhange('');
    //     } else {
    //         return
    //     }
    // }
    const resetEmailValues = (reasonDataReset: boolean): void => {
        // resetEmail(reasonDataReset, setValueEmail);

        if (reasonDataReset) {
            setValueEmail('');
        } else {
            return
        }
    }

    const changeShowMessage = (stateModalWindow: boolean): void =>{
        setShowMessage(stateModalWindow);
    }

    return [
        valueEmail,
        messageUser,
        showMessage,
        validEmail,
        onChangeEmail,
        resetEmailValues,
        changeShowMessage,
    ] as const
}