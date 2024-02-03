export type InfoListInputType = {
    text: string, 
    id: number
}[]

export type UseSearchType = [
    searchValue: string,
    visible: boolean,
    foundCoin: string[],
    infoListInput: InfoListInputType,
    infoSearchShow: boolean,
    infoSearch: string,
    getSaerchValue: (value: string) => void,
    openInfoSearch: () => void,
    closeInfoSearch: () => void,
    transferInput: (coinName: string) => void,
    deleteFoundCoin: (coin: string) => void,
    sendSearchQuery: (e: React.MouseEvent<HTMLElement>) => void
]