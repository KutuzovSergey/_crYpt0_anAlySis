export type ValueUserType = {[key: string]: string}

export type ErrorStatusType = {[key: string]: boolean}

export type ErrorType = {[key: string]: string}

export type CheckValidErrorsType = () => boolean

export type UseInputControlType = {
    valueUserInfo: ValueUserType
    errorStatus: ErrorStatusType,
    onChangeInput: (e: React.ChangeEvent) => void,
    validation: (e:  React.FormEvent) => CheckValidErrorsType,
    error: ErrorType,
    resetFormValues: (reasonDataReset: boolean) => void
}

export type UseUploadImageType = [
    srcProfilePhoto: HTMLImageElement,
    uploadImage: () => void,
    showUploadedImage: (e: React.ChangeEvent<HTMLInputElement>) => void,
    resetInputFile: (user: HTMLImageElement) => void
]