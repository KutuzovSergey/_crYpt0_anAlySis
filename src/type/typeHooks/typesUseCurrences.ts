import { CurrencesType, ObjCoinsType } from "../typeComponents/typesMain"

export type UseFetchingCallbackType = (params: UseFetchingCallbackType) => Promise<any>

export type UseCurrencesType = [
    isLoadingCoin: boolean,
    selectedSort: string,
    foundCoin: string[],
    sortCurrences: (sort: string) => void,
    getAListOfCoins: (coinList: string[]) => void,
    openModalInfo: (text: string) => void,
    currences: CurrencesType,
    removeCurrences: (currency: ObjCoinsType) => void,
    totalCount: number,
    getListCoins: (indexMin: number, indexMax: number) => void,
    modalInfo: boolean,
    setModalInfo: (bool: boolean) => void,
    modalInfoText: string,
    isLoadingList: boolean,
    coinNotFound: boolean
]