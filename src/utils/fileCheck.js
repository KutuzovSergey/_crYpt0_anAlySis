export const dataProcessing = (obj) => {
    if (Array.isArray(obj)) {
        console.log(obj);
        return
    } else if (typeof obj !== 'object') {
        console.log(typeof obj);
        return
    } else {
        const array = [];
        const array_name = Object.keys(obj.DISPLAY);
        let count = 0;

        array_name.forEach((key) => {
            array.push(obj.DISPLAY[key].USD);
            array[count].NAME = key;
            count = ++count;
        });

        return array
    }
    
}