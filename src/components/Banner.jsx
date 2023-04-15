import React, { useEffect, useLayoutEffect, useState } from "react";
import baner from "../images/home/baner_1.png";

import "../styles/componentStyles/Banner.scss";

const arrImgBanner = [
    {src: 'https://raw.githubusercontent.com/KutuzovSergey/images/main/baner_1.jpg', alt: 'baner', id: 0},
    {src: 'https://raw.githubusercontent.com/KutuzovSergey/images/main/baner_2.jpg', alt: 'baner', id: 1},
    {src: 'https://raw.githubusercontent.com/KutuzovSergey/images/main/baner_3.jpg', alt: 'baner', id: 2},
    {src: 'https://raw.githubusercontent.com/KutuzovSergey/images/main/baner_4.jpg', alt: 'baner', id: 3},
    {src: 'https://raw.githubusercontent.com/KutuzovSergey/images/main/baner_5.jpg', alt: 'baner', id: 4},
];

const Banner = () => {
    const [bannerActive, setBannerActive] = useState(0);
    const [dataBanner, setDataBanner] = useState([]);
    const [loadedImg, setLoadedImg] = useState(false);

    const slideChange = () => {

        setBannerActive(prev=>prev+=1);

        if (bannerActive === dataBanner.length-1) {
            setBannerActive(0);
        }
    }

    const switchSlide = (slide) =>{
        setBannerActive(slide);
    }

    useLayoutEffect(() =>{
        setDataBanner(arrImgBanner);
    }, []);

    const getLoadedImg = (load) =>{
        setLoadedImg(load);
    }
    useEffect(()=>{
        let timer =  setTimeout(slideChange, 4000);
        return () => clearInterval(timer)
    },[bannerActive]);

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