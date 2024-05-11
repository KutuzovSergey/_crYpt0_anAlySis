import { useState, useEffect, useRef } from "react";
import { StreamVideoType, UseTakinPhotoType } from "../type/typeHooks/typesUseTakinPhoto";
import { ProfilePhotoType } from "../type/typesMain";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { useDispatch } from "react-redux";
import { changeVideoPlayback } from "../action/actionCreators";

export const useTakingPhoto = (canvas: HTMLCanvasElement | null, 
    photo: HTMLImageElement | null, 
    video: HTMLVideoElement | null,
    closeWebcam: () => void,
    installingSnapshot: (snapshot: ProfilePhotoType) => void): UseTakinPhotoType =>{

    const dispatch = useDispatch();
    
    const [displayControl, setDisplayControl] = useState<boolean>(true);
    const [srcImg, setSrcImg] = useState<ProfilePhotoType>(null);
    const streamVideo = useRef<any>(null);
    const takingPhotos: boolean = useSelector((state: RootState) => state.generalApp.isDisableModal); 

    let isPlaying: boolean = true;

    const playingVideo = () => {
        isPlaying = true;
        dispatch(changeVideoPlayback(true));
    }
    // const changeVideoPlayback = (playingVideo: boolean): void =>{
    //     console.log(playingVideo);
    //     dispatch(changingVideoPlayback(playingVideo))
    // }
    const videoPause = () => {
        isPlaying = false;
        dispatch(changeVideoPlayback(false));
    }

    // const isPlaying: boolean = useSelector((state: RootState) => state.generalApp.videoPlayback);

    useEffect(() => {
        console.log(isPlaying);
    }, [isPlaying]);

    const playCamera = () =>{
        navigator.mediaDevices.getUserMedia({ video: true, audio: false})
        .then(function (stream){
            setDisplayControl(true);
            streamVideo.current = stream;
            if (video) {
                video!.srcObject = streamVideo.current;
                console.log(video.paused);
                if (video.paused) {
                    video.play();
                }
            }
        })
        .catch(function(error){
            console.log(error);
        })
    }

    useEffect(() =>{
        if (takingPhotos) {
            console.log('We are here');
            playCamera();
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
            canvas.width = 240;
            canvas.height = 240;
            const yPhoto = Math.round(videoWidth / 6.2);

            context!.drawImage(video, -yPhoto, -10, videoWidth, videoHeight);

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
        playingVideo,
        videoPause,
        srcImg,
        displayControl
    ]
}