export const findingValueInArray = (arr, value) => {
    return arr.filter(item => item.toLowerCase().includes(value.toLowerCase())).sort();
}