import { userCoinListConst } from "../constants/constants";
import { UserCoinListActionType, UserCoinListType } from "../type/typeStore/typesStore";

const defaultState: UserCoinListType = {
    coinsList: [],
}

export const userCoinListReducer = (state = defaultState, action: UserCoinListActionType): UserCoinListType => {
    switch (action.type){
        case userCoinListConst.ADD_COIN:
            console.log(state);
            return {...state, coinsList: [...state.coinsList, action.payload]}
        case userCoinListConst.DELETE_COIN:
            console.log(state);
            return {...state, coinsList: state.coinsList.filter( item => item.NAME !== action.payload.NAME)}
        default:
            return state
    }
}