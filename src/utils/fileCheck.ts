import { GetDataProcessingType } from "../type/typeAP/typesGetCoins";

export const dataProcessing = (obj: any): any => {
   
    if (Array.isArray(obj)) {
     
        return
    } else if (typeof obj !== 'object') {
        console.log(typeof obj);
        return
    } else if(obj.DISPLAY) {
        const array: any = [];
        const array_name = Object.keys(obj.DISPLAY);
        let count = 0;

        array_name.forEach((key) => {
            array.push(obj.DISPLAY[key].USD);
            array[count].NAME = key;
            count = ++count;
        });

        console.log(array);
        return array
    } else {
        console.log(obj.Data);
        return obj.Data
    }
}