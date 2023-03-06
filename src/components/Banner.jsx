import React, { useEffect, useMemo, useState } from "react";
import "../styles/componentStyles/Banner.scss";
import baner_4 from "../images/home/baner_4.jpg";
import baner_5 from "../images/home/baner_5.jpg";

const Banner = () => {
    const [bannerActive, setBannerActive] = useState(0);
    const [dataBanner, setDataBanner] = useState([])

    const getBanerImg = () => {
        const arr = [
            {src: 'https://raw.githubusercontent.com/KutuzovSergey/images/main/baner_1.jpg', alt: 'baner image', id: 0},
            {src: 'https://raw.githubusercontent.com/KutuzovSergey/images/main/baner_2.jpg', alt: 'baner image', id: 1},
            {src: 'https://raw.githubusercontent.com/KutuzovSergey/images/main/baner_3.jpg', alt: 'baner image', id: 2},
            {src: 'https://raw.githubusercontent.com/KutuzovSergey/images/main/baner_4.jpg', alt: 'baner image', id: 3},
            {src: 'https://raw.githubusercontent.com/KutuzovSergey/images/main/baner_5.jpg', alt: 'baner image', id: 4},
        ];

        setDataBanner(arr);
    }

    const slideChange = () => {
        let indicator = bannerActive;
            
            if (indicator === dataBanner.length - 1) {
                indicator = 0;
            } else {
                indicator = ++indicator;
            }
        setBannerActive(indicator);
        // return indicator
    }

    setInterval(slideChange, 2000000);

    const switchSlide = (slide) =>{
        setBannerActive(slide);
    }

    // const interval = useMemo(() => {
    //     slideChange()
    // }, bannerActive);

    // console.log(bannerActive);

    useEffect(() => getBanerImg(), []);

    return(
        <div className="banner">
            {
                dataBanner.map( img =>
                    <div key={img.id} className={bannerActive === img.id ? "banner__block banner-active": "banner__block"} >
                        <img src={img.src} alt={img.alt} />
                        <span>{bannerActive === img.id}</span>
                    </div>
                )
            }
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