import { DataObjType, DataProcessingType } from "../type/typeUtils/typesFileCheck";

export const dataProcessing = (obj: DataObjType): DataProcessingType | void => {

    if (obj === null || Array.isArray(obj) || typeof obj !== 'object') {
        return
    } else if(obj.DISPLAY) {
        const array: DataProcessingType = [];
        const array_name = Object.keys(obj.DISPLAY);
        let count: number = 0;

        array_name.forEach((key) => {
            array.push(obj.DISPLAY[key].USD);
            array[count].NAME = key;
            count = ++count;
        });

        return array
    }
}