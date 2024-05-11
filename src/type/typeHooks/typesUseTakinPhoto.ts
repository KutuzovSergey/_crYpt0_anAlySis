import { ProfilePhotoType } from "../typesMain";

export type UseTakinPhotoType = [
    takingPhoto: () => void,
    clearPhoto: () => void,
    applyingPhoto: () => void,
    playingVideo: () => void,
    videoPause: () => void,
    srcImg: ProfilePhotoType,
    displayControl: boolean
]

export type StreamVideoType = {
    current: any
}