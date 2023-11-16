export const findingValueInArray = (arr: string[], value: string): string[] => {
    return arr.filter(item => item.toLowerCase().includes(value.toLowerCase())).sort();
}