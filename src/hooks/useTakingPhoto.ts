import { useState, useEffect, useRef } from "react";
import { StreamVideoType, UseTakinPhotoType } from "../type/typeHooks/typesUseTakinPhoto";
import { ProfilePhotoType } from "../type/typesMain";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export const useTakingPhoto = (canvas: HTMLCanvasElement | null, 
    photo: HTMLImageElement | null, 
    video: HTMLVideoElement | null,
    closeWebcam: () => void,
    installingSnapshot: (snapshot: ProfilePhotoType) => void): UseTakinPhotoType =>{

    const [displayControl, setDisplayControl] = useState<boolean>(true);
    const [srcImg, setSrcImg] = useState<ProfilePhotoType>(null);
    const streamVideo = useRef<any>(null);
    const takingPhotos: boolean = useSelector((state: RootState) => state.generalApp.isDisableModal); 

    let isPlaying: boolean = true;

    const playingVideo = () => {
        isPlaying = true;
    }

    const videoPause = () => {
        isPlaying = false;
    }

    const playCamera = () =>{
        navigator.mediaDevices.getUserMedia({ video: true, audio: false})
        .then(function (stream){
            setDisplayControl(true);
            streamVideo.current = stream;
            if (video) {
                video!.srcObject = streamVideo.current;
                if (video.paused && !isPlaying) {
                    video.play();
                }
            }
        })
        .catch(function(error){
            console.log(error);
        })
    }

    useEffect(() =>{
        // const getDeviceMedia = async () =>{
        //     const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false});
                
        //     if (video) {
        //         streamVideo.current = stream;
        //         video!.srcObject = stream;
        //         setDisplayControl(true);
        //         if (!video.paused && isPlaying) {
        //             return video!.play();
        //         }
        //     }
        // }

        if (takingPhotos) {
            playCamera();
            // getDeviceMedia()
        }
    }, [takingPhotos]);

    const stopVideoStream = (streamVideo: StreamVideoType): void =>{
        if (streamVideo.current !== null) {
            streamVideo.current.getTracks().forEach(function(track: any) {
                track.stop();
            });
        }
        video?.pause();
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

            stopVideoStream(streamVideo);

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
        playCamera,
        playingVideo,
        videoPause,
        srcImg,
        displayControl
    ]
}