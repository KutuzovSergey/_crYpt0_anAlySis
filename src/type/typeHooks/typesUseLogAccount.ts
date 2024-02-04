
export type ErrorType = {
    loginError: string,
    passwordError: string
}

export type ValueType = {
    login: string,
    password: string
}

export type ErrorStatusType = {
    loginStatus: boolean,
    passwordStatus: boolean,
}

export type CheckResultType = () => boolean

export type LogAccountType = [
    errorMessage: ErrorType,
    formLogValue: ValueType,
    loginErrorStatus: ErrorStatusType,
    loginChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    validLogin: (e: React.FormEvent) => CheckResultType,
    resetLog: () => void,
]