export const sortingNumbers = (a, b) =>{
    if (a > b) {
        return -1
    } else {
        return 1
    }
}

export const sortArray = (sort, str, arr) => {
    if (sort === str) {           
        arr.sort((a, b) =>  a[sort].localeCompare(b[sort]));
    } else {
        arr.sort((a, b) =>  sortingNumbers(a[sort], b[sort]));
    }
}