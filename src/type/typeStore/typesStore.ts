import { type } from "os"

// работа с данными пользователя
export type ProfilePhotoType = HTMLImageElement | ArrayBuffer | null | string | undefined

export type StateUserDataType = {
    userData: {
        userName: string,
        userPassword: string,
        userRepeatPassword: string,
        userMail: string,
        userPhone: string,
        userPhoto: ProfilePhotoType,
    }
}

export type UserDataType = {
    userName: string,
    userPassword: string,
    userRepeatPassword: string,
    userMail: string,
    userPhone: string,
    userPhoto: ProfilePhotoType,
}


export type AddUserActionType = {
    type: 'ADD_USER_DATA',
    userData: UserDataType
}

export type UserDataActionType = {
    type: string,
    userData: UserDataType
}

// добавляем и удаляем монеты пользывателя
export type CoinType = {
    CHANGE24HOUR: string,
    CHANGEDAY: string,
    CHANGEHOUR: string,
    CHANGEPCT24HOUR: string,
    CHANGEPCTDAY: string,
    CHANGEPCTHOUR: string,
    CIRCULATINGSUPPLY: string,
    CIRCULATINGSUPPLYMKTCAP: string,
    CONVERSIONLASTUPDATE: string,
    CONVERSIONSYMBOL: string,
    CONVERSIONTYPE: string,
    FROMSYMBOL: string,
    HIGH24HOUR: string,
    HIGHDAY: string, 
    HIGHHOUR: string, 
    IMAGEURL: string,
    LASTMARKET: string,
    LASTTRADEID: string,
    LASTUPDATE: string,
    LASTVOLUME: string,
    LASTVOLUMETO: string,
    LOW24HOUR: string,
    LOWDAY: string,
    LOWHOUR: string,
    MARKET: string,
    MKTCAP: string,
    MKTCAPPENALTY: string,
    NAME: string,
    OPEN24HOUR: string,
    OPENDAY: string,
    OPENHOUR: string,
    PRICE: string,
    SUPPLY: string,
    TOPTIERVOLUME24HOUR: string,
    TOPTIERVOLUME24HOURTO: string,
    TOSYMBOL: string,
    TOTALTOPTIERVOLUME24H: string,
    TOTALTOPTIERVOLUME24HTO: string,
    TOTALVOLUME24H: string,
    TOTALVOLUME24HTO: string,
    VOLUME24HOUR: string,
    VOLUME24HOURTO: string,
    VOLUMEDAY: string,
    VOLUMEDAYTO: string,
    VOLUMEHOUR: string,
    VOLUMEHOURTO: string,
}

export type AddCoinActionType = {
    type: 'ADD_COIN',
    payload: CoinType
}

export type DeleteCoinActionType = {
    type: 'DELETE_COIN',
    payload: CoinType
}

export type UserCoinListActionType = {
    type: string,
    payload: CoinType
}

export type UserCoinListType = {
    coinsList: CoinType[]
}

// получение всех монет 
export type AllCoinsListType = string[]

export type GetCoinsActionType = {
    type: 'GET_COINS_LIST',
    payload: string[]
}

export type CoinListType = {
    coinsList: string[]
}

export type StateType = {
    allCoinList: {coinsList: string[]},
    userCoinList: {coinsList: CoinType[]},
    userData: {userData: UserDataType},
}