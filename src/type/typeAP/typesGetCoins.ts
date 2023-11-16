import { DataProcessingType } from "../typeUtils/typesFileCheck"

export type GetAllListType = string[] | []

type ArgumentGetListType = {
    DISPLAY: {[key:string]:any},
    RAW: {[key:string]:any}
}
export type GetDataProcessingType = (result: ArgumentGetListType) => DataProcessingType