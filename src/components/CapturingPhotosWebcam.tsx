import React, { useRef } from "react";
import MyButtonSmall from "./UI/MyButtonSmall/MyButtonSmall";
import ImitationButton from "./UI/ImitationButton/ImitationButton";
import { useTakingPhoto } from "../hooks/useTakingPhoto";
import { ProfilePhotoType } from "../type/typesMain";

import '../styles/componentStyles/CapturingPhotosWebcam.scss';

type Props = {
    closeWebcam: () => void
    installingSnapshot: (snapshot: ProfilePhotoType) => void
}

const CapturingPhotosWebcam:React.FC<Props> = (props: Props) => {

    const canvas = useRef(null);
    const photo = useRef(null);
    const video = useRef(null);

    const [takingPhoto, clearPhoto, applyingPhoto, srcImg, displayControl] = useTakingPhoto(canvas.current, photo.current, video.current, props.closeWebcam, props.installingSnapshot);

    return (
        <div className="webcam">
            <div className="webcam__close">
                <MyButtonSmall onClick={() => {props.closeWebcam()}} >&#10006;</MyButtonSmall>
            </div>
                
            <div className="webcam__camera">
                <video 
                    id="video" 
                    className={!displayControl ? "webcam__video" : "webcam__video_show"} 
                    autoPlay={true}
                    ref={video}>Video stream not available.</video>
                <canvas id="canvas" className="webcam__canvas" ref={canvas}>
                </canvas>
                <div className={displayControl ? "webcam__image" : "webcam__image_show"}>
                    <img src={srcImg} id="photo" alt="screenshot" ref={photo}/>
                </div>
            </div>

            <div className="webcam__button__block">
                { 
                    displayControl ? 
                        <div className="webcam__button">
                            <ImitationButton onClick={takingPhoto} id="startbutton">сделать фото</ImitationButton>
                        </div>
                    :
                        <div className="webcam__webcam__images">
                            <ImitationButton onClick={applyingPhoto} id="startbutton">применить</ImitationButton>
                            <ImitationButton onClick={clearPhoto} id="startbutton">сбросить</ImitationButton>
                        </div>
                }
                
            </div>
        </div>
    )
}

export default CapturingPhotosWebcam;