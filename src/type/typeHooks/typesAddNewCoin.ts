import { ObjCoinsType } from "../typeComponents/typesMain";

export type UseAddNawCoinType = [
    showNotification: boolean,
    setShowNotification: (showNotification: boolean) => void,
    addNewCoinPersonalAccount: (coin: ObjCoinsType) => void
]