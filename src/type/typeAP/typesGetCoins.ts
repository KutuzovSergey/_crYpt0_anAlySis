import { DataObjType, DataProcessingType } from "../typeUtils/typesFileCheck"

type CoinsInListType = {
    data_available_from: number,
    id: number, 
    partner_symbol: string
    symbol: string
}

export type GetAllListType = string[] | []

export type ResultAllListType = {
    Data: {[key:string]: CoinsInListType},
    HasWarning: boolean,
    Message: string,
    RateLimit: object,
    Response: string,
    Type: number,
}