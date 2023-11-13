export type GetListCoinsType = (first_number: number, second_number: number) => void

export type CountType = number

export type ButtonsVisibleType ={ min: number, max: number}

export type UsePaginationType = readonly [
    range: number,
    leftArrow: boolean,
    rightArrow: boolean,
    numberButtons: number[],
    scrollRight: () => void,
    scrollLeft: () => void,
    countСoins: (number: number) => void
]