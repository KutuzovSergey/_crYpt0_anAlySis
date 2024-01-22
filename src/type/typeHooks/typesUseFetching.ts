export type ParamsType = string[]

export type CallbackType = (params: string[]) => Promise<any>

export type UseFetchingType = [
    fetchCoin: (params: string[]) => Promise<any>,
    isLoadingCurrent: boolean, 
    fetchCoinsToList: (params: string[]) => Promise<any>,
    isLoadingListCurrent: boolean,
]