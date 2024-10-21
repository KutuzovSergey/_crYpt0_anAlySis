import { ProfilePhotoType } from "../typesMain"

export type ValueUserType = {
    userName: string,
    userPassword: string,
    userRepeatPassword: string,
    userMail: string,
    userPhone: string,
    userPhoto?: any
}

export type ErrorStatusType = {[key: string]: boolean}

export type ErrorType = {[key: string]: string}

export type CheckValidErrorsType = () => boolean

export type UseInputControlType = {
    valueUserInfo: ValueUserType,
    errorStatus: ErrorStatusType,
    onChangeInput: (e: React.ChangeEvent) => void,
    validation: (e:  React.FormEvent) => CheckValidErrorsType,
    error: ErrorType,
    resetFormValues: (reasonDataReset: boolean) => void
}

export type UseUploadImageType = [
    srcProfilePhoto: ProfilePhotoType,
    uploadImage: () => void,
    showUploadedImage: (e: React.ChangeEvent<HTMLInputElement>) => void,
    resetInputFile: (user: HTMLImageElement) => void,
    dirtyInput?: boolean,
    setSrcProfilePhoto?: (srcProfilePhoto: ProfilePhotoType) => void
]

export type FileType = {
    lastModified: number,
    lastModifiedDate: any,
    name: string
    size: number,
    type: string,
    webkitRelativePath: string
}

export type NewUseInputControlType = {
    valueUserInfo: ValueUserType,
    errorStatus: ErrorStatusType,
    onChangeInput: (e: React.ChangeEvent) => void,
    validation: (e: React.FormEvent) => CheckValidErrorsType,
    error: ErrorType,
    resetFormValues: () => void,
    closingTtheInput: () => void,
    returningTheStateInput: () => void,
    closeInput: {
        current: boolean
    }
    resetFormValue: (inputId: string) => void,
    checkingDataChanges: () => ValueUserType
}