export type ObjectOptionsType = {name: string, value: string}

export type SelectType = ObjectOptionsType[]

export type UseSelectOtherCoinsType = [
    optionsAllCoins: SelectType,
    valueSelect: string,
    getSelectedCoin: (coinName: string) => void
]