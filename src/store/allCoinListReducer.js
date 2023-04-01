
const defaultState = {
    coinsList: ['coin'],
}

const GET_COINS_LIST = 'GET_COINS_LIST';

export const allCoinListReducer = (state = defaultState, action) => {
    switch (action.type){
        case GET_COINS_LIST:
            return {...state, coinsList: [...action.payload]}
        default:
            return state
    }
}

export const getCoinsList = async (allList) => ({type: 'GET_COINS_LIST', payload: await allList})
