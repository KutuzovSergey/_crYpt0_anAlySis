import React from "react";
import baner from "../images/home/baner_1.png";
import { useBannerOperation } from "../hooks/useBanner";

import "../styles/componentStyles/Banner.scss";

const Banner:React.FC = () => {
    const [bannerActive, dataBanner, loadedImg, switchSlide, getLoadedImg,] = useBannerOperation();
    
    return(
        <div className="banner">
            <div className={loadedImg ? "banner__wrapper banner-hide" : "banner__wrapper" }>
                {
                    dataBanner.map( img =>
                        <div key={img.id} className={bannerActive === img.id ? "banner__block banner-active" : "banner__block"} >
                            <img 
                                src={img.src} 
                                alt={img.alt}
                                onError={() => getLoadedImg(true)}
                                onLoad={() => getLoadedImg(false)}
                                />
                            <span>{bannerActive === img.id}</span>
                        </div>
                    )
                }
            </div>
            <div className={loadedImg ? "banner__fon" : "banner__fon banner-hide"}>
                <img src={baner} alt="baner" />
            </div>
            <div className="banner__switches">
                {
                dataBanner.map(swit => 
                    <span 
                        key={swit.id}
                        onClick={() => switchSlide(swit.id)} 
                        className={bannerActive === swit.id ? "banner__switch banner__switch-active": "banner__switch"}></span>
                    )
                }
                
            </div>
        </div>
    )
}

export default Banner;