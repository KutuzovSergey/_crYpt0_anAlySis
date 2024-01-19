import { CurrencesType, ObjCoinsType } from "../type/typeComponents/typesMain"

export const sortingNumbers = (a: number | string, b: number | string): number =>{
    if (a > b) {
        return -1
    } else {
        return 1
    }
}
// keyof ObjCoinsType
export const sortArray = (sort: keyof ObjCoinsType, str: string, arr: CurrencesType) => {

    // console.log(sort);
    if (sort === str) {        
        arr.sort((a, b) =>  a[sort].localeCompare(b[sort]));
    } else {
        arr.sort((a, b) =>  sortingNumbers(a[sort], b[sort]));
    }
}