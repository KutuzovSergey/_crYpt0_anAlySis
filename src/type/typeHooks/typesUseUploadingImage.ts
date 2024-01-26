import { ChangeEvent } from "react";
import { ProfilePhotoType } from "../typesMain";

export type UseUploadImageType = [
    srcProfilePhoto: ProfilePhotoType, 
    uploadImage: () => void,
    showUploadedImage: (e: ChangeEvent<HTMLInputElement>) => void,
    resetInputFile: (user: HTMLImageElement) => void
]