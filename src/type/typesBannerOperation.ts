export type ImgBanner = {
    src: string,
    alt: string,
    id: number
}[];

export type BannerOperation = [
    bannerActive: number,
    dataBanner: {
        src: string,
        alt: string,
        id: number
    }[],
    loadedImg: boolean,
    switchSlide: (id: number) => void,
    getLoadedImg: (indicator: boolean) => void
]