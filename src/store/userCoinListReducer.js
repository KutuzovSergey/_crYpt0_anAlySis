import { userCoinListConst } from "../constants/constants";

const defaultState = {
    coinsList: [],
}

export const userCoinListReducer = (state = defaultState, action) => {
    switch (action.type){
        case userCoinListConst.ADD_COIN:
            return {...state, coinsList: [...state.coinsList, action.payload]}
        case userCoinListConst.DELETE_COIN:
            return {...state, coinsList: state.coinsList.filter( item => item.NAME !== action.payload.NAME)}
        default:
            return state
    }
}

export const addCoin = (coin) => ({type: userCoinListConst.ADD_COIN, payload: coin});
export const deleteCoin = (coin) => ({type: userCoinListConst.DELETE_COIN, payload: coin});