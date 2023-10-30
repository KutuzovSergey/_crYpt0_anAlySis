import { allCoinListConst } from "../constants/constants";

const defaultState = {
    coinsList: ['Sdr0'],
}

export const allCoinListReducer = (state = defaultState, action) => {
    switch (action.type){
        case allCoinListConst.GET_COINS_LIST:
            return {...state, coinsList: [...action.payload]}
        default:
            return state
    }
}