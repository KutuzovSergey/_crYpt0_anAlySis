import { ProfilePhotoType } from "../typesMain";

export type UseTakinPhotoType = [
    // drawVideoCanvas: () => void,
    takingPhoto: () => void,
    clearPhoto: () => void,
    applyingPhoto: () => void,
    playCamera: () => void,
    playingVideo: () => void,
    videoPause:  () => void,
    srcImg: ProfilePhotoType,
    displayControl: boolean
]

export type StreamVideoType = {
    current: any
}