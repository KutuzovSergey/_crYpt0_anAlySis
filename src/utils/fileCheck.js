export const dataProcessing = (obj) => {
    const array = [];
    console.log(obj);
    const array_name = Object.keys(obj.DISPLAY);
    let count = 0;

    array_name.forEach((key) => {
        array.push(obj.DISPLAY[key]);
        array[count].USD.NAME = key;
        count = ++count;
    });
    return array
}