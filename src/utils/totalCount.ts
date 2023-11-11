export const calculateTotal = (list: string[], quantity: number): number => {  
    let result: number = 0;

    if (list.length > quantity) {
        result = Math.ceil((list.length + 1) / quantity);
    }

    return result 
}