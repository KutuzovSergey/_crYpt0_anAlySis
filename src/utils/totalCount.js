export const calculateTotal = (list, quantity) => {  
    let result = 0;

    if (list.length > quantity) {
        result = Math.ceil((list.length + 1) / quantity);
    }

    return result
}