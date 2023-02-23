export const dataProcessing = (obj) => {
    // if (Array.isArray(obj)) {
    //     return obj
    // }
    // console.log(Array.isArray(obj));
    const array = [];
    const array_name = Object.keys(obj.DISPLAY);
    let count = 0;

    array_name.forEach((key) => {
        array.push(obj.DISPLAY[key]);
        array[count].USD.NAME = key;
        count = ++count;
    });
    return array
}