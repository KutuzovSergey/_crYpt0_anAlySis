import { allCoinListConst } from "../constants/constants";
import { AllCoinsListType, CoinListType, GetCoinsActionType } from "../type/typeStore/typesStore";

const defaultState = {
    coinsList: ['ABT'],
}

export const allCoinListReducer = (state = defaultState, action: GetCoinsActionType): CoinListType => {
    switch (action.type){
        case allCoinListConst.GET_COINS_LIST:
            return {...state, coinsList: [...action.payload]}
        default:
            return state
    }
}