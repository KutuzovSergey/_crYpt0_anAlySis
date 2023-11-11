import React, { useContext, useState, useEffect } from "react";
import MyButtonSmall from "./UI/MyButtonSmall/MyButtonSmall";
import ImitationButton from "./UI/ImitationButton/ImitationButton";

import '../styles/componentStyles/CapturingPhotosWebcam.scss';

type Props = {
    closeWebcam: () => void
}

const CapturingPhotosWebcam:React.FC<Props> = (props: Props) => {

    const width: number = 320;    // Этим создадим ширину фотографии
    let height: number = 0;    // Это будет вычисляться на основе входящего потока
    
    let streaming = false;
    
    const video = React.createRef();
    const canvas = React.createRef();
    const photo = React.createRef();

    return (
        <div className="webcam">
            <div className="webcam__close">
                <MyButtonSmall onClick={() => {props.closeWebcam()}} >&#10006;</MyButtonSmall>
            </div>
                
            <div className="webcam__photo">
                {/* <canvas id="canvas" ref={canvas}>
                </canvas> */}
                <div className="output">
                    {/* <img src="" id="photo" alt="screenshot" ref={photo}/> */}
                </div>
            </div>
            <div className="webcam__camera">
                {/* <video id="video" ref={video}>Video stream not available.</video> */}
                <div className="webcam__button">
                    {/* <ImitationButton id="startbutton">сделать фото</ImitationButton> */}
                </div>
            </div>
            </div>
    )
}

export default CapturingPhotosWebcam;