import React, { useState, useEffect, RefObject, LegacyRef, useRef } from "react";
import { StreamVideoType, UseTakinPhotoType } from "../type/typeHooks/typesUseTakinPhoto";
import { ProfilePhotoType } from "../type/typesMain";
import { useDispatch } from "react-redux";
import { changeDisableModal } from "../action/actionCreators";

export const useTakingPhoto = (canvas: HTMLCanvasElement | null, 
    photo: HTMLImageElement | null, 
    video: HTMLVideoElement | null,
    closeWebcam: () => void,
    installingSnapshot: (snapshot: ProfilePhotoType) => void): UseTakinPhotoType =>{

    const [displayControl, setDisplayControl] = useState<boolean>(true);
    const [srcImg, setSrcImg] = useState<ProfilePhotoType>(null);
    const streamVideo = useRef<any>(null);

    const playCamera = () =>{
        navigator.mediaDevices.getUserMedia({ video: true, audio: false})
        .then(function (stream){
            if (video !== null) {
                video!.srcObject = stream;
                video!.play();
                setDisplayControl(true);
                streamVideo.current = stream;
            }
        })
        .catch(function(error){
            console.log(error);
        })
    }

    // const getDeviceMedia = async () =>{
    //     const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false});
            
    //     if (video) {
    //         video!.srcObject = stream;
    //         video!.play();
    //         setDisplayControl(true);
    //     } 
    // }

    useEffect(() =>{
        // getDeviceMedia();
        playCamera();
    }, []); 

    const stopVideoStream = (streamVideo: StreamVideoType): void =>{
        if (streamVideo.current !== null) {
            streamVideo.current.getTracks().forEach(function(track: any) {
                track.stop();
            });
        }
    }

    const takingPhoto = () => {
        if (canvas && video) {
            const videoWidth = video.offsetWidth;
            const videoHeight = video.offsetHeight;
            const context = canvas.getContext('2d');
            canvas.width = videoWidth;
            canvas.height = videoHeight;
            context!.drawImage(video, 0, 0, videoWidth, videoHeight);

            const data = canvas.toDataURL('image/png');
            setSrcImg(data);

            streamVideo.current.getTracks().forEach(function(track: any) {
                track.stop();
            });

            setDisplayControl(false);
        }
    }

    const clearPhoto = () =>{
        if (canvas && photo) {
            const context = canvas.getContext('2d');
            context!.fillStyle = "#AAA";
            context!.fillRect(0, 0, canvas.width, canvas.height);

            const data = canvas.toDataURL('image/png');

            playCamera();
            setSrcImg(data);
            setDisplayControl(true);
        }
    }

    const applyingPhoto = () =>{
        stopVideoStream(streamVideo);
        closeWebcam();
        installingSnapshot(srcImg);
    }

    useEffect(() => {
        return stopVideoStream(streamVideo)
    });

    return [
        takingPhoto,
        clearPhoto,
        applyingPhoto,
        srcImg,
        displayControl
    ]
}