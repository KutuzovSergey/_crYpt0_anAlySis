type DataUSDType = {
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

type DataType = {
    USD: DataUSDType
}

export type DataObjType = {
    DISPLAY: {[key: string]: DataType},
    RAW: {[key: string]: DataType}
}

export type DataProcessingType = DataUSDType[]