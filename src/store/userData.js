import actionConst from '../actionTypes/actionTypes';

const defaultState = {
    userData: [],
}

export const userData = (state = defaultState, action) => {
    switch (action.type){
        case actionConst.ADD_USER_DATA:
            return {...state, userData: [...state.userData, action.userData]}
        default:
            return state
    }
}

// export const addUser = (coin) => ({type: actionConst.ADD_USER, payload: coin});