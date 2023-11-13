export type ValidCheckResultType = () => boolean

export type EmailControlType = readonly [
    valueEmail: string,
    messageUser: string,
    showMessage: boolean,
    validEmail: (e: React.FormEvent<HTMLFormElement>) => ValidCheckResultType,
    onChangeEmail: (e: React.ChangeEvent<HTMLInputElement>) => void,
    resetEmailValues: (reasonDataReset: boolean) => void,
    changeShowMessage: (stateModalWindow: boolean) => void
]