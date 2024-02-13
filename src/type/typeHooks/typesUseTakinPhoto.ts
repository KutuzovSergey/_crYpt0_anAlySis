import { ProfilePhotoType } from "../typesMain";

export type UseTakinPhotoType = [
    // drawVideoCanvas: () => void,
    takingPhoto: () => void,
    clearPhoto: () => void,
    applyingPhoto: () => void,
    srcImg: ProfilePhotoType,
    displayControl: boolean
]

export type StreamVideoType = {
    current: any
}