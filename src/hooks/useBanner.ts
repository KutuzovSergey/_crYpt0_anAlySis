import { useState, useLayoutEffect, useEffect } from "react";
import { ImgBanner, BannerOperationType } from "../type/typeHooks/typesUseBanner";

export const useBannerOperation = (): BannerOperationType =>{
    const [bannerActive, setBannerActive] = useState<number>(0);
    const [dataBanner, setDataBanner] = useState<ImgBanner>([]);
    const [loadedImg, setLoadedImg] = useState<boolean>(false);

    const arrImgBanner: ImgBanner = [
        {src: 'https://raw.githubusercontent.com/KutuzovSergey/images/main/baner_1.jpg', alt: 'baner', id: 0},
        {src: 'https://raw.githubusercontent.com/KutuzovSergey/images/main/baner_2.jpg', alt: 'baner', id: 1},
        {src: 'https://raw.githubusercontent.com/KutuzovSergey/images/main/baner_3.jpg', alt: 'baner', id: 2},
        {src: 'https://raw.githubusercontent.com/KutuzovSergey/images/main/baner_4.jpg', alt: 'baner', id: 3},
        {src: 'https://raw.githubusercontent.com/KutuzovSergey/images/main/baner_5.jpg', alt: 'baner', id: 4},
    ];

    const slideChange = (): void => {

        setBannerActive(prev=>prev+=1);

        if (bannerActive === dataBanner.length-1) {
            setBannerActive(0);
        }
    }

    const switchSlide = (slide: number): void =>{
        setBannerActive(slide);
    }

    useLayoutEffect(() =>{
        setDataBanner(arrImgBanner);
    }, []);

    const getLoadedImg = (load: boolean): void =>{
        setLoadedImg(load);
    }
    useEffect(()=>{
        let timer =  setTimeout(slideChange, 4000);
        return () => clearInterval(timer)
    },[bannerActive]);

    return [
        bannerActive,
        dataBanner,
        loadedImg,
        switchSlide,
        getLoadedImg,
    ]
}