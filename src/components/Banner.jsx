import React from "react";
import "../styles/componentStyles/Banner.scss";
import baner_4 from "../images/home/baner_4.jpg";
import baner_5 from "../images/home/baner_5.jpg";

const Banner = () => {
    
    return(
        <div className="banner" onClick={() => getRegistr()}>
            <div className="banner__block">
                <img src={baner_4} alt="baner image" />
            </div>
        </div>
    )
}

export default Banner;