
const defaultState = {
    coinsList: [],
}

const ADD_COIN = 'ADD_COIN';
const DELETE_COIN = 'DELETE_COIN';

export const userCoinListReducer = (state = defaultState, action) => {
    switch (action.type){
        case ADD_COIN:
            return {...state, coinsList: [...state.coinsList, action.payload]}
        case DELETE_COIN:
            return {...state, coinsList: state.coinsList.filter( item => item.NAME !== action.payload.NAME)}
        default:
            return state
    }
}

export const addCoin = (coin) => ({type: 'ADD_COIN', payload: coin});
export const deleteCoin = (coin) => ({type: 'DELETE_COIN', payload: coin});