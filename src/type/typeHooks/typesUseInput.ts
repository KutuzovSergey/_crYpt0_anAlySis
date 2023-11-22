export type ProfilePhotoType = HTMLImageElement | ArrayBuffer | null | string | undefined

export type ValueUserType = {
    userName: string,
    userPassword: string,
    userRepeatPassword: string,
    userMail: string,
    userPhone: string,
}

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

export type FileType = {
    lastModified: number,
    lastModifiedDate: any,
    name: string
    size: number,
    type: string,
    webkitRelativePath: string
}
// DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> |