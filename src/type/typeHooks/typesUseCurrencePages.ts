import { key } from "localforage"
import { type } from "os"

// export type ChartDataType = readonly {[key:string]: string | number[] | string[]}
export type ChartDataType = {
    averageIndex: number[],
    text: string,
    time: string[],
}

export type DescriptionCoinType = {
    Aggregated: boolean,
    Data: {[key:string]: number}[],
    TimeFrom: number,
    TimeTo: number,
}

export type DescriptionCoin = {
    Data: {
        Aggregated: boolean,
        Data: {
            close: number,
            conversionSymbol: string,
            conversionType: string,
            high: number,
            low: number,
            open: number,
            time: number,
            volumefrom: number,
            volumeto: number
        }[],
        TimeFrom: number,
        TimeTo: number
    },
    HasWarning: boolean,
    Message: string,
    RateLimit: {},
    Response: string,
    Type: number
}

export type CurrenceDataType = {
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
    VOLUMEHOURTO: string 
}[]

export type LabelType = {
    close: number,
    conversionSymbol: string,
    conversionType: string,
    high: number,
    low: number,
    open: number,
    time: number,
    volumefrom: number,
    volumeto: number}

export type LabelsType = LabelType[]

export type CurrencePagesType = readonly [
    CurrenceDataType,
    ChartDataType
]

export type UseCompareCoinsType = [
    secondDescriptionCoin: any,
    getSecondCoin: (nameCoin: string) => void
]